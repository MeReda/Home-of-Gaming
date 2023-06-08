//offres/index.jsx
import React from 'react';
import './index.scss';

const Cardd = ({ title, body, imageUrl  }) => (
  <div className="cardd" style={{backgroundImage: `url(${imageUrl})`}}>
    <div className="cardd-content">
      <h2 className="cardd-title">{title}</h2>
      <br />
      <p className="cardd-body">{body}</p>
    </div>
  </div>
);

const Card = () => (
  <div className="cardd-container">
    <h1>Forfaits Jeux Privilégiés</h1>
    <div className="cards-row">
        <Cardd
          title="Iron Pass" 
          body="Préparez-vous à conquérir le monde virtuel avec notre Pass Fer. Profitez de 16 heures intenses de jeux PC pour seulement 230 MAD. C'est l'arme parfaite pour tout vrai gamer!"
          imageUrl="https://images.alphacoders.com/681/681587.png"
        />
        
        <Cardd
          title="Epic Pass"
          body="Avec notre Pass Épique, vous pouvez jouer sans arrêt pendant 24 heures sur PC pour seulement 330 MAD. Une véritable aventure épique vous attend!   "
          imageUrl="https://images5.alphacoders.com/124/1244644.jpg"
        /> <br /> <br />
        <Cardd
          className ="card contentt"
          title="Mega Pass"
          body="Saisissez l'occasion d'explorer les deux mondes des jeux sur PC et PS5 avec notre Pass Méga.Profitez de 15 heures de gameplay diversifié pour seulement 270 MAD!"
          imageUrl="https://images7.alphacoders.com/130/1305956.png"
        />
  </div>
  </div>
);

export default Card;