import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-5 mt-auto text-center text-md-start">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h5 className="fw-bold mb-3 text-primary">Pisarna360</h5>
            <p className="text-secondary">
              Zanesljiv partner za vaš poslovni uspeh. Zagotavljamo profesionalen poslovni naslov in administrativno podporo.
            </p>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">Podatki podjetja</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Ljuan d.o.o.</li>
              <li className="mb-2">Matična številka: 0000000000</li>
              <li className="mb-2">Davčna številka: SI00000000</li>
              <li className="mb-2"><a href="#privacy-policy" className="text-secondary text-decoration-none">Politika Zasebnosti</a></li>
              <li className="mb-2"><a href="#terms-and-conditions" className="text-secondary text-decoration-none">Splošni Pogoji Poslovanja</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">Kontakt</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2 d-flex align-items-center">
                <MapPin size={18} className="me-2" />
                Kržičeva 4, 1000 Ljubljana
              </li>
              <li className="mb-2 d-flex align-items-center">
                <Mail size={18} className="me-2" />
                info@pisarna360.si
              </li>
              <li className="mb-2 d-flex align-items-center">
                <Phone size={18} className="me-2" />
                +386 1 234 5678
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4 border-secondary" />
        <div className="text-center text-secondary small">
          &copy; {currentYear} Ljuan d.o.o. Vse pravice pridržane.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
