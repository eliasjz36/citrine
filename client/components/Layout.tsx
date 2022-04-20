import { ReactNode } from 'react'
import Head from 'next/head'

import { Navbar } from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Citrine</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="A crypto exchange" />
        <meta
          name="keywords"
          content="exchange ethereum cryptocurrencies crypto blockchain web3.0"
        />
      </Head>

      <Navbar />

      <div className="mx-auto mt-5 min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>

      <Footer />
    </>
  )
}

export default Layout
