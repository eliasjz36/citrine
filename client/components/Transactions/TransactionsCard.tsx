import useFetch from '../../hooks/useFetch'
import { shortenAddress } from '../../utils/shortenAddress'

interface TransactionsCardProps {
  addressTo: string
  addressFrom: string
  timestamp: string
  message: string
  keyword: string
  amount: number
  url: string
}

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}: TransactionsCardProps) => {
  const gifUrl = useFetch(keyword)

  return (
    <div className="gradient-bg-transactionsCard m-4 flex max-w-full transition-transform hover:scale-95">
      <div className="mt-3 flex w-full flex-col items-center p-2">
        <div className="display-flex mb-6 w-full justify-start p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-base text-white hover:underline">
              From: {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-base text-white hover:underline">
              To: {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-base text-white">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-base text-white">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="h-44 w-full rounded-md object-cover shadow-lg"
        />
        <div className="blue-glassmorphism -mt-5 w-max rounded-3xl p-3 px-5 shadow-lg">
          <p className="font-bold text-white">{timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default TransactionsCard
