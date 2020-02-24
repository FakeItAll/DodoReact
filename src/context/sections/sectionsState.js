import React, {useReducer} from 'react';
import axios from 'axios'
import {SectionsContext} from './sectionsContext';
import {sectionsReducer} from './sectionsReducer';

const url = process.env.REACT_APP_DB_URL;

export const SectionsState = ({children}) => {
    const default_state = {
        sections: []
    };
    const [state, dispatch] = useReducer(sectionsReducer, default_state)

    const fetchSections = async () => {
        const res = await axios.get(`${url}/sections.json`);
        const payload = Object.keys(res.data).map(key => {
            const correct_items = Object.keys(res.data[key].items).map(key2 => {
                return {
                    ...res.data[key].items[key2],
                    id: key2
                }
            });
            return {
                ...res.data[key],
                id: key,
                items: correct_items,
            }
        });
        dispatch({type: 'FETCH_SECTIONS', payload})
    }

    return (
        <SectionsContext.Provider value={{
            sections: state.sections,
            fetchSections
        }}>
            {children}
        </SectionsContext.Provider>
    )
};