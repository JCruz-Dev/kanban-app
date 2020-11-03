import React from 'react';
import { GET_STAGES, SEARCH_CONTENT } from './constants';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
    items: [],
    columnContent: {},
    searchParam: '',
    filteredColumns: {},
    searchActive: false,
    searchTerm: '',
};
function reducer(state, action) {
    const {
        items,
        columnContent,
        filteredColumns,
        searchActive,
    } = action.payload;
    switch (action.type) {
        case GET_STAGES:
            return {
                ...state,
                items,
                columnContent,
            };
        case SEARCH_CONTENT:
            return {
                ...state,
                filteredColumns,
                searchActive,
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
