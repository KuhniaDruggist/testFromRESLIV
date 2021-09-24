import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Employees from './Employees';
import {setEmployees, removeEmployee, EmployeesType} from '../../redux/employeesReducer';
import {RootStateType} from '../../redux/redux-store';

//Typing for Users component props
export type EmployeesPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    employees: EmployeesType[]
}

type mapDispatchPropsType = {
    setEmployees: (users: EmployeesType[]) => void
    removeEmployee: (employeeId: number) => void
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        employees: state.employeesPage.employees
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        setEmployees: (employees: EmployeesType[]) => {
            dispatch(setEmployees(employees))
        },
        removeEmployee: (employeeId: number) => {
            dispatch(removeEmployee(employeeId))
        }
    }
}

export const EmployeesContainer = connect(mapStateToProps, mapDispatchToProps)(Employees);