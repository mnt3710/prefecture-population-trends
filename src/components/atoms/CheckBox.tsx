import styles from '@/styles/CheckBox.module.css'

interface PropsType {
  pref: string
}

const CheckBox = ({ pref }: PropsType) => {
  return (
    <div className={styles.root}>
      <input type='checkbox' onChange={() => console.log('click')} />
      <label className={styles.pref}>{pref}</label>
    </div>
  )
}

export default CheckBox
