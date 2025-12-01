import React, { useState } from 'react';
import { Container, Tab, Tabs, Button, Card } from 'react-bootstrap';
import { FileText, Copy, Download } from 'lucide-react';

const Documentation = () => {
  const [key, setKey] = useState('doo');

  const companyData = {
    name: "Ljuan d.o.o.",
    address: "Kržičeva 4, 1000 Ljubljana",
    registration: "0000000000"
  };

  const currentDate = new Date().toLocaleDateString('sl-SI');

  const textDoo = `IZJAVA LASTNIKA OBJEKTA
po četrtem odstavku 4. člena ZSReg

Lastnik objekta:
${companyData.name}, ${companyData.address}, matična št.: ${companyData.registration}

izjavljam, da dovoljujem poslovanje na naslovu:
${companyData.address}

1. družbi, ki se ustanavlja:
________________________________________________
(ime podjetja)

2. že vpisanemu subjektu:
________________________________________________
(ime in matična številka podjetja)

Dne: ${currentDate}                                   Podpis lastnika objekta:
                                                      _______________________
                                                      (Ljuan d.o.o.)`;

  const textSp = `IZJAVA LASTNIKA OBJEKTA
na podlagi tretjega odstavka 74. člena ZGD-1

Lastnik objekta:
${companyData.name}
${companyData.address}

dovoljujem, da:
________________________________________________
(ime in priimek podjetnika)

________________________________________________
(naslov podjetnika)

posluje kot samostojni podjetnik na naslovu:
${companyData.address}

Dne: ${currentDate}                                   Podpis lastnika objekta*:
                                                      _______________________
                                                      (Ljuan d.o.o.)
*Podpis lastnika objekta mora biti overjen!`;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Besedilo kopirano v odložišče!");
  };

  const handleDownload = () => {
    alert("Prenos PDF datoteke se je začel (simulacija).");
  };

  return (
    <section id="dokumentacija" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Dokumentacija</h2>
          <p className="text-muted lead">
            Pripravili smo že izpolnjene obrazce za registracijo vašega podjetja.
          </p>
        </div>

        <Row className="justify-content-center">
            <Col lg={8}>
                <Tabs
                id="doc-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-4 justify-content-center"
                >
                <Tab eventKey="doo" title="Izjava za D.O.O.">
                    <DocCard title="Izjava lastnika za D.O.O." content={textDoo} onCopy={() => handleCopy(textDoo)} onDownload={handleDownload} />
                </Tab>
                <Tab eventKey="sp" title="Izjava za S.P.">
                    <DocCard title="Izjava lastnika za S.P." content={textSp} onCopy={() => handleCopy(textSp)} onDownload={handleDownload} />
                </Tab>
                </Tabs>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

const DocCard = ({ title, content, onCopy, onDownload }) => (
  <Card className="shadow-sm border-0">
    <Card.Body className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0 d-flex align-items-center">
            <FileText className="me-2 text-primary" /> {title}
        </h5>
        <div className="d-flex gap-2">
            <Button variant="outline-primary" size="sm" onClick={onCopy} title="Kopiraj besedilo">
                <Copy size={18} />
            </Button>
            <Button variant="primary" size="sm" onClick={onDownload} title="Prenesi PDF">
                <Download size={18} /> Prenesi PDF
            </Button>
        </div>
      </div>
      <pre className="bg-light p-4 rounded border" style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.9rem' }}>
        {content}
      </pre>
    </Card.Body>
  </Card>
);

import { Row, Col } from 'react-bootstrap'; 

export default Documentation;
