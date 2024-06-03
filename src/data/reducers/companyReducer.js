const defaultCompanies = {
    companies: [
        {
            name: 'Компания №1',
            id: 'someCompany1',
            specialization: 'apartment',
            rating: 0,
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №2',
            id: 'someCompany2',
            specialization: 'apartment',
            rating: 0,
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №3',
            id: 'someCompany3',
            specialization: 'houses',
            rating: 0,
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №4',
            id: 'someCompany4',
            specialization: 'apartment',
            rating: 0,
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №5',
            id: 'someCompany5',
            specialization: 'houses',
            rating: 0,
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №6',
            id: 'someCompany6',
            specialization: 'apartment',
            rating: 0,
            slogan: 'Мы строим раз и на века!'
        },
    ]
}

const ADD_COMPANY = "ADD_COMPANY"
const REMOVE_COMPANY = "REMOVE_COMPANY"

export const companiesReducer = (state = defaultCompanies, action) => {
    switch (action.type) {
        case ADD_COMPANY:
            return {...state, companies: [...state.companies, action.payload]}
        case REMOVE_COMPANY:
            return {...state, companies: state.companies.filter(company => company.id !== action.payload)}
        default:
            return state
    }
}

export const addCompany = (payload) => ({type: ADD_COMPANY, payload})
export const removeCompany = (payload) => ({type: REMOVE_COMPANY, payload})