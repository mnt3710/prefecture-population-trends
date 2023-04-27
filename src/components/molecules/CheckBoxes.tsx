import CheckBox from '../atoms/CheckBox.tsx'

const CheckBoxes = ({ region, pref }) => {
  return (
    <>
      <p className="region-toggle">{region}</p>
      {pref.map((value) => (
        <CheckBox pref={value} />
      ))}
    </>
  )
}

export default CheckBoxes
