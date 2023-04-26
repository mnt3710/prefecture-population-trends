interface PropsType {
  pref: string;
}

const CheckBox = ({pref}: PropsType) => {
  return (
    <>
      <input type="checkbox" onChange={()=>console.log("click")} />
      <label>{pref}</label>
    </>
  )
}

export default CheckBox