"use client"

import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import coins from '/public/coins.gif'
const links = [
  {
    id:1,
    title: 'Home',
    url: "/",
  },
  {
    id:2,
    title: 'Portfolio',
    url: "/portfolio",
  },
  {
    id:3,
    title: 'Blog',
    url: "/blog",
  },
  {
    id:4,
    title: 'About',
    url: "/about",
  },
  {
    id:5,
    title: 'Contact',
    url: "/contact",
  },
  {
    id:6,
    title: 'Dashboard',
    url: "/dashboard",
  },
]

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>MyApp</Link>
      <div className={styles.links}>
        {links.map((link)=> (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      </div>
      <div className={styles.footerNavbar}>
        <button className={styles.logout} onClick={()=> console.log('you logout => []')}>logout</button>
        <div className={styles.icon}>
        <Image src={coins} alt='coins' height={25} width={25} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar