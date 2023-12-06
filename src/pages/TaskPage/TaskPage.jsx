import MainLayout from "../../layouts/MainLayout";
import React from "react";
import styles from './TaskPage.module.css';
import NotebookIcon from "../../components/Icons/coursePageIcons/NotebookIcon";
import TripleDotsButton from "../../components/Icons/tripleDotsButton/TripleDotsButton";

function TaskPage() {
    return (
        <MainLayout>
            <div className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.iconContainer}>
                        <NotebookIcon/>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.taskInfo}>
                            <div className={styles.titleContainer}>
                                <span className={styles.title}>L's theme A</span>
                                <TripleDotsButton color="rgb(25,103,210)"/>
                            </div>
                            <div className={styles.additionalInfo}>
                                <span className={styles.author}>author</span>
                                <span className={styles.dot}>•</span>
                                <span className={styles.date}>date</span>
                            </div>
                        </div>
                        <div className={styles.mainInfo}>
                            <span className={styles.mainText}>Listen to the L's theme A.</span>
                            <iframe
                                width="614"
                                height="345"
                                src="https://www.youtube.com/embed/qR6dzwQahOM"
                                title="W3Schools Free Online Web Tutorials"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={styles.YTiframe}
                            ></iframe>
                            {/*TODO: file*/}
                        </div>
                        <div className={`${styles.commentsContainer} ${styles.classComments}`}>
                            <div className={styles.commentsSign}>
                                {/*TODO: users icon component*/}
                                <div className={styles.usersIcon}>
                                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                                         className=" NMm5M">
                                        <path
                                            d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"></path>
                                    </svg>
                                </div>
                                <span className={styles.commentsSpan}>Class comments</span>
                            </div>
                            <input type="text" className={styles.addComment} placeholder="Add a class comment..."/>
                        </div>
                    </div>

                </div>
                <div className={styles.uploadContent}>
                    <div className={styles.attachContainer}>
                        <div className={styles.topDiv}>
                            <span className={styles.yourWork}>Your work</span>
                            <span className={styles.deadline}>Assigned</span>
                        </div>
                        <div className={styles.sendTask}>
                            <div className={styles.addFileContainer}>
                                {/*TODO: + icon*/}
                                <span className={styles.addFileText}> Add file</span>
                            </div>
                            <div className={styles.markAsDoneContainer}>
                                <span className={styles.markAsDoneText}>Mark as done</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.commentsContainer}>
                        <div className={styles.commentsSign}>
                            {/*TODO: users icon component*/}
                            <div className={styles.usersIcon}>
                                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                                     className=" NMm5M">
                                    <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                                </svg>
                            </div>
                            <span className={styles.commentsSpan}>Class comments</span>
                        </div>
                        <input type="text" className={styles.addComment} placeholder="Add a class comment..."/>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default TaskPage;
