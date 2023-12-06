import MainLayout from "../layouts/MainLayout";
import React from "react";
import styles from '../styles/CoursePage.module.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import NotebookIcon from "../components/icons/NotebookIcon";
import BookIcon from "../components/icons/BookIcon";

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
                        <Link to={"/task"} className={styles.taskLink}></Link>
                        <div className={styles.taskContainer}>
                            <NotebookIcon/>
                            <div className={styles.taskContent}>
                                <p className={styles.taskText}>Tasads dsadasadsdas adsadsadsadsadsas dasd adsk</p>
                                <p className={styles.taskDate}>Dec 5</p>
                            </div>
                        </div>
                        <div className={styles.distance}></div>
                        <button className={styles.but}>
                            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                                 className={styles.tripleDotsIcon}
                                 fill="gray">
                                <path
                                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`${styles.task}`}>
                        <Link to={"/task"} className={styles.taskLink}></Link>
                        <div className={styles.taskContainer}>
                            <BookIcon/>
                            <div className={styles.taskContent}>
                            <p className={styles.taskText}>Tasads dsadasadsdads dsadasadsdads dsadasadsdas adsadsadsadsadsas dasd adsk</p>
                                <p className={styles.taskDate}>Dec 5</p>
                            </div>
                        </div>
                        <div className={styles.distance}></div>
                        <button className={styles.but}>
                            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                                 className={styles.tripleDotsIcon}
                                 fill="gray">
                                <path
                                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>);
}

export default CoursePage;