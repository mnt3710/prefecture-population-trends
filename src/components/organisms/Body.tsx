import CheckBoxes from '../molecules/CheckBoxes.tsx'
import styles from '@/styles/Body.module.css'

const Body = ({region}) => {
  return (
    <>
      <div className={styles.boxes}>
        {region.map((obj) => (
          <CheckBoxes region={obj.region} prefs={obj.prefs} />
        ))}
      </div>
    </>
  )
}

export default Body
