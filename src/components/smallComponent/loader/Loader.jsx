import React from 'react'
import './Loader.css'
import { Audio, BallTriangle, InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='loader'>
     {/* <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#2B114F"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true} 
  /> */}
 <InfinitySpin
  visible={true}
  width="200"
  color="#ffffff"
  ariaLabel="infinity-spin-loading"
  />
  <p>Loading...</p>
    </div>
  )
}

export default Loader
