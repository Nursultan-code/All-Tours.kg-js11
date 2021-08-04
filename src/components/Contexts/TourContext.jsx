import React from 'react';
import { useReducer } from 'react';
import { API } from '../helpers/constants';
import axios from 'axios';


export const TourContext = React.createContext()

const INIT_STATE = {
    products: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_TOURS":
            return {
                ...state, products: action.payload.data
            }
        default: return state
    }
}

const TourContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getTours = async () => {
        let data = await axios(`${API}/products`)
        dispatch({
            type: "GET_TOURS",
            payload: data
        })
    }

    const addTour = async (newTour) => {
        try {
            let res = await axios.post(`${API}/tours`, newTour)
            return res
        }
        catch (err) {
            return err
        }
    }

    return (
        <TourContext.Provider value={{
            tours: state.tours,
            getTours,
            addTour
        }}>
            {children}
        </TourContext.Provider>
    )

}

export default TourContextProvider
