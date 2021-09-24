//Action creators types
export type EmployeesActionTypes = ReturnType<typeof setEmployees> | ReturnType<typeof removeEmployee>

//Action creators
export const setEmployees = (employees: EmployeesType[]) => ({type: 'SET_EMPLOYEES', employees} as const);
export const removeEmployee = (employeeId: number) => ({type: 'REMOVE_EMPLOYEE', employeeId} as const);

//Typing for initialState
export type InitialStateType = typeof initialState
export type EmployeesType = {
    id: number
    first_name: string | null
    last_name: string | null
    avatar: string
    email: string | null
}

const initialState = {
    employees: [] as EmployeesType[]
}

export const employeesReducer = (state: InitialStateType = initialState, action: EmployeesActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_EMPLOYEES':
            return {
                ...state,
                employees: [...action.employees]
            }
        case 'REMOVE_EMPLOYEE':
            const stateCopy = {...state}
            stateCopy.employees = stateCopy.employees.filter(em => em.id !== action.employeeId)
            return stateCopy
        default:
            return state
    }
}