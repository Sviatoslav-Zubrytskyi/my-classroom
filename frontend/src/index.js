import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import HomePage from './pages/HomePage/HomePage'
import CoursePage from "./pages/CoursePage/CoursePage";
import TaskPage from "./pages/TaskPage/TaskPage";
import {Provider} from "react-redux";
import store from "./redux/store";
import {
    createHashRouter,
    RouterProvider
} from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/home",
        element: <HomePage/>
    },
    {
        path: "/course/:id",
        element: <CoursePage/>
    },
    {
        path: "/task",
        element: <TaskPage/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
);

