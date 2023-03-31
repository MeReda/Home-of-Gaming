import Logo from "/img/logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./index.scss";


const NavBar = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html" id="logo">
          <span>
            <img src={Logo} alt="" width="100" />
          </span>
        </a>
        <button
          className="navbar-toggler border-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span>
            <FontAwesomeIcon icon={faBars} color="#ff1525" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="ul-1 navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/">
                ACCEUIL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/bootcamp">
                BOOTCAMP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/reservation">
                RESERVATION
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>

          <div>
            <button
              type="button"
              className="btn btn-danger text-light"
              onClick={() => setShowPopup(true)}
            >
              Se Connecter
            </button>
            <Modal show={showPopup} onHide={() => setShowPopup(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Se Connecter</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Mot de passe
        </label>
        <input type="password" className="form-control" id="password" />
      </div>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowPopup(false)}>
      Annuler
    </Button>
    <Button variant="primary" onClick={() => console.log("Submitted!")}>
      Se connecter
    </Button>
  </Modal.Footer>
</Modal>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
