import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Home.css'
import StoreIcon from './StoreIcon'


const Home = ({stores}) => {

  const storeList = stores.map(store => {

    return(
      <StoreIcon
        id={store.storeID}
        key={store.storeID}
        name={store.storeName}
        logo={store.images.logo}
      />
    )
  })

  return (
    <div className="Home">
      <h3 className="Welcome">Find Affordable games from these amazing Titles..</h3>
      <div className="Stores-Container">
        {storeList}
      </div>
    </div>
  )
}


export default Home;

Home.propTypes = {
  stores: PropTypes.array,
  stores: PropTypes.arrayOf(PropTypes.object)
}
