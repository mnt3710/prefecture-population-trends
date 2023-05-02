import styles from '@/styles/CheckBox.module.css'
import { useState } from 'react'

type Props = {
  pref: string
}

const CheckBox = ({ pref, prefCode, fetchPopulation, deletePopulation }: Props) => {
  const [checked, setChecked] = useState(false)

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
      {checked.toString()}
    </div>
  )
}

export default CheckBox
