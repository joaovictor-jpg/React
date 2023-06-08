import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import Loading from '../layout/Loading';

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import style from './projects.module.css';

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()

    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/project', {
            mathod: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
        }, 300);
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
                    {!removeLoading && <Loading />}
                    {removeLoading && projects.lengtg === 0 && (
                        <p>Não há projetos cadastrados!</p>
                    )}
            </Container>
        </div>
     );
}

export default Projects;