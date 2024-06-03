import { combineReducers, createStore } from "redux";
import { companiesReducer } from "./companyReducer";

const rootReducer = combineReducers({
    companies: companiesReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch