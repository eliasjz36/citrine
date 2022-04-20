import type { NextPage } from 'next'
import { Services, Transactions, Welcome } from '../components'

import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Welcome />
      <Services />
      <Transactions />
    </Layout>
  )
}

export default Home
