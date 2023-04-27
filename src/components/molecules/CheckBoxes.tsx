import CheckBox from '../atoms/CheckBox.tsx'
import styles from '@/styles/CheckBoxes.module.css'

const CheckBoxes = ({ region, pref }) => {
  return (
    <div className={styles.root}>
      <p className={styles.region}>{region}</p>
      {pref.map((value) => (
        <CheckBox className={styles.checkBox} pref={value} />
      ))}
    </div>
  )
}

export default CheckBoxes

