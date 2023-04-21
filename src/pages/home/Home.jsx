import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Button from '../../components/button/Button';

const Home = () => {

    return (
        <>
            <div className='container-home'>
                <div className='center-home'>
                    <div>
                        <h1 className='tracking-in-expand'>GLOWMATH</h1>
                    </div>
                    <div className='box-home slide-in-bottom'>
                        <Button><Link to="/calcul">Calcul</Link></Button>
                        <Button><Link to="/multiplication">Multiplication</Link></Button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;