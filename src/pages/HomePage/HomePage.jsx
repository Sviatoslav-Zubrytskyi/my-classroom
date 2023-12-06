import MainLayout from "../../layouts/MainLayout";
import React from "react";
import styles from './HomePage.module.css';
import Course from "../../components/Course/Course";

function HomePage() {
    return (
        <MainLayout>
            <div className={styles.courses}>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
            </div>
        </MainLayout>
    );
}

export default HomePage;
