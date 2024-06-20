import React from 'react'
import { useParams } from "react-router-dom"

const VanDetail = () => {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

  return (
    <div className='flex justify-center'>
        {van ? (<div className="card w-100 glass">
  <figure><img src={van.imageUrl} alt="car!"/></figure>
  <div className="card-body">
  <div className={`badge badge-outline badge-${van.type === "luxury" ? "secondary" : (van.type === "rugged" ? "accent" : "primary" )}`}>{van.type}</div>
    <h2 className="card-title">{van.name}</h2>
    <h2 className="card-title">${van.price}/day</h2>
    <p>{van.description}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Rent This Van</button>
    </div>
  </div>
</div>) : <h2>Loading...</h2>}


    </div>
  )
}

export default VanDetail