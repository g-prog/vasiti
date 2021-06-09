import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Begin from "./components/begin/begin";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">

      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
      <Begin/>

      </div>
      
      
    </div>
  );
}

export default App;
