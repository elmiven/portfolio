import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';
import RemoteJob from './components/HireMe/HireMe';
import Skills from './components/Skills/Skills';

import ContactMe from './components/Contact/ContactMe';

function App() {
  return (
    <div className="App">
      <Header />
      <Main /> 
      <Skills />
      <Projects />
      <RemoteJob/>
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;
