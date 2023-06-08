import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import style from './projects.module.css';

function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()

    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        fetch('http://localhost:5000/project', {
            mathod: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }).then((resp) => resp.json()).then((data) => {
                setProjects(data)
            }).catch((err) => console.log(err))
    }, [])

    return ( 
        <div className={style.project_container}>
            <div className={style.title_container}>
                <h1>Meu Projetos</h1>
                <LinkButton to="/newProject" text="Criar novo projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start" >
                {projects.length > 0 && 
                    projects.map((project) => <ProjectCard
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        Key={project.id}
                    />)}
            </Container>
        </div>
     );
}

export default Projects;