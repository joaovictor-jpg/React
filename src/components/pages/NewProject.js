import style from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";

function NewProject() {
    return ( 
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adcionar os serviços</p>
            <ProjectForm btnText="Criar Projeto" />
        </div>
     );
}

export default NewProject;