import Head from 'next/head'
import Body from '../components/organisms/Body.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>人口推移グラフ</title>
      </Head>
      <main>
        <Body />
      </main>
    </>
  )
}
