import { Link } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
  return (
    <div className='error-main'>
        <h1 className='error-title'>404</h1>
        <h3 className='error-message'>Oups! La page que vous demandez n&apos;existe pas.</h3>
        <h5 className='error-return'>
          <Link to='/' className='error-url'>Retourner sur la page d&apos;accueil</Link>
        </h5>
    </div>
  )
}
