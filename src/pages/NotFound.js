import React from 'react'
import pageNotFound from '../Assets/pageNotFound.jpg'

const NotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div>
        <img src={pageNotFound} alt='page not found' className='h-60'/>
      </div>
    </div>
  )
}

export default NotFound
