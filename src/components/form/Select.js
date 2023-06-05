import style from "./Select.module.css";

function Select({text, name, options, handleOnChange, value}) {
    return (
        <div className={style.form_control}>
            <label html={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
     );
}

export default Select;