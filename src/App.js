import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Header";
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from "./Footer";


function App() {
  return (
    <Router>
      <div id="appContainer">
        <Header/>
          <main className="container">
            <Route exact path="/" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
          </main>
        <Footer/>
      </div>
      </Router>
  );
}

export default App;
