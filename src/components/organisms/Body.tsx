import CheckBoxes from '../molecules/CheckBoxes.tsx'
import Graph from '../molecules/Graph.tsx'
import styles from '@/styles/Body.module.css'

type PrefType = {
  prefCode: number
  prefName: string
}

type RegionType = {
  region: string
  prefs: PrefType[]
}

type PopulationType = {
  name: string
  data: number[]
}

type Props = {
  regionList: RegionType[]
  population: PopulationType[]
  year: number[]
  fetchPopulation: Function
  deletePopulation: Function
}

const Body = ({ regionList, population, year, fetchPopulation, deletePopulation }: Props) => {
  return (
    <>
      <div className={styles.boxes}>
        {/* TODO: keyをindexではないものにする */}
        {regionList.map((regionObj: RegionType, index: number) => (
          <CheckBoxes
            key={index.toString()}
            region={regionObj.region}
            prefs={regionObj.prefs}
            fetchPopulation={fetchPopulation}
            deletePopulation={deletePopulation}
          />
        ))}
      </div>
      <div className={styles.graph}>
        <Graph population={population} year={year} />
      </div>
    </>
  )
}
export default Body
