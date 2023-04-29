import CheckBoxes from '../molecules/CheckBoxes.tsx'
import styles from '@/styles/Body.module.css'
import Graph from '../molecules/Graph.tsx'

type PrefType = {
  prefCode: number
  prefName: string
}

type RegionType = {
  region: string
  prefs: prefType[]
}

type Props = {
  regionList: RegionType[]
}

const Body: React.FC = ({ regionList }: Props) => {
  return (
    <>
      <div className={styles.boxes}>
        {regionList.map((regionObj: RegionType) => (
          <CheckBoxes region={regionObj.region} prefs={regionObj.prefs} />
        ))}
      </div>
      <div className={styles.graph}>
        <Graph />
      </div>
    </>
  )
}
export default Body
