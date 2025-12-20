// web/src/components/TermsAndConditions.jsx
import React from 'react';

const TermsAndConditions = () => {
    return (
        <section id="terms-and-conditions" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4" style={{ color: '#003381' }}>Splošni Pogoji Poslovanja</h2>
                <div className="card shadow-sm p-4">
                    <h3>1. Uvod</h3>
                    <p>
                        Ti splošni pogoji poslovanja urejajo uporabo storitev podjetja Pisarna360 in določajo pravice in obveznosti uporabnikov ter ponudnika storitev.
                    </p>
                    <h3>2. Storitve</h3>
                    <p>
                        Pisarna360 ponuja najem opremljenih pisarn, virtualne pisarne, dvorane za sestanke in druge poslovne storitve. Podrobnejši opis storitev je na voljo na naši spletni strani.
                    </p>
                    <h3>3. Uporaba Storitev</h3>
                    <p>
                        Uporabniki se zavezujejo, da bodo storitve uporabljali v skladu z veljavno zakonodajo, dobrimi poslovnimi običaji in temi splošnimi pogoji.
                    </p>
                    <h3>4. Cene in Plačilo</h3>
                    <p>
                        Cene storitev so navedene v ceniku na naši spletni strani. Plačilo se izvaja v skladu z dogovorjenimi plačilnimi pogoji.
                    </p>
                    <h3>5. Odgovornost</h3>
                    <p>
                        Pisarna360 ne prevzema odgovornosti za morebitno škodo, ki bi nastala zaradi nepravilne uporabe storitev ali višje sile.
                    </p>
                    <h3>6. Reševanje Sporov</h3>
                    <p>
                        Morebitne spore bomo reševali sporazumno. V primeru, da to ni mogoče, je za reševanje sporov pristojno sodišče v Ljubljani.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;
