import Nav from './Nav';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Education from "./Education";
import Home from "./Home";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/education" exact component={Education} />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/shop" component={Shop} /> */}
        </Switch>
      </  div>
      <Footer />
    </Router>
    
  );
}

export default App;
