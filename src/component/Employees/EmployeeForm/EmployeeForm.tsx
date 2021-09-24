import style from './EmployeeForm.module.css';
import React, {ChangeEvent, KeyboardEvent} from 'react';

type EmployeeFormPropsType = {
    addEmployee: () => void
    changeNewFirstName: (newFirstName: string) => void
    changeNewLastName: (newLastName: string) => void
    newFirstName: string
    newLastName: string
}

function EmployeeForm(props: EmployeeFormPropsType) {
    const changeFirstName = (e: ChangeEvent<HTMLInputElement>) => props.changeNewFirstName(e.currentTarget.value);
    const changeLastName = (e: ChangeEvent<HTMLInputElement>) => props.changeNewLastName(e.currentTarget.value);

    const addNewEmployee = () => props.addEmployee();
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addNewEmployee();
        }
    }

    return (
        <div className={style.formWrapper}>
            <h2>Add new employee form</h2>
            <ul className={style.fields}>
                <li className={style.field}>
                    <label htmlFor="firstName">First name:</label>
                    <input id="firstName"
                           className={style.inputName}
                           type="text"
                           value={props.newFirstName}
                           onChange={changeFirstName}
                           onKeyPress={onKeyPressHandler}/>

                </li>
                <li className={style.field}>
                    <label htmlFor="lastName">Last name:</label>
                    <input id="lastName"
                           className={style.inputName}
                           type="text"
                           value={props.newLastName}
                           onChange={changeLastName}
                           onKeyPress={onKeyPressHandler}/>
                </li>
            </ul>
            <button className={style.button} onClick={addNewEmployee}>Add</button>
        </div>
    );
}

export default EmployeeForm