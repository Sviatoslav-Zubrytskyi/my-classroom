import MainLayout from "../../layouts/MainLayout";
import React from "react";
import styles from './CoursePage.module.css';
import {Link, useParams} from "react-router-dom";
import NotebookIcon from "../../components/Icons/coursePageIcons/NotebookIcon";
import BookIcon from "../../components/Icons/coursePageIcons/BookIcon";
import UserIcon from "../../components/Icons/coursePageIcons/UserIcon";
import Task from "../../components/Task/Task";
import {useSelector} from "react-redux";
import styled from "styled-components";

function CoursePage() {
    const {id} = useParams();
    const course = useSelector(state => state.courses)[id];
    const ImageContainer = styled.div`
      position: relative;
      width: 100%;
      height: 20rem;
      background-image: ${course.bg};
      background-position: ${course.bgPosition};
      border-radius: 0.5rem;
      color:${course.color};
    `
    return (<MainLayout>
        <div className={styles.main}>
            <ImageContainer>
                <div className={styles.courseNameContainer}>
                    <h1 className={styles.courseName}>{course.groupName}</h1>
                </div>
            </ImageContainer>
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
                    {
                        course.tasks.map((task) => {
                            return (
                                <Task task={task}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </MainLayout>);
}

export default CoursePage;