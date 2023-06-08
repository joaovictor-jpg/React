import style from './Loading.module.css';

import loading from '../../img/loading.svg'

function Loading() {
    return ( 
        <div className={style.loader_container}>
            <img src={loading} className={style.loader} alt="Loading" />
        </div>
    );
}

export default Loading;