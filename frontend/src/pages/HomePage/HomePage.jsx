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
    useEffect(() => {
        // Fetch data from the server on component mount
        axios.get('http://localhost:5050/api/courses').then((response) => {
            setCourseslist(response.data);
        });
    }, []);
    const courses = courseslist;
    const newCourse = {
        "teacher": "Viktor",
        "groupName": "JS group",
        "bg": `url(${bgJS})`,
        "bgPosition":"center center",
        "color":"black",
        "tasks": []
    }
    const postNewCourse = (course) => {
        console.log(`trying to post:${course}`)
        axios.post(`http://localhost:5050/api/courses/`, course)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <MainLayout>
            <div className={styles.courses}>
                <button onClick={() => postNewCourse(newCourse)}>
                    postNewCourse
                </button>
                {courses.map((course) => {
                    return (
                        <Course
                            id={course._id}
                            teacher={course.teacher}
                            groupName={course.groupName}
                            bg={course.bg}
                            bgPosition={course.bgPosition}
                            color={course.color}
                        />
                    )
                })}
            </div>
        </MainLayout>
    );
}

export default HomePage;
