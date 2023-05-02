import Head from 'next/head'
import Body from '../components/organisms/Body.tsx'
import Header from '../components/organisms/Header.tsx'
import { useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'

type PrefType = {
  prefCode: number
  prefName: string
}

type Props = {
  prefList: PrefType[]
}

const fetchPrefList = async () => {
  const url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
  const header = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const response = await axios.get(url, header)
  return response.data
}

const fetchPopulation = async (prefCode) => {
  const url = 'http://localhost:3000/api/population?prefCode=' + prefCode
  const response = await axios.get(url)
  return response.data
}

const Home = ({ prefList }) => {
  const [population, setPopulation] = useState([])
  const [year, setYear] = useState([])

  const clickBtn = async (prefCode, pref) => {
    const response = await fetchPopulation(prefCode)
    const responseArray = response.result.data[0].data

    let populationArray = [...population, { name: pref, data: [] }]
    let yearArray = []

    responseArray.forEach((x) => {
      populationArray[population.length].data.push(x.value)
      yearArray.push(x.year)
    })

    setPopulation(populationArray)
    setYear(yearArray)
  }

  const deletePopulation = (pref) => {
    setPopulation(population.filter(x => x.name != pref))
  }

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

  return (
    <>
      <Head>
        <title>人口推移グラフ</title>
      </Head>
      <main>
        <Header />
        <Body
          regionList={regionList}
          population={population}
          year={year}
          fetchPopulation={clickBtn}
          deletePopulation={deletePopulation}
        />
        <button onClick={() => deletePopulation("福島県")}>delete</button>
        {JSON.stringify(population)}
      </main>
    </>
  )
}

export default Home

export const getServerSideProps = async (context) => {
  const prefRes = await fetchPrefList()

  return {
    props: {
      prefList: prefRes.result,
    },
  }
}
