import './App.css';
import Navbar from './components/Nav/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </section>
      </div>
    </Router>
  )
}

export default App;
