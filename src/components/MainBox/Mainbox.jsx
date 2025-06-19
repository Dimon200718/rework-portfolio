import { useState } from 'react'
import '../../scss/App.scss'
import MainPage from '../MainPage/MainPage';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contacts from '../Contacts/Contacts';
import MyWorks from '../MyWorks/MyWorks';

export default function MainBox(){

    const location = useLocation();

    const showParticles =
    location.pathname === '/' || location.pathname === '/mainpage';

    return(
        <div className="formainbox">
            {showParticles && <ParticlesBackground />}
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/works" element={<MyWorks />} />
            </Routes>
          </div>
    )
}