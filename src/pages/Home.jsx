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
                        A software developer with a passion for learning and creating.
                    </p>
                    <FaLinkedin/>
                    <FaGithub/>
                    <FaEnvelope/>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className='list'>
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            React JS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM, 
                            Ionic, Bootstrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
                            MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>
                            JavaScript, Java, Python, C#, C, C++, TypeScript, Go
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Home;