import facebook from "../facebook.svg";
import whatsapp from "../whatsapp.svg";
import github from "../github.svg";
const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="row">
          <div align="center" className="col-sm-6 col-md-6 item">
            <h3>Site Map</h3>
            <ul>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#aboutme">About Me</a>
              </li>
              <li>
                <a href="#Video">Video</a>
              </li>
            </ul>
          </div>
          <div align="center" className="col-sm-6 col-md-6 item">
            <h3>About</h3>
            <ul>
              <li>
                <a>Avinash M G</a>
              </li>
              <li>
                <a href="mailto:avinashmg@technologist.com">
                  avinashmg@technologist.com
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=918714335607">
                  Contact me on whatsapp
                </a>
              </li>
            </ul>
          </div>
          <div className="col item footer-social">
            <a href="https://www.facebook.com/avinash.mg.313/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=918714335607">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="https://github.com/avinashmg">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <p className="copyright">Avinash M G © 2021</p>
      </div>
    </footer>
  );
};
export default Footer;
