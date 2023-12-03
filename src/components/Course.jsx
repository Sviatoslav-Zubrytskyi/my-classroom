import React from 'react';
import styles from "../styles/Course.module.css";
import {Link} from "react-router-dom";
const Course = () => {
    const openChoice = () => {
        console.log("clicked on menu");
    }
    return (
        <div className={styles.course}>
            <div className={styles.courseInfo}>
                <div className={styles.topDiv}>
                    <Link to="/course" className={styles.link}></Link>
                    <Link to={"/course"} className={styles.courseName}>IT-Group G</Link>
                    <button onClick={openChoice} className={styles.but}>
                        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                             className={styles.tripleDotsIcon}
                             fill="white">
                            <path
                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <Link to={{}} className={styles.courseTeacher}>Rob Loves</Link>
                </div>
            </div>
            <div className={styles.emptySpace}>

            </div>
            <div className={styles.additionalInfo}>
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" className={styles.folderIcon}>
                    <path
                        d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Course;