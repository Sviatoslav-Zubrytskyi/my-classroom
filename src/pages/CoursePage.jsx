import MainLayout from "../layouts/MainLayout";
import React from "react";
import styles from '../styles/CoursePage.module.css';
import courseImage from '../images/anime.jpg'
import {Link} from "react-router-dom";

function CoursePage() {
    return (
        <MainLayout>
            <div className={styles.main}>
                <div className={styles.courseImageContainer}>
                    <div className={styles.courseNameContainer}>
                        <h1 className={styles.courseName}>IT-Group G</h1>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.events}>
                        <div className={styles.eventsItem}>
                            <p className={styles.eventName}>Upcoming</p>
                        </div>
                        <div className={styles.eventsItem}>
                            <p className={styles.eventDate}>Woohoo, no work due soon!</p>
                        </div>
                        <div className={`${styles.eventsItem} ${styles.viewBut}`}>
                            <div className={styles.viewContainer}>
                                <span className={styles.aText}>View All</span>
                                <Link to={'/course'} className={styles.viewLink}></Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tasks}>

                    </div>
                </div>

            </div>
        </MainLayout>
    );
}

export default CoursePage;