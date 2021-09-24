import React from 'react';
import style from './Employees.module.css';
import employeePhotoDefault from '../../assets/img/user.png';
import axios from 'axios';
import {EmployeesPropsType} from './EmployeesContainer';

class Employees extends React.Component<EmployeesPropsType> {
    componentDidMount() {
        axios.get('https://reqres.in/api/users?per_page=12')
            .then(response => {
                this.props.setEmployees(response.data.data)
            })
    }

    render() {
        return (
            <div>
                <h1 className={style.title}>Список сотрудников</h1>
                <ul className={style.employees}>
                    {
                        this.props.employees.map(u => {
                            const onClickToggle = () => this.props.removeEmployee(u.id);

                            return (
                                <li className={style.employee} key={u.id}>
                                    <div className={style.header}>
                                        <div className={style.avatarWrapper}>
                                            <img className={style.avatar} alt="Аватар пользователя"
                                                 src={u.avatar != null ? u.avatar : employeePhotoDefault}/>
                                        </div>
                                        <button className={style.button}
                                                onClick={onClickToggle}>remove
                                        </button>
                                    </div>
                                    <div className={style.body}>
                                        <h3 className={style.name}>{u.first_name} {u.last_name}</h3>
                                        <p className={style.email}>{u.email}</p>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default Employees;