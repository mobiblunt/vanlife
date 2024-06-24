import React from 'react'
import { useParams, Link, NavLink, Outlet } from "react-router-dom"

const HostVanDetail = () => {

  const params = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [params.id])

    if (!currentVan) {
      return <h1>Loading...</h1>
  }



  return (
    <section>
      <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
    <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
                <i
                    className={`van-type van-type-${currentVan.type}`}
                >
                    {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
            </div>
        </div>
        <nav className="host-nav">
    <NavLink
                    to="."
                    end
                    
                >
                    Details
                </NavLink>

                <NavLink
                    to="photos"
                    
                >
                    Photos
                </NavLink>
                <NavLink
                    to="pricing"
                    
                >
                    Pricing
                </NavLink>

                

            </nav>
            <Outlet context={[currentVan]} />
    </div>

    

</section>
  )
}

export default HostVanDetail