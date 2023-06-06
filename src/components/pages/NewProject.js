import { useNavigate } from 'react-router-dom'
import style from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";

function NewProject() {

    const history = useNavigate();

    function createPost(project) {
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/project', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json()).then((data) => {
            //redirect
            history('/projects', {message: 'Projeto criado com sucesso!'})
        }).catch((err) => console.log(err));
    }

    return ( 
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adcionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
     );

}

export default NewProject;