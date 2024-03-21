import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  const signed = false
  const loadingAuth = false
  return (
    <div>
      <header>
        <Link to='/'>
          <img src={logoImg} alt='Logo do Web Carros' />
        </Link>
        { !loadingAuth && signed && (
        <Link to='/dashboard'>
          <h4>Icone Dashboard</h4>
        </Link>
        )}
        { !loadingAuth && !signed && (
        <Link to='/login'>
          <h4>Icone Login</h4>
        </Link>
        )}
      </header>
    </div>
  )
}
