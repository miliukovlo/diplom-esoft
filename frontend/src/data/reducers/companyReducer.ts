import CompanyActionReducerInterface from "../../Interfaces/CompanyActionReducerInterface"
import CompanyInterface from "../../Interfaces/CompanyInterface"

const defaultCompanies = {
    companies: [
    ] as CompanyInterface[]
}
const ADD_COMPANY = "ADD_COMPANY"
const REMOVE_COMPANY = "REMOVE_COMPANY"
const CLEAR_COMPANY = "CLEAR_COMPANY"

export const companiesReducer = (state = defaultCompanies, action: CompanyActionReducerInterface) => {
    switch (action.type) {
        case ADD_COMPANY:
            return {...state, companies: [...state.companies, action.payload]}
        case REMOVE_COMPANY:
            return {...state, companies: state.companies.filter(company => company.id !== action.payload)}
        case CLEAR_COMPANY:
            return {...state, companies: []}
        default:
            return state
    }
}

export const addCompany = (payload: CompanyInterface) => ({type: ADD_COMPANY, payload})
export const removeCompany = (payload: string) => ({type: REMOVE_COMPANY, payload})
export const clearCompany = () => ({type: CLEAR_COMPANY})
