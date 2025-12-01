import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div 
      className="py-5 border-bottom position-relative"
      style={{
        backgroundImage: 'url("/img/ljubljana.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Parallax effect
      }}
    >
      {/* White overlay to ensure text readability */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 bg-white" 
        style={{ opacity: 0.9 }} 
      ></div>

      <Container className="py-5 position-relative">
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0 text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-3">
              Vaš poslovni naslov v <span className="text-primary">središču Ljubljane</span>
            </h1>
            <p className="lead text-muted mb-4">
              Registrirajte svoje podjetje na prestižni lokaciji Kržičeva 4. 
              Popolna rešitev za virtualno pisarno z vso potrebno podporo.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-column flex-sm-row">
              <Button variant="primary" size="lg" href="#cenik">
                Izberite paket <ArrowRight size={20} className="ms-2" />
              </Button>
              <Button variant="outline-secondary" size="lg" href="#prednosti">
                Več informacij
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img 
              src="/img/stavba.png" 
              alt="Poslovna stavba Kržičeva 4" 
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;