import { ThemeAction } from "../types/ThemeReducer"
import { UserAction } from "../types/UserReducer"
import { themeInitialState, themeReducer } from "./reducers/themeReducer"
import { userInitialState, userReducer } from "./reducers/userReducer"

// criar o export do Initialstate
export const InitialState = {
    theme: themeInitialState,
    user: userInitialState
}

// criar os export dos reducers
export const Reducers = ( state: InitialStateType, action: ActionType ) => ({ 
    theme: themeReducer(state.theme, action),
    user: userReducer(state.user, action)
})

// criar os export dos Types
export type InitialStateType = typeof InitialState
export type ActionType = ThemeAction | UserAction