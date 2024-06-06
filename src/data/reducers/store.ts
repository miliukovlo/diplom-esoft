import { combineReducers, createStore } from "redux";
import { companiesReducer } from "./companyReducer";
import { favoriteCompaniesReducer } from "./favoriteCompany";

const rootReducer = combineReducers({
    companies: companiesReducer,
    favorite: favoriteCompaniesReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch