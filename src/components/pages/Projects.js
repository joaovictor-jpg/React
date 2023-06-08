import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';

import { useLocation } from 'react-router-dom';

import style from './projects.module.css';

function Projects() {

    const location = useLocation()

    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    return ( 
        <div className={style.project_container}>
            <div className={style.title_container}>
                <h1>Meu Projetos</h1>
                <LinkButton to="/newProject" text="Criar novo projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start" >
                <p>Project..</p>
            </Container>
        </div>
     );
}

export default Projects;