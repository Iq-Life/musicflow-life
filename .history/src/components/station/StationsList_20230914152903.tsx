import React from 'react'

const stationsMusic = [
  {
    id:1,
    title: 'Rock'
  },
  {
    id:2,
    title: 'Jazz'
  },
]

const StationsList = () => {
  return (
    <div className='stationsList'>
      <ul>
        Station
        {stationsMusic.map((station) => (
          <li key={station.id}>{station.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default StationsList