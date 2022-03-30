import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
// import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div>
          <section >
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
          </section>
      </div>
      <Route  path={'/'} component={Header} />
      <Route exact path={'/'} component={LandingPage} />
      <Route path={'/about'} component={About} />
      <Route path={'/projects'} component={Projects} />
      <Route path={'/skills'} component={Skills} />
      <Route path={'/resume'} component={Resume} />
      <Route path={'/contact'} component={Contact} />
    </div>
  );
}

export default App;
