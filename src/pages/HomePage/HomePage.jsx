import MainLayout from "../../layouts/MainLayout";
import React from "react";
import styles from './HomePage.module.css';
import Course from "../../components/Course/Course";
import bgL from "../../images/anime.jpg";
import bgChainsaw from "../../images/chainsawbg.jpg";
import bgJS from "../../images/JSbg.png"

function HomePage() {
    let courses = [
        {
            "teacher": "Rob Loves",
            "groupName": "IT-Group G",
            "bg": `url(${bgL})`,
            "bgPosition":"top right",
            "color":"white"
        },
        {
            "teacher": "Rob Loves",
            "groupName": "IT-Group G",
            "bg": `url(${bgL})`,
            "bgPosition":"center right",
            "color":"white"
        },
        {
            "teacher": "Rob Loves",
            "groupName": "IT-Group G",
            "bg": `url(${bgChainsaw})`,
            "bgPosition":"100px 170px",
            "color":"white"
        },
        {
            "teacher": "Viktor",
            "groupName": "JS group",
            "bg": `url(${bgJS})`,
            "bgPosition":"center center",
            "color":"black"
        },
    ]
    return (
        <MainLayout>
            <div className={styles.courses}>
                {courses.map((course) => {
                    return (
                        <Course
                            teacher={course.teacher}
                            groupName={course.groupName}
                            bg={course.bg}
                            bgPosition={course.bgPosition}
                            color={course.color}/>
                    )
                })}
            </div>
        </MainLayout>
    );
}

export default HomePage;
