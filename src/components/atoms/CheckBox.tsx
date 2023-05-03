import { useState } from 'react'
import styles from '@/styles/CheckBox.module.css'

type Props = {
  pref: string
  prefCode: number
  fetchPopulation: Function
  deletePopulation: Function
}

const CheckBox = ({ pref, prefCode, fetchPopulation, deletePopulation }: Props) => {
  const [isChecked, setIsChecked] = useState(false)

  const clickCheckBox = (): void => {
    if (!isChecked) {
      fetchPopulation(prefCode, pref)
      setIsChecked(true)
    } else {
      deletePopulation(pref)
      setIsChecked(false)
    }
  }

  return (
    <div className={styles.root}>
      <input type='checkbox' onChange={clickCheckBox} />
      <label className={styles.pref}>{pref}</label>
    </div>
  )
}

export default CheckBox
