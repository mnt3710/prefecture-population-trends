import CheckBoxes from '../molecules/CheckBoxes.tsx'
import styles from '@/styles/Body.module.css'
import Graph from '../molecules/Graph.tsx'

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

const Body = ({
  regionList,
  population,
  year,
  fetchPopulation,
  deletePopulation,
}: Props) => {
  return (
    <>
      <div className={styles.boxes}>
        {regionList.map((regionObj: RegionType) => (
          <CheckBoxes
            region={regionObj.region}
            prefs={regionObj.prefs}
            fetchPopulation={fetchPopulation}
            deletePopulation={deletePopulation}
          />
        ))}
      </div>
      {JSON.stringify(population)}
      <div className={styles.graph}>
        <Graph population={population} year={year} />
      </div>
    </>
  )
}
export default Body
