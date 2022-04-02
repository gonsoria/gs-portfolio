import { Route } from 'react-router-dom';
import About from './components/About/About';
import LandingPage from './components/LandingPage/LandingPage';
import Projects from './components/Projects/Projects'
import Header from './components/Header/Header';
import Background from './components/Background/Background';

function App() {
  return (
    <div className="App">
      <Route path={'/'} component={Background} />
      <Route path={'/'} component={Header} />
      <Route path={'/projects'} component={Projects} />
      <Route exact path={'/'} component={LandingPage} />
      <Route path={'/about'} component={About} />
    </div>
  );
}

export default App;
