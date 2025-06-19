import './MainPage.scss'
import React, { useState } from 'react';
import HeaderLogo from '../../img/DebilBlya.png'
import Barber from '../../img/barbershop.jpg'
import TagCanvas3D from '../tagcloud/TagCloud3D';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Travelo from '../../img/travelo.png'
import Interno from '../../img/interno.png'
import Jquery from '../../img/jquery.png'
import English from '../../img/english.png'
import Dist from '../../img/dist.png'



const words1 = ['H', 'i', ',', '\n' ,'I', `'`, 'm', '\u00A0'];
const words2 = ['i', 'm', 'a', ',', '\n' ,'w', 'e', 'b ', '\u00A0' , 'd','e','v','e','l','o','p', 'e', 'r'];
const words3 = ['M', 'y', '\u00A0', 'P', 'o' ,'r', 't', 'f ', 'o' , 'l','i','o'];
const words4 = ['M', 'e', ',', '\u00A0', 'm', 'y' ,'s', 'e', 'l ', 'f' , '\u00A0','a','n','d', '\u00A0', 'I'];
const words5 = ['S', 'k', 'i', 'l', 'l', 's' ,'\u00A0', '&', '\n', 'E' , 'x','p','e','r', 'i', 'e','n','c','e'];

export default function MainPage(){

    const [animatedIndices, setAnimatedIndices] = useState([]);

    const handleMouseEnter = (index) => {
        setAnimatedIndices((prev) => [...prev, index]);

        setTimeout(() => {
        setAnimatedIndices((prev) => prev.filter(i => i !== index));
        }, 1000); 
    };

    const [animatedIndices2, setAnimatedIndices2] = useState([]);

    const handleMouseEnter2 = (index) => {
        setAnimatedIndices2((prev) => [...prev, index]);

        setTimeout(() => {
        setAnimatedIndices2((prev) => prev.filter(i => i !== index));
        }, 1000); 
    };

    const [animatedIndices3, setAnimatedIndices3] = useState([]);

    const handleMouseEnter3 = (index) => {
        setAnimatedIndices3((prev) => [...prev, index]);

        setTimeout(() => {
        setAnimatedIndices3((prev) => prev.filter(i => i !== index));
        }, 1000); 
    };
    
    const [animatedIndices4, setAnimatedIndices4] = useState([]);

    const handleMouseEnter4 = (index) => {
        setAnimatedIndices4((prev) => [...prev, index]);

        setTimeout(() => {
        setAnimatedIndices4((prev) => prev.filter(i => i !== index));
        }, 1000); 
    };

    const [animatedIndices5, setAnimatedIndices5] = useState([]);

    const handleMouseEnter5 = (index) => {
        setAnimatedIndices5((prev) => [...prev, index]);

        setTimeout(() => {
        setAnimatedIndices5((prev) => prev.filter(i => i !== index));
        }, 1000); 
    };

    return(
        <div className="main">
            <div className="header">
                <p className="bgtext">
                    &lt;html&gt;
                </p>
                <div className="header__box">
                    <p className="bgtext">
                        &lt;body&gt;
                    </p>
                    <div className="bttext__h1">
                        <p className="bgtext">
                            &lt;h1&gt;
                        </p>
                    </div>
                    <div className="header__textbox">
                        {words1.map((letter, index) =>
                            letter === '\n' ? (
                                <br key={index} />
                            ) : (
                                <span
                                key={index}
                                className={`blast ${
                                    animatedIndices.includes(index) ? 'animated rubberBand' : ''
                                }`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                >
                                {letter}
                                </span>
                            )
                        )}
                        <img src={HeaderLogo} alt="" className="header__image" />
                            {words2.map((letter, index) =>
                                letter === '\n' ? (
                                    <br key={index} />
                                ) : (
                                    <span
                                    key={index}
                                    className={`blast ${
                                        animatedIndices2.includes(index) ? 'animated rubberBand' : ''
                                    }`}
                                    onMouseEnter={() => handleMouseEnter2(index)}
                                    >
                                    {letter === ' ' ? '\u00A0' : letter}
                                    </span>
                                )
                            )}
                    </div>
                    <p className="bgtext">&lt;/h1&gt;</p>   
                    <p className="bgtext">&lt;p&gt;</p>   
                    <p className="header__text">
                        Begginer / Front End Developer
                    </p>
                    <p className="bgtext">&lt;/p&gt;</p> 
                    <div className="header_button diagonal">
                    <Link to="/contacts" className="header__button_link"><span>Contact me!</span></Link>
                    </div> 
                </div>
            </div>

            <section className="my-works">
                <p className="bgtext">&lt;h2&gt;</p>
                <div className="my-works__textbox">
                    {words3.map((letter, index) =>
                        letter === '\n' ? (
                            <br key={index} />
                        ) : (
                            <span
                            key={index}
                            className={`blast ${
                                animatedIndices3.includes(index) ? 'animated rubberBand' : ''
                            }`}
                            onMouseEnter={() => handleMouseEnter3(index)}
                            >
                            {letter}
                            </span>
                        )
                    )}
                </div>
                <p className="bgtext">&lt;/h2&gt;</p>
                <p className="bgtext">&lt;p&gt;</p>
                <div className="my-works__description">
                    <p >
                        A small gallery of works that I did. I know there are few of them, but I'm just starting my way. Further i'll show  you more of my works :)
                    </p>
                    <div className="header_button">
                    <Link to="/works" className="header__button_link"><span>See more!</span></Link>
                    </div> 
                </div>
                <p className="bgtext">&lt;/p&gt;</p>

                <div className="my-works__container">
                    <p className="bgtext">&lt;section&gt;</p>
                    <div className="my-works__container_wraper">

                    <article class="card__article">
                        <img src={Barber} alt="" className="card__img" />

                        <div class="card__data">
                            <h2 class="card__title">Barbershop</h2>
                            <span class="card__description">test layout with adaptive technology</span>
                            <a target="_blank" href="../../../public/1.05/index.html" class="card__button">See Project</a>
                        </div>
                    </article>

                    <article class="card__article">
                        <img src={Travelo} alt="" className="card__img" />

                        <div class="card__data">
                            <h2 class="card__title">Traveloo</h2>
                            <span class="card__description">project with using search and sort feature</span>
                            <a target="_blank" href="../../../public/Traveloo/index.html" class="card__button">See Project</a>
                        </div>
                    </article>

                    <article class="card__article">
                        <img src={Interno} alt="" className="card__img" />

                        <div class="card__data">
                            <h2 class="card__title">Interno</h2>
                            <span class="card__description">group task layout</span>
                            <a target="_blank" href="../../../public/работа 11.12/mainpage.html" class="card__button">See Project</a>
                        </div>
                    </article>

                    <article class="card__article">
                        <img src={Jquery} alt="" className="card__img" />

                        <div class="card__data">
                            <h2 class="card__title">Jquery</h2>
                            <span class="card__description">Projects that shows jquery functions</span>
                            <a target="_blank" href="../../../public/работа jquery/index.html" class="card__button">See Project</a>
                        </div>
                    </article>

                    <article class="card__article">
                        <img src={English} alt="" className="card__img" />

                        <div class="card__data">
                            <h2 class="card__title">English</h2>
                            <span class="card__description">Project with using javascript</span>
                            <a target="_blank" href="../../../public/english/index.html" class="card__button">See Project</a>
                        </div>
                    </article>

                    <article class="card__article">
                        <img src={Dist} alt="" className="card__img" />

                        <div class="card__data">
                            <h2 class="card__title">Big Project</h2>
                            <span class="card__description">First big project that i made</span>
                            <a target="_blank" href="../../../public/dist 24/index.html" class="card__button">See Project</a>
                        </div>
                    </article>

                    </div>
                    <p className="bgtext">&lt;/section&gt;</p>
                </div>
            </section>

            <section className="aboutme">
                <div className="aboutme__textbox">
                    <p className="bgtext">&lt;h2&gt;</p>
                    {words4.map((letter, index) =>
                        letter === '\n' ? (
                            <br key={index} />
                        ) : (
                            <span
                            key={index}
                            className={`blast ${
                                animatedIndices4.includes(index) ? 'animated rubberBand' : ''
                            }`}
                            onMouseEnter={() => handleMouseEnter4(index)}
                            >
                            {letter}
                            </span>
                        )
                    )}
                    <p className="bgtext">&lt;/h2&gt;</p>
                    <p className="bgtext">&lt;p&gt;</p>
                    <p className="aboutme__information">
                        I am a beginner front-end developer. I take responsibility for my work and I try to do it with the maximum neatness, also I'm pretty good in work with information. If it needs i can work with a team, and also do creative with task.
                    </p>
                    <p className="aboutme__information">
                        I am doing my best to be in trands of modern web technologies, to make amazing web-sites for my clients, and be able to do whatever they ask me, even if it's something crazy. 
                    </p>
                    <p className="aboutme__information">
                        In future i wanna work with AI technologies, and hopefully take part in developing one of it. Also my goal is to gain a lot of experience and meet wonderful and ambitious people.
            
                    </p>
                    <p className="aboutme__information">
                        Looking forward to participating in global projects, maybe it will be yours :)
                    </p>
                    <p className="bgtext">&lt;/p&gt;</p>
                </div>
                <div className="aboutme__container">
                    <TagCanvas3D></TagCanvas3D>
                </div>
            </section>

            <section className="experience">
                <div className="experience__textbox">
                    <p className="bgtext">&lt;h2&gt;</p>
                    <div className="experience__headline">
                            {words5.map((letter, index) =>
                                letter === '\n' ? (
                                    <br key={index} />
                                ) : (
                                    <span
                                    key={index}
                                    className={`blast ${
                                        animatedIndices5.includes(index) ? 'animated rubberBand' : ''
                                    }`}
                                    onMouseEnter={() => handleMouseEnter5(index)}
                                    >
                                    {letter}
                                    </span>
                                )
                            )}  
                    </div>
                    <p className="bgtext">&lt;/h2&gt;</p>
                    <div className="experience__skills">
                        <p className="bgtext">&lt;p&gt;</p>
                        <div className="experience__skills_textbox">
                            <p className="experience__skills_headline">
                                My skills:
                            </p>
                            <p className="experience__skills_text">
                                I’m a beginner front-end developer with real work experience and a strong passion for creating modern, user-friendly websites. I work with a range of technologies and constantly strive to improve my skills.
                            </p>
                            <p className="experience__skills_headline mini">
                                Markup & Styling:
                            </p>
                            <ul>
                                <li>
                                    HTML5 and CSS3 (including Flexbox and CSS Grid)
                                </li>
                                <li>
                                    Responsive and cross-browser layout
                                </li>
                                <li>
                                    CSS animations (transitions, transforms, keyframes)
                                </li>
                                <li>
                                    Working with SVG (embedding, styling, animation)
                                </li>
                                <li>
                                    Sass (writing modular, maintainable styles using variables and mixins)
                                </li>
                            </ul>
                            <p className="experience__skills_headline mini">
                                Programming Languages & Libraries:
                            </p>
                            <ul>
                                <li>JavaScript, jQuery</li>
                                <li>React (beginner: components, API integration)</li>
                                <li>
                                    PHP + MySQL – for building dynamic websites with admin panels
                                </li>
                            </ul>
                            <p className="experience__skills_headline mini">
                                Content Management Systems:
                            </p>
                            <ul>
                                <li>
                                    WordPress – creating sites, integrating layouts, customizing themes and plugins
                                </li>
                            </ul>
                            <p className="experience__skills_headline mini">
                                What I Can Do:
                            </p>
                            <ul>
                                <li>
                                Build landing pages and business card websites from scratch
                                </li>
                                <li>
                                Create responsive designs for all screen sizes
                                </li>
                                <li>
                                Develop CSS, Sass, and SVG animations
                                </li>
                                <li>
                                Set up and customize WordPress sites, integrate layouts into WordPress
                                </li>
                                <li>
                                Build dynamic websites with admin panels using PHP + MySQL
                                </li>
                                <li>
                                Write front-end logic in React with basic API usage
                                </li>
                            </ul>
                            <p className="experience__skills_text">
                                In addition to technical skills, I have experience working in teams and even leading them. I’ve taken initiative in group projects, handled communication, organized workflows, and ensured deadlines were met.
                            </p>
                            <p className="experience__skills_text">
                                I’m responsible, adaptable, and easy to work with. I enjoy solving problems, learning new tools, and paying attention to both functionality and design. I believe in clean code, thoughtful UX, and continuous self-improvement.
                            </p>
                        </div>
                        <p className="bgtext">&lt;/p&gt;</p>
                    </div>
                </div>
                <div className="experience__diagram">
                    <div class="chart">
                        <span>HTML</span>
                        <footer>
                            <div data-width="95%" className='html'></div>
                        </footer>
                    </div>
                    <div class="chart">
                        <span>CSS</span>
                        <footer>
                            <div data-width="85%" className='css'></div>
                        </footer>
                    </div>
                    <div class="chart">
                        <span>SCSS</span>
                        <footer>
                            <div data-width="80%" className='scss'></div>
                        </footer>
                    </div>
                    <div class="chart">
                        <span>JAVASCRIPT</span>
                        <footer>
                            <div data-width="70%" className='javascript'></div>
                        </footer>
                    </div>
                    <div class="chart">
                        <span>REACT</span>
                        <footer>
                            <div data-width="50%" className='react'></div>
                        </footer>
                    </div>
                    <div class="chart">
                        <span>WORDPRESS</span>
                        <footer>
                            <div data-width="65%" className='wordpress'></div>
                        </footer>
                    </div>
                    <div class="chart">
                        <span>PHP</span>
                        <footer>
                            <div data-width="40%" className='php'></div>
                        </footer>
                    </div>
                    <div class="chart">
                        <span>FIGMA</span>
                        <footer>
                            <div data-width="90%" className='figma'></div>
                        </footer>
                    </div>
                    <div className="experience__diagram_box">
                        <div className="experience__diagram__item">
                            <p className="experience__diagram_headline">
                                Frontend development
                            </p>
                            <div className="experience__diagram_text">
                                <span>since 2022 <br/> To nowaday</span>
                            </div>
                            <p className="experience__diagram_text">
                                I am learning frontend with the goal of becoming a frontend developer and prepeare myself to AI engeniering, cause i need knowlage and skills for that. 
                            </p>
                        </div>
                        <div className="experience__diagram__item">
                            <p className="experience__diagram_headline">
                                AI development
                            </p>
                            <p className="experience__diagram_text">
                                I started learning Python C(soon C++) to develop a strong programming foundation and prepare for a career in AI engineering, which requires deep understanding of both high-level algorithms and low-level system behavior."    
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <p className="bgtext">&lt;/html&gt;</p>
        </div>
    )
}