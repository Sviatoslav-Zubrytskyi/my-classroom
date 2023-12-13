import MainLayout from "../../layouts/MainLayout";
import React, {useState, useEffect} from "react";
import styles from './CoursePage.module.css';
import { Link, useParams } from "react-router-dom";
import NotebookIcon from "../../components/Icons/coursePageIcons/NotebookIcon";
import BookIcon from "../../components/Icons/coursePageIcons/BookIcon";
import UserIcon from "../../components/Icons/coursePageIcons/UserIcon";
import Task from "../../components/Task/Task";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
// Move styled components outside of the functional component
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  background-image: ${(props) => props.bg};
  background-position: ${(props) => props.bgPosition};
  border-radius: 0.5rem;
  color: ${(props) => props.color};
`;

const CoursePage = () => {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const findItemById = (id) => {
        axios.get(`http://localhost:5050/api/courses/${id}`).then((response) => {
            setCourse(response.data)
        }).catch((error) => {
            console.error("error while fetching:" + error)
            setError(true);
        }).finally( () => {
            setLoading(false);
            }

        )
    };
    useEffect(() => {
        findItemById(id);
    }, [id]);

    // useEffect(() => {
    //     console.log(course);
    // }, [course]);
    if (loading) return (
        <MainLayout>
            <div className={styles.main}>
                <ImageContainer style={{background:"gray"}}>
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
                            <UserIcon />
                            <div>
                                <p className={styles.announceText}>Announce something to your class</p>
                            </div>
                        </div>
                        <Task task={ {
                            "icon": <FontAwesomeIcon icon="fa-solid fa-spinner" spin />,
                            "text":"loading"
                        }} />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
    if (error) return <div>Error...</div>
    return (
        <MainLayout>
            <div className={styles.main}>
                <ImageContainer bg={course.bg} bgPosition={course.bgPosition} color={course.color}>
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
                            <UserIcon />
                            <div>
                                <p className={styles.announceText}>Announce something to your class</p>
                            </div>
                        </div>
                        {course.tasks.map((task) => (
                            <Task key={task.id} task={task} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CoursePage;
