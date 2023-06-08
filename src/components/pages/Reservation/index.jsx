import { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import emailjs from 'emailjs-com';
import "./index.scss";
import Loader from "../../Loader";
import tarif from "./tarif.jpeg";

const Reservation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reservation, setReservation] = useState({ 
    name: '', 
    date: '', 
    time: '', 
    numberOfPeople: '',
    phoneNumber: '' 
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleChange = (e) => {
    setReservation({...reservation, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation for date and time
    const selectedDateTime = new Date(`${reservation.date}T${reservation.time}`);
    if (selectedDateTime <= new Date()) {
      alert('Veuillez choisir une date et heure en future.');
      return;
    }
  
    const db = firebase.firestore();
    try {
      await db.collection('reservations').add({
        ...reservation
      });
  
      // Send email
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', reservation, 'YOUR_USER_ID')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
           console.log('FAILED...', error);
        });
  
      alert('Reservation made successfully!');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-between" style={{ marginTop: "50px" }}>
        <div className="col-lg-6 tarif-container">
          <h3 style={{fontWeight: "bold", fontSize: "35px", marginTop: "100px"}}>
            HOME OF GAMING C'EST QUOI ?
          </h3>
          <p style={{ marginBottom: "25px", fontSize: "25px" }}>
            Home of Gaming, c’est le meilleur E-Sport Center de Oujda ! <br />
            C’est aussi :
          </p>
          <ul>
            <li style={{ marginBottom: "25px", fontSize: "20px" }}>
              10 PC Hautes performances avec tous les jeux du moment
            </li>
            <li style={{ marginBottom: "25px", fontSize: "20px" }}>
              2 Coins salon (TV 55″, PS5)
            </li>
          </ul>
        </div>
        <div className="col-lg-6 reservation-container">
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" value={reservation.name} onChange={handleChange} placeholder="Votre nom" required />
            <input name="phoneNumber" type="tel" maxLength="15" pattern="\d*" value={reservation.phoneNumber} onChange={handleChange} placeholder="Votre numero de telephone" required />
            <input name="date" type="date" value={reservation.date} onChange={handleChange} required />
            <input name="time" type="time" value={reservation.time} onChange={handleChange} required />
            <input name="numberOfPeople" type="number" min="1" max="5" value={reservation.numberOfPeople} onChange={handleChange} placeholder="Nombre de personnes" required />
            <button type="submit">Reserver</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;