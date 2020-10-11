import React from 'react';
import { GET_STAGES, FILTER_SEARCH } from './constants';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
    items: [],
    columnsItems: {},
};
function reducer(state, action) {
    const { items, columnsItems } = action.payload;
    switch (action.type) {
        case GET_STAGES:
            return {
                ...state,
                items,
                columnsItems,
            };
        default:
            return state;
    }
}
const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};
export default GlobalContextProvider;
