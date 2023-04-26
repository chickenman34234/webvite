import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo from "./images/logo.jpg"

export default function NavBar() {
  const path = window.location.pathname
  return (
    <nav className='nav'>
      
        <Link to='/' className='site-title'>ALPHA NETWORK</Link>
        <ul> 
        <CustomLink to='/gui'>GUI BUILDER</CustomLink>
        <CustomLink to='/realms'>REALMS</CustomLink>
        <CustomLink to='/discordbot'>OUR DISCORD BOT</CustomLink>
        <CustomLink to='/moretools'>MORE TOOLS</CustomLink>

        
        </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}) {
  const reslovedPath = useResolvedPath(to)
  const isActive = useMatch({path: reslovedPath.pathname, end:true})

  return(
    <li className={isActive ? "active": ""}>
      <Link to={to}>{children}</Link>
    </li>
  )
}
