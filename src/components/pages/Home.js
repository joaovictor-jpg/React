import style from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home() {
    return ( 
        <section className={style.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newProject" text="Criar novo projeto" />
            <img src={savings} alt="Costs" />
        </section>
     );
}

export default Home;