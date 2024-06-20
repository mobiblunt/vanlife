import React from 'react'
import {Link} from 'react-router-dom'

const Vans = () => {

    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="card card-compact w-96 bg-base-100 shadow-xl">
            <Link to={`/vans/${van.id}`}>
    <figure><img src={van.imageUrl} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{van.name}</h2>
      <p>${van.price}/day</p>
      <div className="card-actions">
      <div className={`badge badge-outline badge-${van.type === "luxury" ? "secondary" : (van.type === "rugged" ? "accent" : "primary" )}`}>{van.type}</div> 
      </div>
    </div>
    </Link>
  </div>
    ))

    

  return (
    <>
    <h1 className='m-4 text-lg font-bold'>Explore our van options</h1>
    <div className='grid md:grid-cols-3 gap-4 m-4'>
        
            {vanElements}
    </div>
    </>
  )
}

export default Vans