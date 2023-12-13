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
    const courses = useSelector(state => state.courses);
    const [items, setItems] = useState('');
    const [newItem, setNewItem] = useState('some info');
    useEffect(() => {
        // Fetch data from the server on component mount
        axios.get('http://localhost:5050/api/courses').then((response) => {
            setItems(response.data);
        });
    }, []);

    const handleAddItem = () => {
        // Add a new item to the database
        axios.post('http://localhost:5050/api/courses',
            {
                "teacher": "Viktor",
                "groupName": "JS group",
                "bg": `url(${bgJS})`,
                "bgPosition":"center center",
                "color":"black",
                "tasks": [
                {
                    "text": "fix my BUGS, please UwU",
                    "date": "Dec 4",
                    "icon": "BookIcon"
                },
                {
                    "text": "fix my BUGS, please UwU",
                    "date": "Dec 4",
                    "icon": "BookIcon"
                },
                {
                    "text": "fix my BUGS, please UwU",
                    "date": "Dec 4",
                    "icon": "BookIcon"
                },
                {
                    "text": "fix my BUGS, please UwU",
                    "date": "Dec 4",
                    "icon": "BookIcon"
                },
            ]
        }).then((response) => {
            setItems([...items, response.data]);
            setNewItem("")
        })
    };
    return (
        <MainLayout>
            <div className={styles.courses}>
                {courses.map((course) => {
                    return (
                        <Course
                            id={course.id}
                            teacher={course.teacher}
                            groupName={course.groupName}
                            bg={course.bg}
                            bgPosition={course.bgPosition}
                            color={course.color}
                        />
                    )
                })}
            <button style={{width:"40px",
                height:"40px"}} onClick={handleAddItem}></button>
            </div>
        </MainLayout>
    );
}

export default HomePage;
