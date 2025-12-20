// web/src/components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4" style={{ color: '#003381' }}>Mnenja Naših Strank</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <p className="card-text">"Izjemna lokacija in profesionalna podpora. Pisarna360 nam je omogočila nemoten začetek poslovanja v Ljubljani. Zelo smo zadovoljni!"</p>
                                <footer className="blockquote-footer mt-3">Janja K., <cite title="Source Title">Startup d.o.o.</cite></footer>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <p className="card-text">"Virtualna pisarna je točno to, kar smo potrebovali. Prilagodljivost in odzivnost ekipe sta na visokem nivoju. Priporočamo!"</p>
                                <footer className="blockquote-footer mt-3">Marko P., <cite title="Source Title">S.P. Consulting</cite></footer>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <p className="card-text">"Odlično okolje za delo, sodobna oprema in prijazno osebje. Pisarna360 je prava izbira za podjetja, ki iščejo več kot le prostor."</p>
                                <footer className="blockquote-footer mt-3">Ana L., <cite title="Source Title">Razvojno podjetje</cite></footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;