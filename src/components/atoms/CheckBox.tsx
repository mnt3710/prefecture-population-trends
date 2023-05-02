import styles from '@/styles/CheckBox.module.css'

type Props = {
  pref: string
}

const CheckBox = ({ pref, prefCode, fetchPopulation }: Props) => {
  return (
    <div className={styles.root}>
      <input type='checkbox' onChange={() => fetchPopulation(prefCode)} />
      <label className={styles.pref}>{pref}</label>
    </div>
  )
}

export default CheckBox
