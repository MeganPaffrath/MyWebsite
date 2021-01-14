import Nav from './Nav';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Education from "./Education";
import Home from "./Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/education" exact component={Education} />
        </Switch>
      </  div>
      <Footer />
    </Router>
  );
}

export default App;
