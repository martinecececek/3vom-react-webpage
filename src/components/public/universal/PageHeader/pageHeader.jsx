import React from "react";
//import css
import "./pageHeader.css";

const pageHeader = () => {
   return (
      <nav className="page-footer">
         <div className="col-1">
            <h3>Užitečné okazy</h3>
            <a href="#ddm">Dům dětí a mládeže</a>
            <a href="#atom">ATOM</a>
            <a href="#rajce">Rajče.cz</a>
         </div>
         <div className="col-2">
            <h3>Novinky</h3>
            <form action="">
               <input type="email" placeholder="zadejte váš email" required />
               <br />
               <button type="submit">Odebírat</button>
            </form>
         </div>
         <div className="col-3">
            <h3>Adresa</h3>
            <p>
               Pražská 123/12
               <br />
               Ústí nad Labem, Vaňov
            </p>
         </div>
      </nav>
   );
};

export default pageHeader;
