import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div 
      className="py-5 border-bottom position-relative"
      style={{
        backgroundImage: `url("${import.meta.env.BASE_URL}img/ljubljana.jpg")`,
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
              Prva izbira za <span className="text-primary">virtualno pisarno</span> v Ljubljani
            </h1>
            <p className="lead text-muted mb-4">
              Z nami dobite več kot le poslovni naslov – pridobite celovito podporo in prepoznavnost na prestižni lokaciji Kržičeva 4.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-column flex-sm-row">
              <Button variant="primary" size="lg" href="#pricing">
                Preverite pakete <ArrowRight size={20} className="ms-2" />
              </Button>
              <Button variant="outline-secondary" size="lg" href="#prednosti">
                Več informacij
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img 
              src={`${import.meta.env.BASE_URL}img/stavba.png`}
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