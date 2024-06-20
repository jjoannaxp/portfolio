import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Work from './Work';
import About from './About';
import WhatNot from './Cases/WhatNot';
import Measured from './Cases/Measured';
import Eightfold from './Cases/Eightfold';
import Tinker from './Cases/Tinker';
// import Split from './Pages/Cases/Split';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Joanna Poon | Product Designer',
      '/about': 'About',
      '/Cases/WhatNot': 'WhatNot',
      '/Cases/Measured': 'Measured',
      '/Cases/Eightfold': 'Eightfold',
      '/Cases/Tinker': 'Tinker',
    //   '/Cases/Split': 'Split'

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
          <Route path="/about" element={<About />} />
          <Route path="/Cases/WhatNot" element={<WhatNot />} />
          <Route path="/Cases/Measured" element={<Measured />} />
          <Route path="/Cases/Eightfold" element={<Eightfold />} />
          <Route path="/Cases/Tinker" element={<Tinker />} />
          {/* <Route path="/Cases/Split" element={<Split />} /> */}

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;