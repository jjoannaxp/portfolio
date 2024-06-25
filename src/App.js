import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Work from './Pages/Work';
import About from './Pages/About';
import Fun from './Pages/Fun';
import WhatNot from './Pages/Cases/WhatNot';
import Measured from './Pages/Cases/Measured';
import Eightfold from './Pages/Cases/Eightfold';
import Tinker from './Pages/Cases/Tinker';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Joanna Poon | Product Designer',
      '/About': 'About',
      '/Cases/WhatNot': 'WhatNot',
      '/Cases/Measured': 'Measured',
      '/Cases/Eightfold': 'Eightfold',
      '/Cases/Tinker': 'Tinker',
      '/Fun' : 'Just For Fun',
    };

    const defaultTitle = 'My App';
    document.title = titles[location.pathname] || defaultTitle;
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <RouteTitle />
        <Header />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/About" element={<About />} />
          <Route path="/Fun" element={<Fun />} />
          <Route path="/Cases/WhatNot" element={<WhatNot />} />
          <Route path="/Cases/Measured" element={<Measured />} />
          <Route path="/Cases/Eightfold" element={<Eightfold />} />
          <Route path="/Cases/Tinker" element={<Tinker />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;