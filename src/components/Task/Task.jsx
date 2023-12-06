import styles from "../../pages/CoursePage/CoursePage.module.css";

import {Link} from "react-router-dom";
import BookIcon from "../Icons/coursePageIcons/BookIcon";
import React from "react";


const Task = () => {
    return (
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
    );
};

export default Task;
