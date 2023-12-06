import styles from "./Task.module.css";

import {Link} from "react-router-dom";
import React from "react";


const Task = ({task}) => {
    return (
            <div className={`${styles.task}`}>
                <Link to={"/task"} className={styles.taskLink}></Link>
                <div className={styles.taskContainer}>
                    {task.icon}
                    <div className={styles.taskContent}>
                        <p className={styles.taskText}>{task.text}</p>
                        <p className={styles.taskDate}>{task.date}</p>
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
