import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Button from "react-bootstrap/Button";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-contact-container">
            <Button
              className="footer-contact-button"
              variant="outline-info"
              href="mailto:acz0919@yahoo.com"
              block
            >
              Contact
            </Button>
          </div>
          <div className="social-icons-container">
            <div className="social-icons-wrapper">
              <Link
                className="social-icon-link facebook"
                to={{ pathname: "https://www.facebook.com/andy.czeropski" }}
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link instagram"
                to={{ pathname: "https://www.instagram.com/andyczeropski/" }}
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="social-icon-link youtube"
                to={{
                  pathname:
                    "https://www.youtube.com/channel/UCI7amSjPT3ee2eUlYjjgWyw",
                }}
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="social-icon-link twitter"
                to={{ pathname: "https://twitter.com/andyczeropski" }}
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                className="social-icon-link linkedin"
                to={{
                  pathname: "https://www.linkedin.com/in/andrew-czeropski/",
                }}
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
          <div className="website-rights-container">
            <div className="website-rights">
              © Copyright 2021 Andy Czeropski. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import "./Footer.css";
// import { Button } from "../Button";
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <div className="footer-container">
//       <section className="footer-subscription">
//         <p className="footer-subscription-heading">
//           Join the Adventure newsletter to stay updated with our adventures and
//           trip itineraries!
//         </p>
//         <p className="footer-subscription-text">
//           You can unsubscribe at any time :)
//         </p>
//         <div className="input-areas">
//           <form>
//             <input
//               className="footer-input"
//               name="email"
//               type="email"
//               placeholder="Your Email"
//             />
//             <Button buttonStyle="btn--outline">Subscribe</Button>
//           </form>
//         </div>
//       </section>
//       <div className="footer-links">
//         <div className="footer-link-wrapper">
//           <div className="footer-link-items">
//             <h2>About Us</h2>
//             <Link to="/sign-up">How it works</Link>
//             <Link to="/">Testimonials</Link>
//             <Link to="/">Careers</Link>
//             <Link to="/">Investors</Link>
//             <Link to="/">Terms of Service</Link>
//           </div>
//           <div className="footer-link-items">
//             <h2>Contact Us</h2>
//             <Link to="/">Contact</Link>
//             <Link to="/">Support</Link>
//             <Link to="/">Destinations</Link>
//             <Link to="/">Sponsorships</Link>
//           </div>
//         </div>
//         <div className="footer-link-wrapper">
//           <div className="footer-link-items">
//             <h2>Videos</h2>
//             <Link to="/">Submit Video</Link>
//             <Link to="/">Ambassadors</Link>
//             <Link to="/">Agency</Link>
//             <Link to="/">Influencer</Link>
//           </div>
//           <div className="footer-link-items">
//             <h2>Social Media</h2>
//             <Link to="/">Instagram</Link>
//             <Link to="/">Facebook</Link>
//             <Link to="/">Youtube</Link>
//             <Link to="/">Twitter</Link>
//           </div>
//         </div>
//       </div>
//       <section className="social-media">
//         <div className="social-media-wrap">
//           <div className="footer-logo">
//             <Link to="/" className="social-logo">
//               {"{ Andy Czeropski } "}
//             </Link>
//           </div>
//           <small className="website-rights">ACZ © 2020</small>
//           <div className="social-icons">
//             <Link
//               className="social-icon-link facebook"
//               to="/"
//               target="_blank"
//               aria-label="Facebook"
//             >
//               <i className="fab fa-facebook-f" />
//             </Link>
//             <Link
//               className="social-icon-link instagram"
//               to="/"
//               target="_blank"
//               aria-label="Instagram"
//             >
//               <i className="fab fa-instagram" />
//             </Link>
//             <Link
//               className="social-icon-link youtube"
//               to="/"
//               target="_blank"
//               aria-label="Youtube"
//             >
//               <i className="fab fa-youtube" />
//             </Link>
//             <Link
//               className="social-icon-link twitter"
//               to="/"
//               target="_blank"
//               aria-label="Twitter"
//             >
//               <i className="fab fa-twitter" />
//             </Link>
//             <Link
//               className="social-icon-link twitter"
//               to="/"
//               target="_blank"
//               aria-label="LinkedIn"
//             >
//               <i className="fab fa-linkedin" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Footer;
