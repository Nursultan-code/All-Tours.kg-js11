import React, { useReducer } from 'react';
export const AuthContextProvider = React.createContext()

const INIT_STATE = {}
const reduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        default: return state
    }
}


const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    async function registrationUser(e, history) {
        e.preventDefault()
        const newUser = {
            email: e.target.value,
            password: e.target.value,
        }
    }

    return (
        <authContext.Provider value={{
            registrationUser
        }}>
            {children}
        </authContext.Provider>
    );
};
export default AuthContextProvider;