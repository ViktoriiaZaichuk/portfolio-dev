import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import ErrorPage from './pages/error-page';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <ErrorPage />,
    },
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
