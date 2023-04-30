import Head from 'next/head'
import Body from '../components/organisms/Body.tsx'
import Header from '../components/organisms/Header.tsx'
import { useState } from 'react'

type PrefType = {
  prefCode: number
  prefName: string
}

type Props = {
  prefList: PrefType[]
}

const fetchPrefList = async () => {
  const response = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    headers: { 'x-api-key': process.env.API_KEY },
  })
  const res = await response.json()
  return res
}

const fetchPopulation = async () => {
  const response = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=11',
    {
      headers: { 'x-api-key': process.env.API_KEY },
    },
  )
  const res = await response.json()
  return res
}

const Home = ({ prefList, population }) => {
  const regionList = [
    { region: '北海道・東北', prefs: [] },
    { region: '関東', prefs: [] },
    { region: '中部', prefs: [] },
    { region: '近畿', prefs: [] },
    { region: '中国・四国', prefs: [] },
    { region: '九州', prefs: [] },
  ]

  prefList.forEach((pref: PrefType) => {
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

  let populationArray = []
  let yearArray = []

  population.forEach((x) => {
    populationArray.push(x.value)
    yearArray.push(x.year)
  })

  return (
    <>
      <Head>
        <title>人口推移グラフ</title>
      </Head>
      <main>
        <Header />
        <Body regionList={regionList} population={populationArray} year={yearArray} />
      </main>
    </>
  )
}

export default Home

export const getServerSideProps = async (context) => {
  const prefRes = await fetchPrefList()
  const populationRes = await fetchPopulation()
  return {
    props: {
      prefList: prefRes.result,
      population: populationRes.result.data[0].data
    },
  }
}
