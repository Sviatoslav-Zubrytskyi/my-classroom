import MainLayout from "../layouts/MainLayout";
import React from "react";
import styles from '../styles/TaskPage.module.css';
import NotebookIcon from "../components/icons/NotebookIcon";
function TaskPage() {
    return (
        <MainLayout>
            <div className={styles.main}>
                <NotebookIcon/>
                <div className={styles.content}>
                    <span className={styles.title}></span>

                </div>
            </div>
        </MainLayout>
    );
}

export default TaskPage;
