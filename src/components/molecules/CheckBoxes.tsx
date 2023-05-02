import CheckBox from '../atoms/CheckBox.tsx'
import styles from '@/styles/CheckBoxes.module.css'

type PrefType = {
  prefCode: number
  prefName: string
}

type Props = {
  region: string
  prefs: PrefType[]
}

const CheckBoxes = ({ region, prefs, fetchPopulation }: Props) => {
  return (
    <div className={styles.root}>
      <p className={styles.region}>{region}</p>
      {prefs.map((pref: PrefType) => (
        <CheckBox className={styles.checkBox} pref={pref.prefName} prefCode={pref.prefCode} fetchPopulation={fetchPopulation}/>
      ))}
    </div>
  )
}

export default CheckBoxes
