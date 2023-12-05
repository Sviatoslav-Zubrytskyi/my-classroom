import MainLayout from "../layouts/MainLayout";
import React from "react";
import styles from '../styles/HomePage.module.css';
import Course from "../components/Course";
function HomePage() {
    return (
        <MainLayout>
            <Course/>

        </MainLayout>
    );
}

export default HomePage;
