import { combineReducers, createStore } from "redux";
import { companiesReducer } from "./companyReducer";
import { favoriteCompaniesReducer } from "./favoriteCompany";
import { commentsReducer } from "./commentsReducer";
import { projectsReducer } from "./ProjectsReducer";
import { apartmentReducer } from "./apartmentReducer";
import { userReducer } from "./userReducer";
import { themeReducer } from "./ThemeReducer";
import { requestReducer } from "./requestReducer";

const rootReducer = combineReducers({
    companies: companiesReducer,
    favorite: favoriteCompaniesReducer,
    comments: commentsReducer,
    projects: projectsReducer,
    apartments: apartmentReducer,
    user: userReducer,
    theme: themeReducer,
    requests: requestReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch