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
    sharedState: 'Initial Value',
    courses: [
        {
            "id":0,
            "teacher": "Rob Loves",
            "groupName": "IT-Group G",
            "bg": `url(${bgL})`,
            "bgPosition":"top right",
            "color":"white",
            "tasks": [
                    {
                        "text": "task1 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date": "Dec 4",
                        "icon": <BookIcon/>
                    },
                    {
                        "text": "task2 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date": "Dec 4",
                        "icon": <BookIcon/>
                    },
                    {
                        "text": "task3 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date": "Dec 4",
                        "icon": <BookIcon/>
                    },
                ]
        },
        {
            "id":1,
            "teacher": "Rob Loves",
            "groupName": "IT-Group G",
            "bg": `url(${bgL})`,
            "bgPosition":"center right",
            "color":"white",
            "tasks": [
                {
                    "text": "task1 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task2 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task3 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task1 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task2 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task3 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <NotebookIcon/>
                },
            ]
        },
        {
            "id":2,
            "teacher": "Rob Loves",
            "groupName": "IT-Group G",
            "bg": `url(${bgChainsaw})`,
            "bgPosition":"bottom center",
            "color":"white",
            "tasks": [
                {
                    "text": "task1 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task2 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task3 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <NotebookIcon/>
                },
                {
                    "text": "task1 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task2 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task3 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <NotebookIcon/>
                },
                {
                    "text": "task1 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task2 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task3 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <NotebookIcon/>
                },
                {
                    "text": "task1 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task2 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "task3 is to do something. " +
                        "I just need text to test the feature, dont bother yourself reading this, please. " +
                        "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                    "date": "Dec 4",
                    "icon": <NotebookIcon/>
                },
            ]
        },
        {
            "id":3,
            "teacher": "Viktor",
            "groupName": "JS group",
            "bg": `url(${bgJS})`,
            "bgPosition":"center center",
            "color":"black",
            "tasks": [
                {
                    "text": "fix my BUGS, please UwU",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "fix my BUGS, please UwU",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "fix my BUGS, please UwU",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
                {
                    "text": "fix my BUGS, please UwU",
                    "date": "Dec 4",
                    "icon": <BookIcon/>
                },
            ]
        },
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SHARED_STATE':
            return { ...state, sharedState: action.payload };
        case 'UPDATE_COURSES':
            return { ...state, courses: action.payload };
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
