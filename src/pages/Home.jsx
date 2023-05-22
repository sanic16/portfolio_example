import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import '../styles/Home.css'

function Home(){
    return(
        <div className='home'>
            <div className='about'>
                <h2>
                    Hi, My Name is Julio
                </h2>
                <div className="prompt">
                    <p>
                        Desarrollador Web 
                    </p>
                    <FaLinkedin/>
                    <FaGithub/>
                    <FaEnvelope/>
                </div>
            </div>
            <div className="skills">
                <h1>Habilidades</h1>
                <ol className='list'>
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            React JS, HTML, CSS 
                            Bootstrap, TailwindCSS, StyledComponents
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            Flask, Django, Node.js, MySQL-MariaDB, PostgreSQL, 
                            SQLAlchemy, AWS Beanstalk, AWS S3, Heroku, DigitalOcean,
                            Bash, RESTful API, Wordpress
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languajes</h2>
                        <span>
                            Python, JavaScript, C/C++, Latex, Java
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Home;