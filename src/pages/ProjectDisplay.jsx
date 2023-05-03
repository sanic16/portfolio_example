import React from 'react';
import {useParams} from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import { FaGithub } from 'react-icons/fa';
import '../styles/ProjectDisplay.css'

function ProjectDisplay(){
    // using this hook to grab parameters sent to the URL
    const {id} = useParams();
    const project = ProjectList[id]
    return(
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <p>
                <b>Skills:</b> {project.skill}
            </p>
            <FaGithub/>
        </div>
    );
};

export default ProjectDisplay;