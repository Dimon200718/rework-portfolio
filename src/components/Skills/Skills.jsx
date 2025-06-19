import './Skills.scss'
import React, { useState } from 'react';
import HeaderLogo from '../../img/DebilBlya.png'
import Barber from '../../img/barbershop.jpg'
import TagCanvas3D from '../tagcloud/TagCloud3D';

const words5 = ['S', 'k', 'i', 'l', 'l', 's' ,'\u00A0', '&', '\n', 'E' , 'x','p','e','r', 'i', 'e','n','c','e'];


export default function Skills(){

    const [animatedIndices5, setAnimatedIndices5] = useState([]);
    
        const handleMouseEnter5 = (index) => {
            setAnimatedIndices5((prev) => [...prev, index]);
    
            setTimeout(() => {
            setAnimatedIndices5((prev) => prev.filter(i => i !== index));
            }, 1000); 
        };

    return(
        <div className="skills__marginbox">
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
        </div>
    )
}