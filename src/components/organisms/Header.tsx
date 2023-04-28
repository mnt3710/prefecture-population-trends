import styles from '@/styles/Header.module.css'

const Header = () => {
  return(
    <div className={styles.root}>
      <p className={styles.title}>人口推移グラフ</p>
    </div>
  )
}

export default Header