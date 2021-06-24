import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Lightbox from "./components/Lightbox";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import VideoPlayer from "./components/Video";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <div style={{ background: "red", height: "5px" }}></div>
      <AboutMe />
      <div style={{ background: "red", height: "5px" }}></div>
      <Lightbox />
      <VideoPlayer url="http://youtube.com/embed/m00JN6P2X6M" />
      <Footer />
    </div>
  );
}

export default App;
