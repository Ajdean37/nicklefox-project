import {Link} from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <ul>
      <li><Link to='/'><b>NICKLEFOX</b></Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/services'>Services</Link></li>
      <li><Link to='/success'>Success Stories</Link></li>
      <li><Link to='/careers'>Careers</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/search'>Search</Link></li>
    </ul>
  )
}

export default Navbar;
