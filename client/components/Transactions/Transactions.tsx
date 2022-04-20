import { useContext } from 'react'

import { TransactionContext } from '../../context/TransactionContext'
import TransactionsCard from './TransactionsCard'

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext)

  return (
    <div className="gradient-bg-transactions flex w-full items-center justify-center 2xl:px-20">
      <div className="flex flex-col py-12 px-4 md:p-12">
        {currentAccount ? (
          <h3 className="my-2 text-center text-3xl font-medium text-white">
            Latest <span className="text-lightYellow">Transactions</span>
          </h3>
        ) : (
          <p className="my-2 text-center text-3xl text-white">
            Connect your account to see the latest transactions
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3">
          {transactions &&
            [...transactions]
              .reverse()
              .map((transaction, i) => (
                <TransactionsCard key={i} {...transaction} />
              ))}
        </div>
      </div>
    </div>
  )
}

export default Transactions
