import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Employees from './Employees';
import {
    addEmployee,
    changeNewFirstName,
    changeNewLastName,
    EmployeesType,
    removeEmployee,
    setEmployees
} from '../../redux/employeesReducer';
import {RootStateType} from '../../redux/redux-store';

//Typing for Users component props
export type EmployeesPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    newFirstName: string
    newLastName: string
    employees: EmployeesType[]
}

type mapDispatchPropsType = {
    addEmployee: () => void
    setEmployees: (users: EmployeesType[]) => void
    removeEmployee: (employeeId: number | string) => void
    changeNewFirstName: (newFirstName: string) => void
    changeNewLastName: (newLastName: string) => void
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        newFirstName: state.employeesPage.newFirstName,
        newLastName: state.employeesPage.newLastName,
        employees: state.employeesPage.employees
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        setEmployees: (employees: EmployeesType[]) => {
            dispatch(setEmployees(employees))
        },
        removeEmployee: (employeeId: number | string) => {
            dispatch(removeEmployee(employeeId))
        },
        changeNewFirstName: (newFirstName: string) => {
            dispatch(changeNewFirstName(newFirstName))
        },
        changeNewLastName: (newLastName: string) => {
            dispatch(changeNewLastName(newLastName))
        },
        addEmployee: () => {
            dispatch(addEmployee())
        }
    }
}

export const EmployeesContainer = connect(mapStateToProps, mapDispatchToProps)(Employees);