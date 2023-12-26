import MainLayout from "../../layouts/MainLayout";
import React, {useState, useEffect} from "react";
import styles from './CoursePage.module.css';
import {Link, useParams} from "react-router-dom";
import NotebookIcon from "../../components/Icons/coursePageIcons/NotebookIcon";
import BookIcon from "../../components/Icons/coursePageIcons/BookIcon";
import UserIcon from "../../components/Icons/coursePageIcons/UserIcon";
import Task from "../../components/Task/Task";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios, {get} from "axios";
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
    // const dispatch = useDispatch();
    // const sharedTasks = useSelector((state) => state.sharedTasks);
    const {id} = useParams();
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [tasks, setTasks] = useState([]);
    // const [rerenderFlag, setRerenderFlag] = useState(false);
    const getCourseInfo = (id) => {
        axios.get(`http://localhost:5050/api/courses/${id}`).then(response => {
            setCourse(response.data);
        }).catch(error => {
            console.error("error while fetching:" + error)
            setError(true);
        }).finally(() => {
                setLoading(false);
            }
        )
    };
    const getTasks = (id) => {
        axios.get(`http://localhost:5050/api/tasks/${id}`).then((response) => {
            setTasks(response.data);
            // setRerenderFlag(false);
            // dispatch({ type: 'UPDATE_SHARED_TASKS', payload: response.data });
        }).catch(error => {
            console.error(error);
            setError(true);
        })
    }
    useEffect(() => {
        getCourseInfo(id);
        getTasks(id);
    }, [id]);


    const newTask = {
        "text": "task1 is to do something. " +
            "I just need text to test the feature, dont bother yourself reading this, please. " +
            "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
        "date": "Dec 4",
        "icon": "BookIcon",
        "author": "author",
        "descriptionText": "descriptionText",
        "attachedFiles": "files",
        "publicComments": ["public comment1", "public comment2"],
        "privateComments": ["private comment1", "private comment2"],
    }
    const postNewTask = (task) => {
        axios.post(`http://localhost:5050/api/tasks/${id}`, task)
            .then(response => {
                console.log("new task was created:", response.data);
                // setRerenderFlag(true)
                getTasks(id);
            })
            .catch((error) => {
                console.error('Error creating task:', error);

                // Check for specific error details
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error('Server responded with:', error.response.data);
                    console.error('Status code:', error.response.status);
                    console.error('Headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('No response received. Request details:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error setting up the request:', error.message);
                }
            })
    }
    const updateTaskList = () => {
        getTasks(id);
    }
    if (loading) return (
        <MainLayout>
            <div className={styles.main}>
                <ImageContainer style={{background: "gray"}}>
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
                        <Task task={{
                            "icon": <FontAwesomeIcon icon="fa-solid fa-spinner" spin/>,
                            "text": "loading"
                        }} courseId={id}/>
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
                            <UserIcon/>
                            <div>
                                <p className={styles.announceText}>Announce something to your class</p>
                            </div>
                        </div>
                        <button onClick={() => postNewTask(newTask)}>Add new task</button>
                        {
                            console.log(tasks)
                        }
                        {tasks.map((task) => (
                            <Task key={task._id} task={task} courseId={id} updateTaskList={updateTaskList}/>
                        ))}
                        {/*<Task task={{*/}
                        {/*    "icon": <FontAwesomeIcon icon="fa-solid fa-spinner" spin/>,*/}
                        {/*    "text": "loading2"*/}
                        {/*}}/>*/}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
};

export default CoursePage;
