import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage'
import CoursePage from "./pages/CoursePage";
import TaskPage from "./pages/TaskPage";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>
    },
    {
        path: "/home",
        element:<HomePage/>
    },
    {
        path: "/course",
        element: <CoursePage/>
    },
    {
        path: "/task",
        element: <TaskPage/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

