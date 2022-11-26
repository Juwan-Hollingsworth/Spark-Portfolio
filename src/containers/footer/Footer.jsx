import React from "react";
import "./footer.css";
import Certs from "../../assets/cert_badges.png";

function Footer() {
  return (
    <div className="footer__background">
      <div>
        <hr />
        <div className="row">
          <div className="column">
            <h3>Reviews</h3>
          </div>
          <div className="column">
            <div>
              <h3>Industry Specialist</h3>
              <p>We are DBE, MBE, SBE, AABE, and FBE certified.</p>
            </div>
            <img src={Certs} />
          </div>
          <div className="column">
            <h3>Get In Touch</h3>
            <p>
              384 Northyards Blvd. NW Suite 190 Atlanta, GA 30313 <br /> 1720 I
              St NW 4th Floor Washington DC 20006 <br />
              Monday – Friday 9am – 6pm
              <br />
              (404) 850-4102 (Spark)
              <br />
              hello@sparksocial.agency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
