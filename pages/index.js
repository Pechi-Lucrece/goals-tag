import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>goals</title>
      </Head>

      <div className={"flex flex-column"}>
        <Navbar/>
        <Main />
        <Footer />
      </div>
    </div>
  )
}
