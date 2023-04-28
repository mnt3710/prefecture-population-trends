import Head from 'next/head'
import { useState } from 'react'
import Body from '../components/organisms/Body.tsx'
import Header from '../components/organisms/Header.tsx'

const fetchPrefList = async () => {
  const response = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    headers: { 'x-api-key': process.env.API_KEY },
  })
  const res = await response.json()
  return res
}

export default function Home({ prefList }) {
  const regionList = [
    { region: '北海道・東北', prefs: [] },
    { region: '関東', prefs: [] },
    { region: '中部', prefs: [] },
    { region: '近畿', prefs: [] },
    { region: '中国・四国', prefs: [] },
    { region: '九州', prefs: [] },
  ]

  prefList.forEach((pref) => {
    if (pref.prefCode <= 7) {
      regionList[0].prefs.push(pref)
    } else if (pref.prefCode <= 14) {
      regionList[1].prefs.push(pref)
    } else if (pref.prefCode <= 23) {
      regionList[2].prefs.push(pref)
    } else if (pref.prefCode <= 30) {
      regionList[3].prefs.push(pref)
    } else if (pref.prefCode <= 39) {
      regionList[4].prefs.push(pref)
    } else {
      regionList[5].prefs.push(pref)
    }
  })

  return (
    <>
      <Head>
        <title>人口推移グラフ</title>
      </Head>
      <main>
        <Header />
        <Body region={regionList} />
      </main>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetchPrefList()
  return {
    props: {
      prefList: res.result,
    },
  }
}
