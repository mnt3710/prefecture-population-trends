import Head from 'next/head'
import Body from '../components/organisms/Body.tsx'
import Header from '../components/organisms/Header.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>人口推移グラフ</title>
      </Head>
      <main>
        <Header />
        <Body />
      </main>
    </>
  )
}
