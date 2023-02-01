import React from "react";
import "./footer.css";
import Certs from "../../assets/cert_badges.png";

function Footer() {
  return (
    <div className="footer__main">
      <div>
        <hr />
        <div className="row__main">
          <div className="col__main">
            <div className="col1">
              <h3>Reviews</h3>
            </div>
            <div className="col2">
              <div>
                <h3>Industry Specialist</h3>
                <h4>We are DBE, MBE, SBE, AABE, and FBE certified.</h4>
              </div>
              <img src={Certs} />
            </div>
            <div className="col3">
              <h3>Get In Touch</h3>
              <h4>384 Northyards Blvd. NW Suite 190 Atlanta, GA 30313 </h4>
              <h4>1720 I St NW 4th Floor Washington DC 20006 </h4>
              <h4>Monday – Friday 9am – 6pm</h4>
              <h4>(404) 850-4102 (Spark)</h4>
              <h4>hello@sparksocial.agency</h4>
              <div>social media buttons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
