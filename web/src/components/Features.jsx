import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Mail, Bell, ShieldCheck, MapPin, Clock, Monitor } from 'lucide-react';

const features = [
  {
    icon: <MapPin size={40} className="text-primary mb-3" />,
    title: "Prestižna lokacija",
    description: "Sedež podjetja na Kržičevi 4 v Ljubljani. Ugleden naslov za vaše poslovanje."
  },
  {
    icon: <Mail size={40} className="text-primary mb-3" />,
    title: "Sprejem pošte",
    description: "Vso vašo poslovno pošto zanesljivo sprejmemo in varno shranimo."
  },
  {
    icon: <Bell size={40} className="text-primary mb-3" />,
    title: "Takojšnje obveščanje",
    description: "O prejeti pošti vas obvestimo še isti dan prek e-pošte ali SMS-a."
  },
  {
    icon: <ShieldCheck size={40} className="text-primary mb-3" />,
    title: "Pravna skladnost",
    description: "Vsa dokumentacija (pogodba, izjava lastnika) je urejena skladno z zakonodajo."
  },
  {
    icon: <Monitor size={40} className="text-primary mb-3" />,
    title: "Digitalizacija",
    description: "Možnost skeniranja vsebine pošte in pošiljanja na vaš e-naslov."
  },
  {
    icon: <Clock size={40} className="text-primary mb-3" />,
    title: "Hiter postopek",
    description: "Ureditev vse potrebne dokumentacije za registracijo v manj kot 24 urah."
  }
];

const Features = () => {
  return (
    <section id="prednosti" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Zakaj izbrati Pisarna360?</h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
            Ponujamo več kot le naslov. Zagotavljamo celovito podporo vašemu poslovanju,
            da se vi lahko osredotočite na tisto, kar je pomembno.
          </p>
        </div>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm hover-shadow transition-all">
                <Card.Body className="text-center p-4">
                  {feature.icon}
                  <Card.Title className="fw-bold mb-3">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 align-items-center justify-content-center">
            <Col md={10} lg={8}>
                <div className="bg-primary text-white rounded-4 p-4 p-md-5 shadow position-relative overflow-hidden">
                    <Row className="align-items-center position-relative" style={{ zIndex: 1 }}>
                        <Col md={6} className="mb-4 mb-md-0">
                            <h3 className="fw-bold mb-3">Delaj kjer koli!</h3>
                            <p className="mb-0 opacity-90">
                                Z našo virtualno pisarno niste vezani na lokacijo. 
                                Potujte, delajte od doma ali iz tujine, mi pa poskrbimo za vašo pošto in ugled.
                            </p>
                        </Col>
                        <Col md={6} className="text-center">
                             <img 
                                src="/img/plakat_small.jpg" 
                                alt="Delaj kjer koli" 
                                className="img-fluid rounded shadow-sm transform-rotate-2"
                                style={{ maxHeight: '250px', transform: 'rotate(2deg)' }}
                             />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
