import React, { useState } from 'react';
import { Container, Tab, Tabs, Button, Card, Form, Row, Col } from 'react-bootstrap';
import { FileText, Copy, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';

const Documentation = () => {
  const [key, setKey] = useState('doo');
  const [companyName, setCompanyName] = useState('');
  const [companyRegistration, setCompanyRegistration] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');


  const currentDate = new Date().toLocaleDateString('sl-SI');

  const generatePdf = (type) => {
    if (!companyName || !companyAddress || !companyRegistration) {
      alert("Prosimo, izpolnite vsa polja za podatke podjetja (ime, naslov, matična številka).");
      return;
    }

    const doc = new jsPDF();
    let contentText = '';

    if (type === 'doo') {
      contentText = `IZJAVA LASTNIKA OBJEKTA
po četrtem odstavku 4. člena ZSReg

Lastnik objekta:
Ljuan d.o.o., Kržičeva 4, 1000 Ljubljana, matična št.: 0000000000

izjavljam, da dovoljujem poslovanje na naslovu:
Kržičeva 4, 1000 Ljubljana

1. družbi, ki se ustanavlja:
${companyName}
(ime podjetja)

2. že vpisanemu subjektu:
${companyName} (matična št.: ${companyRegistration})
(ime in matična številka podjetja)

Dne: ${currentDate}                                   Podpis lastnika objekta:
                                                      _______________________
                                                      (Ljuan d.o.o.)`;
    } else if (type === 'sp') {
      contentText = `IZJAVA LASTNIKA OBJEKTA
na podlagi tretjega odstavka 74. člena ZGD-1

Lastnik objekta:
Ljuan d.o.o.
Kržičeva 4, 1000 Ljubljana

dovoljujem, da:
${companyName}
(ime in priimek podjetnika)

${companyAddress}
(naslov podjetnika)

posluje kot samostojni podjetnik na naslovu:
Kržičeva 4, 1000 Ljubljana

Dne: ${currentDate}                                   Podpis lastnika objekta*:
                                                      _______________________
                                                      (Ljuan d.o.o.)
*Podpis lastnika objekta mora biti overjen!`;
    }

    doc.text(contentText, 10, 10);
    doc.save(`${type}_izjava_lastnika.pdf`);
  };

  const textDoo = `IZJAVA LASTNIKA OBJEKTA
po četrtem odstavku 4. člena ZSReg

Lastnik objekta:
Ljuan d.o.o., Kržičeva 4, 1000 Ljubljana, matična št.: 0000000000

izjavljam, da dovoljujem poslovanje na naslovu:
Kržičeva 4, 1000 Ljubljana

1. družbi, ki se ustanavlja:
${companyName || '________________________________________________'}
(ime podjetja)

2. že vpisanemu subjektu:
${companyName || '________________________________________________'} (matična št.: ${companyRegistration || '__________'})
(ime in matična številka podjetja)

Dne: ${currentDate}                                   Podpis lastnika objekta:
                                                      _______________________
                                                      (Ljuan d.o.o.)`;

  const textSp = `IZJAVA LASTNIKA OBJEKTA
na podlagi tretjega odstavka 74. člena ZGD-1

Lastnik objekta:
Ljuan d.o.o.
Kržičeva 4, 1000 Ljubljana

dovoljujem, da:
${companyName || '________________________________________________'}
(ime in priimek podjetnika)

${companyAddress || '________________________________________________'}
(naslov podjetnika)

posluje kot samostojni podjetnik na naslovu:
Kržičeva 4, 1000 Ljubljana

Dne: ${currentDate}                                   Podpis lastnika objekta*:
                                                      _______________________
                                                      (Ljuan d.o.o.)
*Podpis lastnika objekta mora biti overjen!`;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Besedilo kopirano v odložišče!");
  };

  return (
    <section id="dokumentacija" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Generator Izjave Lastnika Objekta</h2>
          <p className="text-muted lead">
            Izpolnite podatke vašega podjetja in prenesite izjavo lastnika objekta v PDF obliki.
          </p>
        </div>

        <Row className="justify-content-center">
            <Col lg={8}>
                <Card className="shadow-sm border-0 mb-4 p-4">
                    <h5 className="fw-bold mb-3">Podatki vašega podjetja</h5>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Ime podjetja / Podjetnika</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={companyName} 
                                onChange={(e) => setCompanyName(e.target.value)} 
                                placeholder="Npr. Moje podjetje d.o.o."
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Matična številka (za d.o.o.)</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={companyRegistration} 
                                onChange={(e) => setCompanyRegistration(e.target.value)} 
                                placeholder="Npr. 12345678"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Naslov (za s.p.)</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={companyAddress} 
                                onChange={(e) => setCompanyAddress(e.target.value)} 
                                placeholder="Npr. Ulica svobode 10, 2000 Maribor"
                            />
                        </Form.Group>
                    </Form>
                </Card>

                <Tabs
                id="doc-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-4 justify-content-center"
                >
                <Tab eventKey="doo" title="Izjava za D.O.O.">
                    <DocCard 
                      title="Izjava lastnika za D.O.O." 
                      content={textDoo} 
                      onCopy={() => handleCopy(textDoo)} 
                      onDownload={() => generatePdf('doo')} 
                    />
                </Tab>
                <Tab eventKey="sp" title="Izjava za S.P.">
                    <DocCard 
                      title="Izjava lastnika za S.P." 
                      content={textSp} 
                      onCopy={() => handleCopy(textSp)} 
                      onDownload={() => generatePdf('sp')} 
                    />
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
 
export default Documentation;
