export default function CheckBox({pref,id}) {
  return (
    <>
      <input type="checkbox" onChange={()=>console.log("change")} />
      <label>{pref}</label>
    </>
  )
}