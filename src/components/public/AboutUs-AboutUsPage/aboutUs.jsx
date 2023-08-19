import React from "react";
import "./aboutUs.css"; // Import the CSS file for styling

const AboutUs = () => {
   return (
      <div className="about-us">
         <h1>Vítejte v naší outdoorové komunitě!</h1>

         <div className="about-section">
            <h2>Kdo jsme</h2>
            <p>
               Jsme vášnivá skupina dobrodruhů, kteří sdílejí lásku k přírodě,
               adrenalinovým zážitkům a objevování nových horizontů.
               Specializujeme se na různorodé outdoorové aktivity, které vám
               přinášejí nejen radost, ale také možnost poznat krásu naší
               krajiny z různých perspektiv.
            </p>
         </div>

         <div className="activity-section">
            <h2>Naše Dobytky</h2>
            <div className="activity">
               <h3>Sjíždění divokých řek</h3>
               <p>
                  Zažijte adrenalinové zážitky na kánoích a kajacích na divokých
                  řekách...
               </p>
            </div>
            <div className="activity">
               <h3>Pěší turistika</h3>
               <p>
                  Prozkoumejte překrásné krajiny pěší turistikou. Následujte
                  značené trasy...
               </p>
            </div>
            <div className="activity">
               <h3>Zimní radovánky na běžkách</h3>
               <p>
                  Zima nás nezastavuje! Jízda na běžkách vám umožní prozkoumat
                  zasněženou krásu...
               </p>
            </div>
         </div>

         <div className="motto-section">
            <h2>Naše Heslo</h2>
            <p>
               Společně objevujeme, společně si užíváme. Jsme vášniví
               dobrodruzi, kteří spojují přírodu a adrenalin.
            </p>
         </div>

         <div className="join-section">
            <h2>Připojte se k nám!</h2>
            <p>
               Chcete se připojit k naší komunitě dobrodruhů? Dejte nám vědět!
               Sdílíme nezapomenutelné zážitky a vytváříme trvalá přátelství...
            </p>
            <p>
               Kontaktujte nás: kontakt@outdooradventures.cz | Telefon: +123 456
               789
            </p>
         </div>
      </div>
   );
};

export default AboutUs;