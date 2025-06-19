import './Contacts.scss';
import React, { useState } from 'react';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';

const words6 = ['C', 'o', 'n', 't', 'a', 'c' ,'t','\u00A0', 'M', 'e'];



export default function Contacts() {

    const [animatedIndices6, setAnimatedIndices6] = useState([]);

    const handleMouseEnter6 = (index) => {
        setAnimatedIndices6((prev) => [...prev, index]);

        setTimeout(() => {
        setAnimatedIndices6((prev) => prev.filter(i => i !== index));
        }, 1000); 
    };

    return (
        <div className="contacts__wraper">
            <p className="bgtext">&lt;html&gt;</p>
            <div className="contacts__box">
                <p className="bgtext">&lt;body&gt;</p>
                <div className="contacts__container">
                    <p className="bgtext">&lt;div&gt;</p>
                    <div className="container">
                        <p className="bgtext">&lt;h2&gt;</p>
                        <div className="text">
                                {words6.map((letter, index) =>
                                        letter === '\n' ? (
                                            <br key={index} />
                                        ) : (
                                            <span
                                            key={index}
                                            className={`blast ${
                                                animatedIndices6.includes(index) ? 'animated rubberBand' : ''
                                            }`}
                                            onMouseEnter={() => handleMouseEnter6(index)}
                                            >
                                            {letter}
                                            </span>
                                        )
                                    )}
                        </div>
                        <p className="bgtext">&lt;h2&gt;</p>
                        <div className="nano__marginbox"></div>
                        <p className="bgtext">&lt;form&gt;</p>
                        <form action="#">
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">First Name</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Last Name</label>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Email Address</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Website Name</label>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-data textarea">
                                    <textarea rows="8" cols="80" required></textarea>
                                    <br />
                                    <div className="underline"></div>
                                    <label htmlFor="">Write your message</label>
                                    <br />
                                    <div className="form-row submit-btn">
                                        
                                    </div>
                                </div>
                            </div>
                        </form>
                        <p className="bgtext">&lt;form&gt;</p>
                    </div>
                    
                    <div className="header_button diagonal">
                            <span>Contact me!</span>
                    </div> 
                    
                    <p className="bgtext">&lt;/div&gt;</p>
                </div>
                <p className="bgtext">&lt;/body&gt;</p>
            </div>
            <p className="bgtext">&lt;/html&gt;</p>
        </div>
    );
}
