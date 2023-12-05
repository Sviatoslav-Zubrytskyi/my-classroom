import MainLayout from "../layouts/MainLayout";
import React from "react";
import styles from '../styles/CoursePage.module.css';
import courseImage from '../images/anime.jpg'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'

function CoursePage() {
    return (<MainLayout>
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
                    <div className={`${styles.task} ${styles.announce}`}>
                        <div className={styles.defaultIcon}>
                            <FontAwesomeIcon icon={faUser}/>

                        </div>
                        <div>
                            <p className={styles.announceText}>Announce something to your class</p>
                        </div>
                    </div>
                    <div className={`${styles.task}`}>
                        <div className={styles.taskContainer}>
                            <div className={styles.defaultIcon}>
                                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7z"></path>
                                    <path
                                        d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"></path>
                                </svg>
                            </div>
                            <div className={styles.taskContent}>
                                <p className={styles.taskText}>Tasads dsadasadsdas adsadsadsadsadsas dasd adsk</p>
                                <p className={styles.taskDate}>Dec 5</p>
                            </div>
                        </div>
                        <div className={styles.tripleDotsContainer}>
                            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                                 className={styles.tripleDotsIcon}
                                 fill="gray">
                                <path
                                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className={`${styles.task}`}>
                        <div className={styles.taskContainer}>
                            <div className={styles.defaultIcon}>
                                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                                     className={styles.taskIcon}>
                                    <path
                                        d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16z"></path>
                                </svg>
                            </div>
                            <div className={styles.taskContent}>
                                <p className={styles.taskText}>Tasads dsadasadsdas adsadsadsadsadsas dasd adsk</p>
                                <p className={styles.taskDate}>Dec 5</p>
                            </div>
                        </div>
                        <div className={styles.tripleDotsContainer}>
                            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                                 className={styles.tripleDotsIcon}
                                 fill="gray">
                                <path
                                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>);
}

export default CoursePage;