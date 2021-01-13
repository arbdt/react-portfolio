import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from "./components/Footer";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="appContainer">
        <Header/>
          <main className="container">
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/" component={About}/>
          </main>
        <Footer/>
      </div>
      </Router>
  );
}

export default App;
