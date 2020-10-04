import React from 'react';
import { GET_STAGES} from './constants';

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()
const initialState = {
    stages: [],
    todo: [],
    progress: [],
    done: []
}
function reducer(state, action) {
    const { todo, progress, done } = action.payload;
    switch (action.type) {
        case GET_STAGES:
            return {
                ...state, todo, progress, done
            }
        default:
            return state

    }
}
const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}
export default GlobalContextProvider