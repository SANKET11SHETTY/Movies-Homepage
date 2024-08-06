import React from 'react'

const Movie = ({title, year, img}) => {
  return (
    <div className='movie'>
        <img src={img} alt="" />
        <p>{title}</p>
        <p className='year'>Year : {year}</p>
    </div>
  )
}

export default Movie