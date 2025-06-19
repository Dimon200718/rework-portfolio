import { useState } from 'react'
import './scss/App.scss'
import HeaderLogo from './img/headerD.png'
import Inst from './img/inst1.png'
import Tg from './img/tg1.png'
import Git from './img/git1.png'
import InstHov from './img/inthov.png'
import TgHov from './img/tghov.png'
import GitHov from './img/githov.png'
import MainPage from './components/MainPage/MainPage';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './components/About/About'
import MainBox from './components/MainBox/Mainbox'


function App() {

  const [instSrc, setinstSrc] = useState(Inst)
  const [tgSrc, settgSrc] = useState(Tg)
  const [gitSrc, setgitSrc] = useState(Git)


  return (
    <>
      <HashRouter>
      <div className="box">
          <div className='nav'>
              <div className="nav__header">
              <Link to="/" className="a">
                  <img className='nav__logo' src={HeaderLogo} alt="" />
                  </Link>
                  <Link to="/mainpage" className="a">
                  <p className="nav__headline">Dima</p>
                  </Link>
                <p className="nav__text">Web Developer</p>
              </div>
              <div className="nav__container">
                <div className="nav__item">
                  <Link to="/" className="a">Home</Link>
                </div>
                <div className="nav__item">
                  <Link to="/about" className="a">About</Link>
                </div>
                <div className="nav__item">
                  <Link to="/skills" className="a">My Skills</Link>
                </div>
                <div className="nav__item">
                  <Link to="/works" className="a">Works</Link>
                </div>
                <div className="nav__item">
                  <Link to="/contacts" className="a">Contacts</Link>
                </div>
              </div>
              <div  className="nav__linkbox">
                  <a target="_blank" href="https://www.instagram.com/dexileees/">
                    <img 
                    src={instSrc}
                    onMouseEnter={() => setinstSrc(InstHov)}
                    onMouseLeave={() => setinstSrc(Inst)}
                    />
                  </a>
                  <a target="_blank" href="http://t.me/Dexileees">
                    <img 
                    
                    src={tgSrc}
                    onMouseEnter={() => settgSrc(TgHov)}
                    onMouseLeave={() => settgSrc(Tg)} 
                    />
                  </a>
                  <a target="_blank" href="https://github.com/Dimon200718">
                    <img 
                    
                    src={gitSrc}
                    onMouseEnter={() => setgitSrc(GitHov)}
                    onMouseLeave={() => setgitSrc(Git)}
                    />
                  </a>
              </div>
          </div>
          <MainBox></MainBox>
          
      </div>
    </HashRouter>
    </>
  )
}

export default App
