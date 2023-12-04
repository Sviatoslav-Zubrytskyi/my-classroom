import MainLayout from "../layouts/MainLayout";
import React from "react";
import styles from '../styles/CoursePage.module.css';
import courseImage from '../images/anime.jpg'
function CoursePage() {
    return (
        <MainLayout>
            <div className={styles.main}>
                <div className={styles.courseImageContainer}>
                    <img src={courseImage} alt="course image" className={styles.courseImage}/>
                </div>

            </div>
        </MainLayout>
    );
}

export default CoursePage;