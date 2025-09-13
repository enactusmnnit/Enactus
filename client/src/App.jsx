import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import axios from 'axios';

import Home from './pages/Home';
import AboutUs from './pages/About';
import Project from './pages/Project';
import ECart from './pages/Ecart';
import BuyProduct from './pages/BuyProduct';
import Navbar from './components/General/Navbar';
import Footer from './components/General/Footer';

import Selection from './pages/Selection';
import Web from './pages/Teams/Web';
import Reserch from './pages/Teams/Reserch';
import Content from './pages/Teams/Content';
import Design from './pages/Teams/Design';
import Field from './pages/Teams/Field';
import Marketing from './pages/Teams/Marketing';

function App() {

  axios.defaults.withCredentials = true;

  const startServer = async () => {
    try {
      const response = await axios.get('https://enactusserver.onrender.com/startServer');

      console.log(response.data.message);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    startServer();
  }, [])

  return (
    <HelmetProvider>
      <Navbar />
      <div className="pt-10">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/project' element={<Project />} />
          <Route path='/team' element={<Selection />} />
          <Route path='/ecart' element={<ECart />} />
          <Route path='/buyProduct' element={<BuyProduct />} />

          <Route path='/webTeam' element={<Web />} />
          <Route path='/reserchAndDevelopment' element={<Reserch />} />
          <Route path='/contentDepartment' element={<Content />} />
          <Route path='/fieldOfficer' element={<Field />} />
          <Route path='/designDepartment' element={<Design />} />
          <Route path='/marketingAndSponcership' element={<Marketing />} />
        </Routes>
      </div>

      <section id="contactUs">
        <Footer />
      </section>
    </HelmetProvider>
  );
}

export default App;
