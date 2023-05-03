import styles from '@/styles/CheckBox.module.css'
import { useState } from 'react'

type Props = {
  pref: string
  prefCode: number
  fetchPopulation: Function
  deletePopulation: Function
}

const CheckBox = ({ pref, prefCode, fetchPopulation, deletePopulation }: Props) => {
  const [checked, setChecked] = useState<boolean>(false)

  const clickCheckBox = () => {
    if (!checked) {
      fetchPopulation(prefCode, pref)
      setChecked(true)
    } else {
      deletePopulation(pref)
      setChecked(false)
    }
  }

  return (
    <div className={styles.root}>
      <input type='checkbox' value={checked} onChange={() => clickCheckBox()} />
      <label className={styles.pref}>{pref}</label>
    </div>
  )
}

export default CheckBox
