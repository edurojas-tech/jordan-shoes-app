import './style.css'

function component(prop) {
  return (
    <div className='hero'>
      <div className="hero__content">
        <h1>{prop.title}</h1>
        <p className='description'>
          {prop.description}
        </p>
      </div>
    </div>
  )
   
}

export default component
