import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Begin from "./components/begin/begin";
import End from "./components/end/end";
import Footer from "./components/footer/footer";
import Stack from "./components/stack/stack";

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
      <End/>
      <Footer/>
      <Stack/>

      </div>
      
      
    </div>
  );
}

export default App;
