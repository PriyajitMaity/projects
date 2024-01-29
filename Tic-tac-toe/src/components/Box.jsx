/* eslint-disable react/prop-types */

export default function Box({value, onClick}) {
  return (
    <div>
        <button className="box" onClick={onClick}>{value}</button>
    </div>
  )
}
