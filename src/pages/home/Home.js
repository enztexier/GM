import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {

    return (
        <>
            <div className='container-home'>
                <div className='center-home'>
                    <div>
                        <h1 className='tracking-in-expand'>GLOWMATH</h1>
                    </div>
                    <div className='box-home slide-in-bottom'>
                        <button className='btn-home'><Link to="/calcul">Calcul</Link></button>
                        <button className='btn-home'><Link to="/multiplication">Multiplication</Link></button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;


/*** *
 * 
 * 
 <Link to="/copyright">Copyright</Link>


    const [nbrDigits, setNbrDigits] = useState([]);
    const addDigit = () => {
        setNbrDigits(cur => [...cur, 0]);
    }

    const popDigit = () => {
        setNbrDigits((cur) => cur.slice(0, cur.length - 1));
        console.log(nbrDigits);
    }
    <p>{nbrDigits}</p>



            const [nbr1, setNbr1] = useState(0);
            <input type="range" min="0" max="100" value={nbr1} onChange={(e)=>setNbr1(e.target.value)}></input>
            <h1>{nbr1}</h1>




            const [calcul, setcalcul] = useState(false);
             const GetRandomInt = () => {
        let one = Math.floor(Math.random() * 99);
        let two = Math.floor(Math.random() * 99);
        let result = one + two;
        let b = <p>{one} + {two} = {result}</p>;
        setcalcul(b);
        console.log(operator);
    }



 * 
 * **/