import CheckBox from '../atoms/CheckBox.tsx'
import styles from '@/styles/CheckBoxes.module.css'

type PrefType = {
  prefCode: number
  prefName: string
}

type Props = {
  region: string
  prefs: PrefType[]
  fetchPopulation: Function
  deletePopulation: Function
}

const CheckBoxes = ({ region, prefs, fetchPopulation, deletePopulation }: Props) => {
  return (
    <div className={styles.root}>
      <p className={styles.region}>{region}</p>
      {prefs.map((pref: PrefType) => (
        <CheckBox
          className={styles.checkBox}
          pref={pref.prefName}
          prefCode={pref.prefCode}
          fetchPopulation={fetchPopulation}
          deletePopulation={deletePopulation}
        />
      ))}
    </div>
  )
}

export default CheckBoxes
