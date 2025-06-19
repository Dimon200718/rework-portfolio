import './About.scss'
import React, { useState } from 'react';
import HeaderLogo from '../../img/DebilBlya.png'
import Barber from '../../img/barbershop.jpg'
import TagCanvas3D from '../tagcloud/TagCloud3D';

const words4 = ['M', 'e', ',', '\u00A0', 'm', 'y' ,'s', 'e', 'l ', 'f' , '\u00A0','a','n','d', '\u00A0', 'I'];


export default function About(){

    const [animatedIndices4, setAnimatedIndices4] = useState([]);
    
        const handleMouseEnter4 = (index) => {
            setAnimatedIndices4((prev) => [...prev, index]);
    
            setTimeout(() => {
            setAnimatedIndices4((prev) => prev.filter(i => i !== index));
            }, 1000); 
        };


    return(
        <div className="about__marginbox">
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
        </div>
    )
}