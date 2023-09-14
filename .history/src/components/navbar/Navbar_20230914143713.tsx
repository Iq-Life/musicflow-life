import Link from 'next/link'

const links = [
  {
    id:1,
    title: 'Home',
    url: "/",
  },
  {
    id:2,
    title: 'Portfolio',
    url: "/Portfolio",
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
    <nav>Navbar</nav>
  )
}

export default Navbar