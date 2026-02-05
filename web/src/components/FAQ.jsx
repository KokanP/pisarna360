// src/components/FAQ.jsx
import React from 'react';

const FAQ = () => {
    return (
        <section id="faq" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4" style={{ color: '#003381' }}>Pogosta Vprašanja</h2>
                <div className="accordion" id="faqAccordion">
                    {/* Placeholder for FAQ items */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Vprašanje 1: Kakšne storitve ponujate?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Ponujamo najem opremljenih pisarn, virtualne pisarne in storitve poslovne podpore. Naše rešitve so prilagodljive in zasnovane za podjetja vseh velikosti.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Vprašanje 2: Kje se nahajate?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Nahajamo se na naslovu Kržičeva 4, Ljubljana. Lokacija ponuja odlično dostopnost in sodobno poslovno okolje.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Vprašanje 3: Kako lahko postanem stranka?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Za prijavo ali več informacij nas lahko kontaktirate preko kontaktnega obrazca na naši spletni strani, po telefonu ali e-pošti. Z veseljem vam bomo svetovali in pripravili individualno ponudbo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
