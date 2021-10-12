import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/img/digimascotaslogo.png';

const Footer = () => {
  return (
    <footer className="row bg-light py-4">
        <section className="col-md-4 text-center">
          <img src={logo} alt="" width="250" className="img-fluid mb-4" />
          <p>Con <span className="text-danger">❤</span> desde Yucatán</p>
        </section>
        <section className="col-md-4">
          <h3>Más de DigiMascotas</h3>
          <p><Link to="/contact">Contacto</Link></p>
          <p><Link to="/termsandconditions">Términos y Condiciones</Link></p>
          <p><Link to="/changes">Devoluciones o cambios</Link></p>
          <p><Link to="/privacity">Política de privacidad</Link></p>
          <p><Link to="/faq">Preguntas frecuentes</Link></p>
        </section>
        <section className="col-md-4">
          <h3>Conoce DigiMascotas</h3>
          <p><a href="https://codiziapp.com/aboutus">Acerca de nosotros</a></p>
          <p><Link to="/termsandconditions">Términos y Condiciones</Link></p>
          <p><Link to="/changes">Devoluciones o cambios</Link></p>
          <p><Link to="/privacity">Política de privacidad</Link></p>
          <p><Link to="/faq">Preguntas frecuentes</Link></p>
        </section>
    </footer>
  );
};

export default Footer;
