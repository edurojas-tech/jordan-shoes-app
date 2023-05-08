import './style.css'
function component(prop) {
  return (
    <div className={prop.nameClass}>
      <span>{prop.description}</span>
    </div>
  )
}

export default component