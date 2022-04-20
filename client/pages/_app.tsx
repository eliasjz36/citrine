import type { AppProps } from 'next/app'
import { TransactionsProvider } from '../context/TransactionContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionsProvider>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        limit={1}
      />
    </TransactionsProvider>
  )
}

export default MyApp
