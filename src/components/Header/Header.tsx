import { NavLink, useMatch } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <div className="header">
        <NavLink to="/" className='header-logo'><img src='/public/logo.png' alt='logo-principal' className='logo'></img></NavLink>
        <ul className='menu'>
            <li className='menu-item'>
              <NavLink to='/' className={useMatch('/') ? 'is-active' : 'menu-item-text'}>Accueil</NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to='/a-propos' className={useMatch('/a-propos') ? 'is-active' : 'menu-item-text'} >A propos</NavLink>
            </li>
        </ul>
    </div>
  )
}
