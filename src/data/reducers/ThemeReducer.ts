import ThemeActionReducerInterface from "../../Interfaces/ThemeActionReducerInterface"
import { ThemeReducerInterface } from "../../Interfaces/ThemeReducerInterface"

const defaultTheme = {
    theme: {theme: 'dark'} as ThemeReducerInterface
}

const CHANGE_THEME= "CHANGE_THEME"

export const themeReducer = (state = defaultTheme, action: ThemeActionReducerInterface) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, theme: action.payload}
        default:
            return state
    }
}

export const changeTheme = (payload: ThemeReducerInterface) => ({type: CHANGE_THEME, payload})
