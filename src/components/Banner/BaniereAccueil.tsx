import './BanniereAccueil.scss'

export default function BaniereAccueil() {
  return (
    <div className="banniere">
      <img src="/public/banniere.png" alt="" className="banniere-img" />
      <span className='banniere-text'>Chez vous, partout et ailleurs</span>
    </div>
  )
}
