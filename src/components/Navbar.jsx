import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../styles/Navbar.css';
import {FaAlignCenter, FaAlignJustify} from "react-icons/fa"

function Navbar(){

    const [expandNavbar, setExpandNavbar] =  useState(false);
    const location = useLocation();

    useEffect(()=>{
        setExpandNavbar(false)
    }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={() => {setExpandNavbar((prev)=>!prev)}}>  
                    <FaAlignJustify>

                    </FaAlignJustify>
                </button>
            </div>
            <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/experience">Experiencia</Link>
            </div>
        </div>
    );
};

export default Navbar;