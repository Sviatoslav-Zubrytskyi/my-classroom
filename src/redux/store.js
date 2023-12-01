// redux/store.js
import { createStore } from 'redux';

// Define an initial state and a reducer
const initialState = {
    sharedState: 'Initial Value',
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
