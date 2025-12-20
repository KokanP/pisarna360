import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "OSNOVNI",
    price: "39",
    features: [
      "Poslovni naslov",
      "Sprejem pošte",
      "Obveščanje o prispeli pošti",
      "Hramba pošte (do 30 dni)",
      "Izjava lastnika objekta"
    ],
    recommended: false
  },
  {
    name: "POSLOVNI",
    price: "59",
    features: [
      "Vse iz paketa OSNOVNI",
      "Skeniranje pošte (do 50 strani/mesec)",
      "Pošiljanje skenov na e-mail",
      "Fizično prepošiljanje (1x mesečno)",
      "Meeting room (2h/mesec)"
    ],
    recommended: true
  },
  {
    name: "PREMIUM",
    price: "89",
    features: [
      "Vse iz paketa POSLOVNI",
      "Neomejeno skeniranje",
      "Fizično prepošiljanje (tedensko)",
      "Meeting room (5h/mesec)",
      "Telefonska asistentka"
    ],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <section id="cenik" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Prilagodljivi paketi za digitalno dobo</h2>
          <p className="text-muted lead">
            Izberite idealen paket virtualne pisarne, ki raste z vašim poslom. Transparentne cene, brez skritih stroškov.
          </p>
        </div>
        <Row className="g-4 align-items-center justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} md={6} lg={4}>
              <Card 
                className={`h-100 border-0 shadow ${plan.recommended ? 'border-primary ring-2 ring-primary pricing-card-recommended' : ''}`}
              >
                {plan.recommended && (
                  <div className="bg-primary text-white text-center py-1 small fw-bold text-uppercase">
                    Najbolj priljubljen
                  </div>
                )}
                <Card.Body className="p-5 text-center d-flex flex-column">
                  <h5 className="text-muted fw-bold mb-4 ls-1">{plan.name}</h5>
                  <div className="mb-4">
                    <span className="display-4 fw-bold">{plan.price}€</span>
                    <span className="text-muted">/mesec</span>
                  </div>
                  <ListGroup variant="flush" className="mb-4 text-start flex-grow-1">
                    {plan.features.map((feat, idx) => (
                      <ListGroup.Item key={idx} className="border-0 bg-transparent px-0 d-flex align-items-start">
                        <Check size={20} className="text-success me-2 flex-shrink-0 mt-1" />
                        <span>{feat}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Button 
                    variant={plan.recommended ? "primary" : "outline-primary"} 
                    size="lg" 
                    className="w-100 mt-auto"
                  >
                    Izberite ta paket
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
