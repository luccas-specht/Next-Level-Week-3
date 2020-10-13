import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import './landing.style.css';

import { Link } from 'react-router-dom';

import logoHappy from '../../assets/svg/logo.svg';

const Landing = () => (
    <div className='container-landing'>
        <div className="content-wrapper-landing">
            <div className="container-letf-landing">
                <img src={logoHappy} alt="logo happy" />
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>
            </div>
            <div className="container-right-landing">
                <div className="location">
                    <strong>
                        Esteio
                    </strong>
                    <span>
                        Rio Grande do Sul
                    </span>
                </div>
                <Link to='' className='enter-app'>
                    <FiArrowRight
                        size={26}
                        color='rgba(0,0,0,0.6)'
                    />
                </Link>
            </div>
        </div>
    </div>
);

export { Landing }