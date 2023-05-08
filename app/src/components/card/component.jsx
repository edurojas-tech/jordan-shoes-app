import './style.css'
function component(prop) {
  return (
    <div className='card'>
      <img src={prop.imagem} alt={prop.imagem} loading='lazy' />
    </div>
  )
}

export default component