import './MyWorks.scss'
import React, { useState } from 'react';
import Barber from '../../img/barbershop.jpg'
import Travelo from '../../img/travelo.png'
import Interno from '../../img/interno.png'
import Jquery from '../../img/jquery.png'
import English from '../../img/english.png'
import Dist from '../../img/dist.png'
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Test from '../../img/test.png'
import Aim from '../../img/aim.png'
import School from '../../img/School.png'

const words3 = ['M', 'y', '\u00A0', 'P', 'o' ,'r', 't', 'f ', 'o' , 'l','i','o'];

export default function MyWorks(){

    const [animatedIndices3, setAnimatedIndices3] = useState([]);

    const handleMouseEnter3 = (index) => {
        setAnimatedIndices3((prev) => [...prev, index]);

        setTimeout(() => {
        setAnimatedIndices3((prev) => prev.filter(i => i !== index));
        }, 1000); 
    };

    return(
        <div className="my-works__margimbox">
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
                    <Link to="/" className="header__button_link"><span>Back to main</span></Link>
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

                    <article class="card__article">
                        <img src={Test} alt="" className="card__img" />

                        <div class="card__data">
                            <h2 class="card__title">Test</h2>
                            <span class="card__description">Test with sweat alert js</span>
                            <a target="_blank" href="../../../public/04.10/index.html" class="card__button">See Project</a>
                        </div>
                    </article>

                    <article class="card__article">
                        <img src={Aim} alt="" className="card__img" />

                        <div class="card__data">
                            <h2 class="card__title">Aim</h2>
                            <span class="card__description">Aim game... just for fun))</span>
                            <a target="_blank" href="../../../public/robota/index.html" class="card__button">See Project</a>
                        </div>
                    </article>

                    <article class="card__article">
                        <img src={School} alt="" className="card__img" />

                        <div class="card__data">
                            <h2 class="card__title">School homework</h2>
                            <span class="card__description">Just a school homework</span>
                            <a target="_blank" href="../../../public/robota-vm/index.html" class="card__button">See Project</a>
                        </div>
                    </article>

                    </div>
                    <p className="bgtext">&lt;/section&gt;</p>
                </div>
            </section>
        </div>
    )
}