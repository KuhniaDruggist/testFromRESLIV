import {v1} from 'uuid'; // Добавил библиотеку для генерации id => string

//Action creators types
export type EmployeesActionTypes = ReturnType<typeof setEmployees>
    | ReturnType<typeof removeEmployee>
    | ReturnType<typeof addEmployee>
    | ReturnType<typeof changeNewFirstName>
    | ReturnType<typeof changeNewLastName>

//Action creators
export const setEmployees = (employees: EmployeesType[]) => ({type: 'SET_EMPLOYEES', employees} as const);
export const removeEmployee = (employeeId: number | string) => ({type: 'REMOVE_EMPLOYEE', employeeId} as const);
export const changeNewFirstName = (newFirstName: string) => ({type: 'CHANGE_NEW_FIRST_NAME', newFirstName} as const);
export const changeNewLastName = (newLastName: string) => ({type: 'CHANGE_NEW_LAST_NAME', newLastName} as const);
export const addEmployee = () => ({type: 'ADD_EMPLOYEE'} as const)

//Typing for initialState
export type InitialStateType = typeof initialState
export type EmployeesType = {
    id: number | string
    first_name: string | null
    last_name: string | null
    avatar: string | null
    email: string | null
}

const initialState = {
    newFirstName: '',
    newLastName: '',
    employees: [] as EmployeesType[]
}

export const employeesReducer = (state: InitialStateType = initialState, action: EmployeesActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_EMPLOYEES':
            return {
                ...state,
                employees: [...action.employees]
            }
        case 'REMOVE_EMPLOYEE': {
            const stateCopy = {...state}
            stateCopy.employees = stateCopy.employees.filter(em => em.id !== action.employeeId)
            return stateCopy
        }
        case 'CHANGE_NEW_FIRST_NAME':
            return {...state, newFirstName: action.newFirstName}
        case 'CHANGE_NEW_LAST_NAME':
            return {...state, newLastName: action.newLastName}
        case 'ADD_EMPLOYEE':
            if (state.newFirstName && state.newLastName) {
                return {
                    ...state,
                    employees: [{
                        id: v1(),
                        first_name: state.newFirstName,
                        last_name: state.newLastName,
                        avatar: null,
                        email: null
                    }, ...state.employees],
                    newFirstName: '',
                    newLastName: ''
                }
            }
            return state
        default:
            return state
    }
}