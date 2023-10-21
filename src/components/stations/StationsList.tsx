import React from 'react'
import styles from './StationsList.module.scss'
import Image from 'next/image'
import stationLogo from '/public/logo.png'

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
    <div className={styles.stationsList}>
      <ul>
        <Image className={styles.icon} src={stationLogo} alt='logo' height={45} />
        <h3>Stations</h3>
        {stationsMusic.map((station) => (
          <li key={station.id}>{station.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default StationsList