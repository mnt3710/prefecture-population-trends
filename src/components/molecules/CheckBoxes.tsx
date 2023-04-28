import CheckBox from '../atoms/CheckBox.tsx'
import styles from '@/styles/CheckBoxes.module.css'

const CheckBoxes = ({ region, prefs }) => {
  return (
    <div className={styles.root}>
      <p className={styles.region}>{region}</p>
      {prefs.map((pref) => (
        <CheckBox className={styles.checkBox} pref={pref.prefName} />
      ))}
    </div>
  )
}

export default CheckBoxes
