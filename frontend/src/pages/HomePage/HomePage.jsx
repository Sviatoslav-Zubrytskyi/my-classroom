import MainLayout from "../../layouts/MainLayout";
import styles from './HomePage.module.css';
import Course from "../../components/Course/Course";
import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import axios from "axios";
import bgL from "../../images/anime.jpg";
import BookIcon from "../../components/Icons/coursePageIcons/BookIcon";
import bgChainsaw from "../../images/chainsawbg.jpg";
import NotebookIcon from "../../components/Icons/coursePageIcons/NotebookIcon";
import bgJS from "../../images/JSbg.png";

function HomePage() {
    //const courses = useSelector(state => state.courses);
    const [courseslist, setCourseslist] = useState([]);
    const getCourses = () => {
        axios.get('http://localhost:5050/api/courses').then((response) => {
            setCourseslist(response.data);
        });
    }
    useEffect(() => {
        // Fetch data from the server on component mount
        getCourses();
    }, []);
    const courses = courseslist;
    const newCourse = {
        "teacher": "Viktor",
        "groupName": "JS group",
        "bg": `url(${bgJS})`,
        "bgPosition": "center center",
        "color": "black",
        "tasks": []
    }
    const postNewCourse = (course) => {
        // console.log(`trying to post:${course}`)
        axios.post(`http://localhost:5050/api/courses/`, course, {
            headers: {
                'Authorization': window.localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log(response)
                getCourses();
            })
            .catch(error => {
                console.error(error);
            })
    }

    const getUser = () => {
        axios.get('http://localhost:5050/api/auth/user', {
            headers: {
                'Authorization': window.localStorage.getItem("token")
            }
        }).then(res => {
            const user = res.data.user;
            console.log(user);
        })
    }
    return (
        <MainLayout>
            <div className={styles.courses}>
                <button onClick={() => postNewCourse(newCourse)}>
                    postNewCourse
                </button>
                <button onClick={() => getUser()}>Get user</button>
                {courses.map((course) => {
                    return (
                        <Course
                            id={course._id}
                            teacher={course.teacher}
                            groupName={course.groupName}
                            bg={course.bg}
                            bgPosition={course.bgPosition}
                            color={course.color}
                            updateCourseList={getCourses}
                        />
                    )
                })}
            </div>
        </MainLayout>
    );
}

export default HomePage;
