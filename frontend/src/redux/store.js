// redux/store.js
import { createStore } from 'redux';
import bgL from "../images/anime.jpg";
import bgChainsaw from "../images/chainsawbg.jpg";
import bgJS from "../images/JSbg.png";
import BookIcon from "../components/Icons/coursePageIcons/BookIcon";
import React from "react";
import NotebookIcon from "../components/Icons/coursePageIcons/NotebookIcon";

// Define an initial state and a reducer
const initialState = {
    sharedState: 'Initial Value'
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SHARED_STATE':
            return { ...state, sharedState: action.payload };
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
