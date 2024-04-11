import { ReactNode, createContext, useReducer } from "react"
import { InitialState, InitialStateType, ActionType, Reducers } from "./config"

type Props = {
    children: ReactNode
} 

type ContextType = {
    state: InitialStateType
    dispatch: React.Dispatch<ActionType>
}


export const Context = createContext<ContextType>({
    state: InitialState,
    dispatch: () => null
})

export const ContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(Reducers, InitialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            { children }
        </Context.Provider>
    )
}
