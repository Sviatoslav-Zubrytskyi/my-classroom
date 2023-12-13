import styles from "./Task.module.css";

import {Link} from "react-router-dom";
import React from "react";
import TripleDotsButton from "../Icons/tripleDotsButton/TripleDotsButton";


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
                <TripleDotsButton color="gray"/>
            </div>
    );
};

export default Task;
