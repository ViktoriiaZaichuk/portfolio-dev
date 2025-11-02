import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';

import ThemeContext from './context/ThemeContext';
import ScrollToTopOnNavigate from './hooks/scrollTop';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Project from './pages/project';
import ErrorPage from './pages/error-page';

// restaurant
import Restaurant from './pages/restaurant';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/pereztroika" element={<Restaurant />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;