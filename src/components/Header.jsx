import React from 'react'
import '../styles/header.css'

const Header = () => {
  return (
    <header>
        <ul className='headerMenu'>
          <div>
            <div>Logo Twitter</div>
            <li><div className='headerMenu--icons'></div><a href="#">Home</a></li>
            <li><div className='headerMenu--icons'></div><a href="#">Explore</a></li>
            <li><div className='headerMenu--icons'></div><a href="#">Communities</a></li>
            <li><div className='headerMenu--icons'></div><a href="#">Notifications</a></li>
            <li><div className='headerMenu--icons'></div><a href="#">Messages</a></li>
            <li><div className='headerMenu--icons'></div><a href="#">Bookmarks</a></li>
            <li><div className='headerMenu--icons'></div><a href="#">Profile</a></li>
            <li><div className='headerMenu--icons'></div><a href="#">More</a></li>
          </div>
          <div>
            Perfil
          </div>
        </ul>
    </header>
  )
}

export default Header