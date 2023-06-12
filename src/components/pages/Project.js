import styles from './Project.module.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Loading from '../layout/Loading';
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'


function Project() {

    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/project/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log(err))
        }, 300)
    }, [id])

    function togglerProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function editPost(project) {
        // budget validation
        if(project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/project/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(!showProjectForm)
            setMessage('Projeto Atualizado')
            setType('success')
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_datails}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>{project.name}</h1>
                            <button className={styles.btn} onClick={togglerProjectForm}>
                                {!showProjectForm ? 'Editar project' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria: </span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: R$</span>{project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado: </span> {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="Concluir edição"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Project;