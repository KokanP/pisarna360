// web/src/components/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <section id="privacy-policy" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4" style={{ color: '#003381' }}>Politika Zasebnosti</h2>
                <div className="card shadow-sm p-4">
                    <p>
                        Vaša zasebnost nam je pomembna. Ta politika zasebnosti pojasnjuje, kako zbiramo, uporabljamo in ščitimo vaše osebne podatke.
                    </p>
                    <h3>Zbiranje Podatkov</h3>
                    <p>
                        Zbiramo osebne podatke, kot so ime, e-poštni naslov in telefonska številka, ko izpolnite naš kontaktni obrazec ali se prijavite na naše storitve.
                    </p>
                    <h3>Uporaba Podatkov</h3>
                    <p>
                        Zbrane podatke uporabljamo za obdelavo vaših povpraševanj, zagotavljanje storitev, izboljšanje uporabniške izkušnje in za trženjske namene (samo z vašim soglasjem).
                    </p>
                    <h3>Varovanje Podatkov</h3>
                    <p>
                        Vaše podatke skrbno varujemo z ustreznimi tehničnimi in organizacijskimi ukrepi. Ne delimo jih s tretjimi osebami, razen če je to zakonsko določeno ali potrebno za izvedbo naših storitev.
                    </p>
                    <h3>Vaše Pravice</h3>
                    <p>
                        Imate pravico do dostopa, popravka, izbrisa ali omejitve obdelave vaših osebnih podatkov. Za uveljavljanje teh pravic nas kontaktirajte.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
