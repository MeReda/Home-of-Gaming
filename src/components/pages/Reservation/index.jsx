import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.scss";
import Loader from "../../Loader";

const Reservation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const refForm = useRef();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_zz59qhc",
        "template_nbklcpc",
        refForm.current,
        "g-c31pXbX-Qd1x3rM"
      );

      alert("Message sent successfully");
      const inputs = refForm.current.querySelectorAll(
        "input[type=text], input[type=email], textarea"
      );

      inputs.forEach((input) => (input.value = ""));
    } catch (error) {
      console.error(error);
      alert("There was an error, please try again");
    }
  };

  return (
    <div className="container-fluid">
      <div
        className="row justify-content-between"
        style={{ marginTop: "50px" }}
      >
        <div className="col-lg-6 tarif-container">
          <h3
            style={{ fontWeight: "bold", fontSize: "35px", marginTop: "100px" }}
          >
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
          <form ref={refForm} onSubmit={sendEmail}>
            <input type="text" name="section" value="Reservation" hidden />
            <input name="nom" type="text" placeholder="Votre nom" required />
            <input
              name="tel"
              type="tel"
              maxLength="15"
              pattern="\d*"
              placeholder="Votre numero de telephone"
              required
            />
            <input name="date" type="date" required />
            <input name="houre" type="time" required />
            <input
              name="nombre_personnes"
              type="number"
              min="1"
              max="5"
              placeholder="Nombre de personnes"
              required
            />
            <button type="submit">Reserver</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
