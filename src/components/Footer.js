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
                <a href="#">Avinash M G</a>
              </li>
              <li>
                <a href="#">avinashmg@technologist.com</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
          <div className="col item social">
            <a href="https://www.facebook.com/avinash.mg.313/">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-instagram"></i>
            </a>
          </div>
        </div>
        <p className="copyright">Avinash M G © 2021</p>
      </div>
    </footer>
  );
};
export default Footer;
