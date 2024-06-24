import React from 'react'
import {Link, useSearchParams } from 'react-router-dom'
import {getVans} from '../api'

const Vans = () => {
  const [vans, setVans] = React.useState([])

  let [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)


  const typeFilter = searchParams.get('type')

  const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    //console.log(displayedVans)

    React.useEffect(() => {
      async function loadVans() {
        setLoading(true)
        try {
            const data = await getVans()
            setVans(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    loadVans()
    }, [])

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="card card-compact w-96 bg-base-100 shadow-xl">
            <Link to={`/vans/${van.id}`} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
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

    if (loading) {
      return <h1 aria-live="polite">Loading...</h1>
  }
  
  if (error) {
      return <h1 aria-live="assertive">There was an error: {error.message}</h1>
  }

    

  return (
    <>
    <h1 className='m-4 text-lg font-bold'>Explore our van options</h1>
    <div className="van-list-filter-buttons">
      <Link className={`van-type simple ${typeFilter === "simple" &&  "selected"}`} to='?type=simple'>Simple </Link>
      <Link className={`van-type luxury ${typeFilter === "luxury" &&  "selected"}`} to='?type=luxury'>Luxury </Link>
      <Link className={`van-type rugged ${typeFilter === "rugged" &&  "selected"}`} to='?type=rugged'>Rugged </Link>
      {typeFilter ? (<Link className="van-type clear-filters" to=''>Clear </Link> ) : null}
            
            
            </div>
    <div className='grid md:grid-cols-3 gap-4 m-4'>
        
            {vanElements}
    </div>
    </>
  )
}

export default Vans