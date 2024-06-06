import CompanyActionReducerInterface from "../../Interfaces/CompanyActionReducerInterface"
import CompanyInterface from "../../Interfaces/CompanyInterface"

const defaultCompanies = {
    favoriteCompanies: [] as CompanyInterface[]
}

const ADD_FAVORITE_COMPANY = "ADD_FAVORITE_COMPANY"
const REMOVE_FAVORITE_COMPANY = "REMOVE_FAVORITE_COMPANY"

export const favoriteCompaniesReducer = (state = defaultCompanies, action: CompanyActionReducerInterface) => {
    switch (action.type) {
        case ADD_FAVORITE_COMPANY:
            return {...state, favoriteCompanies: [...state.favoriteCompanies, action.payload]}
        case REMOVE_FAVORITE_COMPANY:
            return {...state, favoriteCompanies: state.favoriteCompanies.filter(company => company.id !== action.payload)}
        default:
            return state
    }
}

export const addFavoriteCompany = (payload: CompanyInterface) => ({type: ADD_FAVORITE_COMPANY, payload})
export const removeFavoriteCompany = (payload: string) => ({type: REMOVE_FAVORITE_COMPANY, payload}) 