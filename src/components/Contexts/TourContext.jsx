import React from 'react';
import { useReducer } from 'react';
import { API } from '../helpers/constants';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export const TourContext = React.createContext()

const INIT_STATE = {
    tours: [],
    edit: {},
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_TOURS":
            return {
                ...state, tours: action.payload
            }
        case "GET_EDIT_TOUR":
            return {
                ...state, edit: action.payload
            }

        default: return state
    }
}

const TourContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)



    const getTours = async (history) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 6)
        history.push(`${history.location.pathname}?${search.toString()}`)

        let { data } = await axios(`${API}/tours${window.location.search}`)
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

    const editTour = async (id) => {
        const { data } = await axios.get(`${API}/tours/${id}`)
        dispatch({
            type: "GET_EDIT_TOUR",
            payload: data
        })
    }

    const saveEditTour = async (editedTour) => {
        try {
            let res = await axios.patch(`${API}/tours/${editedTour.id}`, editedTour)
            return res
        } catch (err) {
            console.log(err);
        }
    }

    const deleteTour = async (id, history) => {
        await axios.delete(`${API}/tours/${id}`)
        getTours(history)
    }



    return (
        <TourContext.Provider value={{
            tours: state.tours,
            edit: state.edit,
            getTours,
            addTour,
            editTour,
            saveEditTour,
            deleteTour,

        }}>
            {children}
        </TourContext.Provider>
    )

}

export default TourContextProvider
