import "./App.css"
import NavigationBar from "./components/Navigation"
import Intro from "./components/Intro"
import Trending from "./components/Trending"

import "./style/landingpage.css"
import Contact from "./components/contact"
import Home from "./components/Home"
import About from "./components/about"
import Footer from "./components/footer"
import Forms from "./components/Forms"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="home">
        <Home />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="forms">
        <Forms /> 
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
