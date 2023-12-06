import MainLayout from "../../layouts/MainLayout";
import React from "react";
import styles from './CoursePage.module.css';
import {Link} from "react-router-dom";
import NotebookIcon from "../../components/Icons/coursePageIcons/NotebookIcon";
import BookIcon from "../../components/Icons/coursePageIcons/BookIcon";
import UserIcon from "../../components/Icons/coursePageIcons/UserIcon";
import Task from "../../components/Task/Task";

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
                        <UserIcon/>
                        <div>
                            <p className={styles.announceText}>Announce something to your class</p>
                        </div>
                    </div>
                    <Task task={{
                        "text": "task1 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 6",
                        "icon": <NotebookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task2 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 5",
                        "icon": <BookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task3 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 4",
                        "icon": <NotebookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task4 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 4",
                        "icon": <BookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task5 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 4",
                        "icon": <NotebookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task6 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 3",
                        "icon": <BookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task6 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 3",
                        "icon": <NotebookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task7 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 3",
                        "icon": <BookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task8 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 2",
                        "icon": <NotebookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task9 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 2",
                        "icon": <BookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task10 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 1",
                        "icon": <NotebookIcon/>
                    }}/>
                    <Task task={{
                        "text": "task11 is to do something. " +
                            "I just need text to test the feature, dont bother yourself reading this, please. " +
                            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
                        "date":"Dec 1",
                        "icon": <BookIcon/>
                    }}/>
                </div>
            </div>
        </div>
    </MainLayout>);
}

export default CoursePage;