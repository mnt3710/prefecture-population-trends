import styles from '@/styles/CheckBox.module.css'

type Props =  {
  pref: string;
}

const CheckBox = ({ pref }: Props) => {
  return (
    <div className={styles.root}>
      <input type='checkbox' onChange={() => console.log('click')} />
      <label className={styles.pref}>{pref}</label>
    </div>
  )
}

export default CheckBox
