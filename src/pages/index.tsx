import Head from 'next/head'
import CheckBox from '../components/atoms/CheckBox.tsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>人口推移グラフ</title>
      </Head>
      <main>
        <CheckBox pref="山形県" id="1"></CheckBox>
      </main>
    </>
  )
}
