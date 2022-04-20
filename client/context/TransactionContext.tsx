declare var window: any

/* eslint-disable consistent-return */
import { useEffect, useState, createContext, ReactNode } from 'react'

import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'
import type { HTMLFormEvent } from '../types/types'
import { Transaction } from '../types/interfaces'
import { toast } from 'react-toastify'

export const TransactionContext = createContext<any | null>(null)

const isBrowser = () => typeof window !== 'undefined'

const { ethereum } = isBrowser() && window

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )

  return transactionsContract
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  if (!isBrowser) return null

  const customId = 'custom-id-yes'
  const [formData, setformData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  })
  const [currentAccount, setCurrentAccount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [transactionCount, setTransactionCount] = useState<string>()
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const transactionCount = localStorage.getItem('transactionCount')

    setTransactionCount(transactionCount || '')
  }, [])

  const handleChange = (e: HTMLFormEvent<HTMLInputElement>, name: string) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract()

        const availableTransactions =
          await transactionsContract.getAllTransactions()
        const structuredTransactions = availableTransactions.map(
          (transaction: Transaction) => {
            return {
              addressTo: transaction.receiver,
              addressFrom: transaction.sender,
              timestamp: new Date(
                Number(transaction.timestamp) * 1000
              ).toLocaleString(),
              message: transaction.message,
              keyword: transaction.keyword,
              amount: parseInt(transaction.amount._hex) / 10 ** 18,
            }
          }
        )

        setTransactions(structuredTransactions)
      } else {
        throw new Error('Please install MetaMask.')
      }
    } catch (error) {
      console.error(error)

      toast.error((error as Error).message, {
        toastId: customId,
      })
    }
  }

  const checkIfWalletIsConnect = async () => {
    try {
      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])

        getAllTransactions()
      } else {
        toast.info(
          'Press the "Connect wallet" button to connect to your MetaMask account',
          { toastId: customId }
        )
      }
    } catch (error) {
      console.error(error)

      toast.error((error as Error).message, {
        toastId: customId,
      })
    }
  }

  const checkIfTransactionsExists = async () => {
    try {
      const transactionsContract = createEthereumContract()
      const currentTransactionCount =
        await transactionsContract.getTransactionCount()

      window.localStorage.setItem('transactionCount', currentTransactionCount)
    } catch (error) {
      console.error(error)

      toast.error('No transactions were found', {
        toastId: customId,
      })
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) throw new Error('Please install MetaMask.')

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })

      setCurrentAccount(accounts[0])
      window.location.reload()
    } catch (error) {
      console.error(error)

      toast.error((error as Error).message, {
        toastId: customId,
      })
    }
  }

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        if (currentAccount) {
          const { addressTo, amount, keyword, message } = formData
          const transactionsContract = createEthereumContract()
          const parsedAmount = ethers.utils.parseEther(amount)

          await ethereum.request({
            method: 'eth_sendTransaction',
            params: [
              {
                from: currentAccount,
                to: addressTo,
                gas: '0x5208',
                value: parsedAmount._hex,
              },
            ],
          })

          const transactionHash = await transactionsContract.addToBlockchain(
            addressTo,
            parsedAmount,
            message,
            keyword
          )

          setIsLoading(true)

          await toast.promise(
            transactionHash.wait(),
            {
              pending: `Executing the transaction...`,
              success: `Transaction confirmed!`,
              error: `Error, transaction not completed`,
            },
            { hideProgressBar: true }
          )

          setIsLoading(false)

          const transactionsCount =
            await transactionsContract.getTransactionCount()

          setTransactionCount(transactionsCount.toNumber())
          window.location.reload()
        } else {
          throw new Error(
            'No accounts found, please connect to your MetaMask account'
          )
        }
      } else {
        throw new Error('Please install MetaMask.')
      }
    } catch (error) {
      console.error(error)

      toast.error((error as Error).message, {
        toastId: customId,
      })
    }
  }

  useEffect(() => {
    if (!ethereum)
      toast.error('Please install MetaMask.', {
        toastId: customId,
      })
    else {
      checkIfWalletIsConnect()

      if (currentAccount) checkIfTransactionsExists()
    }
  }, [transactionCount])

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
