import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Route path={'/'} component={Header} />
      <Switch>
        <Route path={'/home'} component={LandingPage} />
        <Route path={'/about'} component={About} />
      </Switch>
    </div>
  );
}

export default App;
