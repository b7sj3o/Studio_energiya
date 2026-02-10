import { useParams, Link } from 'react-router-dom'
import { trainersData } from '../data'
import './Trainer.css'

const STATIC = '/static'

export default function Trainer() {
  const { trainerId } = useParams()
  const trainer = trainersData[trainerId]

  if (!trainer) {
    return (
      <>
        <div className="bg-photo" />
        <div className="container trainer-container">
          <p>Тренера не знайдено.</p>
          <Link to="/" className="back-link">← НАЗАД ДО СТУДІЇ</Link>
        </div>
      </>
    )
  }

  const isAnastasia = trainerId === 'anastasia'

  return (
    <>
      <div className="bg-photo trainer-bg" />
      <div className="container trainer-container">
        <Link to="/">
          <img src={`${STATIC}/logo_new.jpg`} alt="Studio Energiya" className="logo-nav" />
        </Link>
        <div className={`main-photo-container ${isAnastasia ? 'photo-anastasia' : ''}`}>
          <img
            src={`${STATIC}/${trainer.photo}`}
            alt={trainer.name}
            className="main-photo"
          />
        </div>
        <h1>{trainer.name}</h1>
        <div className="price-badges">
          {trainer.prices.map((price, i) => (
            <span key={i} className="price-badge">{price}</span>
          ))}
        </div>
        {trainer.schedule.map((section, i) => (
          <div key={i} className="schedule-card">
            <h3>{section.title}</h3>
            <ul>
              {section.details.map((info, j) => (
                <li key={j}>✦ {info}</li>
              ))}
            </ul>
          </div>
        ))}
        <Link to="/" className="back-link">← НАЗАД ДО СТУДІЇ</Link>
      </div>
    </>
  )
}
