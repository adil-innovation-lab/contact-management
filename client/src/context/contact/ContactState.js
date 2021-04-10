import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Adil',
                email: 'adil@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Zia',
                email: 'zia@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Zeeshan',
                email: 'zeeshan@gmail.com',
                phone: '333-333-3333',
                type: 'professional'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <contactContext.Provider
            value={{
                        contacts: state.contacts ,
                        addContact
                    }}
        >
            {props.children}
        </contactContext.Provider>
    )
}

export default ContactState;