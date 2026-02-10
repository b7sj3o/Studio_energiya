import React, { useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trainersData, studioPhotosList, awardsPhotos, shuffleArray } from '../data'
import './Home.css'

const STATIC = `${import.meta.env.BASE_URL}static`

export default function Home() {
  const photos = useMemo(() => shuffleArray(studioPhotosList), [])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Fancybox) {
      window.Fancybox.bind('[data-fancybox]', { infinite: true })
      return () => window.Fancybox.destroy()
    }
  }, [photos, awardsPhotos])

  return (
    <>
      <div className="bg-photo" />
      <div className="container home-container">
        <img
          src={`${STATIC}/logo_new.jpg`}
          alt="Studio Energiya"
          className="logo home-logo"
        />
        <h1 className="home-title">Studio Energiya</h1>

        <div className="grid trainers-grid">
          {Object.entries(trainersData).map(([id, trainer], i) => (
            <div key={id} className="card-wrap" style={{ animationDelay: `${i * 0.1}s` }}>
              <Link to={`/trainer/${id}`} className="card trainer-card">
                <div className="photo-container">
                  <img src={`${STATIC}/${trainer.photo}`} alt={trainer.name} className="photo" />
                </div>
                <h3>{trainer.name}</h3>
              </Link>
            </div>
          ))}
        </div>

        <section className="awards-section">
          <h2 className="section-title">Наші досягнення</h2>
          <div className="awards-grid">
            {awardsPhotos.map((award) => (
              <div key={award.photo} className="award-card">
                <a href={`${STATIC}/${award.photo}`} data-fancybox="awards">
                  <img src={`${STATIC}/${award.photo}`} alt={award.title} className="award-img" />
                </a>
                <div className="award-text">{award.title}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <h2 className="section-title">Часті питання</h2>
          <details>
            <summary>Як почати тренування?</summary>
            <div className="faq-content">Просто напишіть нам у Telegram або Instagram!</div>
          </details>
          <details>
            <summary>Чи є абонементи?</summary>
            <div className="faq-content">Так, у нас є разові заняття та вигідні абонементи на 8 та 12 занять.</div>
          </details>
        </section>

        <h2 className="section-title">Фото нашої студії</h2>
        <div className="gallery">
          {photos.map((photo) => (
            <a key={photo} href={`${STATIC}/${photo}`} data-fancybox="gallery">
              <img src={`${STATIC}/${photo}`} alt="Студія" loading="lazy" />
            </a>
          ))}
        </div>

        <section className="contacts-section">
          <h2>Контакти</h2>
          <p>📍 м. Ромни, бульвар Шевченка, 6</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="map-btn">
            📍 Ми на карті
          </a>
        </section>
      </div>
    </>
  )
}
