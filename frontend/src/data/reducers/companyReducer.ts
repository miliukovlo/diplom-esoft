import CompanyActionReducerInterface from "../../Interfaces/CompanyActionReducerInterface"
import CompanyInterface from "../../Interfaces/CompanyInterface"

const defaultCompanies = {
    companies: [
        {
            name: 'Компания №1',
            id: 'someCompany1',
            specialization: 'apartment',
            logo: 'https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png',
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №2',
            id: 'someCompany2',
            specialization: 'apartment',
            logo: 'https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png',
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №3',
            id: 'someCompany3',
            logo: 'https://i.pinimg.com/originals/f6/7a/3a/f67a3a261f0c952640f9c1d214d73e96.png',
            specialization: 'houses',
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №4',
            id: 'someCompany4',
            specialization: 'apartment',
            logo: 'https://img.razrisyika.ru/kart/94/372802-logo-6.jpg',
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №5',
            id: 'someCompany5',
            specialization: 'houses',
            logo: 'https://i.pinimg.com/originals/cc/7a/d3/cc7ad3d3ba4e80853304bee2dc3015da.png',
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №6',
            id: 'someCompany6',
            specialization: 'apartment',
            logo: 'https://free-png.ru/wp-content/uploads/2020/10/Nike-logo-506c4872.png',
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №7',
            id: 'someCompany7',
            specialization: 'apartment',
            logo: 'https://img.razrisyika.ru/kart/94/372802-logo-6.jpg',
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №8',
            id: 'someCompany8',
            specialization: 'houses',
            logo: 'https://i.pinimg.com/originals/cc/7a/d3/cc7ad3d3ba4e80853304bee2dc3015da.png',
            slogan: 'Мы строим раз и на века!'
        },
        {
            name: 'Компания №9',
            id: 'someCompany9',
            specialization: 'apartment',
            logo: 'https://free-png.ru/wp-content/uploads/2020/10/Nike-logo-506c4872.png',
            slogan: 'Мы строим раз и на века!'
        },
    ] as CompanyInterface[]
}

const ADD_COMPANY = "ADD_COMPANY"
const REMOVE_COMPANY = "REMOVE_COMPANY"

export const companiesReducer = (state = defaultCompanies, action: CompanyActionReducerInterface) => {
    switch (action.type) {
        case ADD_COMPANY:
            return {...state, companies: [...state.companies, action.payload]}
        case REMOVE_COMPANY:
            return {...state, companies: state.companies.filter(company => company.id !== action.payload)}
        default:
            return state
    }
}

export const addCompany = (payload: CompanyInterface) => ({type: ADD_COMPANY, payload})
export const removeCompany = (payload: string) => ({type: REMOVE_COMPANY, payload})