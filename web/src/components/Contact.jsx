import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Send, MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <section id="kontakt" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Stopite v stik z nami</h2>
          <p className="text-muted lead">
            Imate dodatna vprašanja? Pišite nam ali nas pokličite.
          </p>
        </div>

        <Row className="justify-content-center g-5">
          <Col lg={5}>
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h4 className="fw-bold mb-4">Kontaktni podatki</h4>
              
              <div className="d-flex mb-4">
                <MapPin className="text-primary me-3 flex-shrink-0" />
                <div>
                  <h6 className="fw-bold mb-1">Naslov</h6>
                  <p className="text-muted mb-0">Ljuan d.o.o.<br/>Kržičeva 4<br/>1000 Ljubljana</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <Mail className="text-primary me-3 flex-shrink-0" />
                <div>
                  <h6 className="fw-bold mb-1">E-pošta</h6>
                  <p className="text-muted mb-0">info@pisarna360.si</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <Phone className="text-primary me-3 flex-shrink-0" />
                <div>
                  <h6 className="fw-bold mb-1">Telefon</h6>
                  <p className="text-muted mb-0">+386 1 234 5678</p>
                </div>
              </div>

              <div className="d-flex">
                <Clock className="text-primary me-3 flex-shrink-0" />
                <div>
                  <h6 className="fw-bold mb-1">Delovni čas</h6>
                  <p className="text-muted mb-0">Pon - Pet: 8:00 - 16:00</p>
                </div>
              </div>
              
              <hr className="my-4" />
              
              <div className="mt-auto">
                <iframe 
                  title="map"
                  width="100%" 
                  height="200" 
                  frameBorder="0" 
                  style={{ border: 0, borderRadius: '8px' }} 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=14.5000,46.0500,14.5100,46.0600&amp;layer=mapnik" 
                  allowFullScreen
                ></iframe>
                <small className="text-muted d-block mt-1 text-center">Prikaz lokacije je informativen.</small>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="fw-bold mb-4">Pošljite povpraševanje</h4>
              {submitted && (
                <Alert variant="success" className="mb-4">
                  Hvala za vaše sporočilo! Kontaktirali vas bomo v najkrajšem možnem času.
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group className="mb-3 mb-md-0" controlId="formName">
                      <Form.Label>Ime in priimek</Form.Label>
                      <Form.Control type="text" placeholder="Janez Novak" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Telefon</Form.Label>
                      <Form.Control type="tel" placeholder="040 123 456" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>E-poštni naslov</Form.Label>
                  <Form.Control type="email" placeholder="janez@primer.si" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Zadeva</Form.Label>
                  <Form.Select aria-label="Izberite zadevo">
                    <option>Splošno povpraševanje</option>
                    <option>Najem pisarne - Osnovni paket</option>
                    <option>Najem pisarne - Poslovni paket</option>
                    <option>Najem pisarne - Premium paket</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Sporočilo</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Vaše sporočilo..." required />
                </Form.Group>

                <Button variant="primary" type="submit" size="lg" className="w-100 d-flex align-items-center justify-content-center">
                  <Send size={18} className="me-2" /> Pošlji sporočilo
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
