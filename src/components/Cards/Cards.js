import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <section className="highlight">
      <div className="highlight-header">
        <h1 className="highlight-title"> Our Menu</h1>
      </div>
      <div className="highlight-cards-container">
        <div className="card">
          <img src="https://i.ibb.co/yRg9tnW/card1.jpg" alt="Card 1" />
          <div className="card-title-container">
            <h4 className="card-title">Card title</h4>
            <p className="card-price">
              <strong>$50.19</strong>
            </p>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
            neque elit.
          </p>
          <button className="card-button">Order now</button>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/X7xDcjf/card2.jpg" alt="Card 2" />
          <div className="card-title-container">
            <h4 className="card-title">Card title</h4>
            <p className="card-price">
              <strong>$33.55</strong>
            </p>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
            neque elit.
          </p>
          <button className="card-button">Order now</button>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/bgD2V2K/card3.jpg" alt="Card 3" />
          <div className="card-title-container">
            <h4 className="card-title">Card title</h4>
            <p className="card-price">
              <strong>$25.85</strong>
            </p>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
            neque elit.
          </p>
          <button className="card-button">Order now</button>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/bgD2V2K/card3.jpg" alt="Card 4" />
          <div className="card-title-container">
            <h4 className="card-title">Card title</h4>
            <p className="card-price">
              <strong>$31.08</strong>
            </p>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
            neque elit.
          </p>
          <button className="card-button">Order now</button>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/X7xDcjf/card2.jpg" alt="Card 5" />
          <div className="card-title-container">
            <h4 className="card-title">Card title</h4>
            <p className="card-price">
              <strong>$35.18</strong>
            </p>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
            neque elit.
          </p>
          <button className="card-button">Order now</button>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/yRg9tnW/card1.jpg" alt="Card 6" />
          <div className="card-title-container">
            <h4 className="card-title">Card title</h4>
            <p className="card-price">
              <strong>$40.36</strong>
            </p>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
            neque elit.
          </p>
          <button className="card-button">Order now</button>
        </div>
      </div>
    </section>
  )
}

export { Cards }
