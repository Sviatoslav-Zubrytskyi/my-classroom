import React from 'react';
import styles from '../../styles/NotebookIcon.module.css';

const NotebookIcon = () => {
    return (
        <div className={styles.defaultIcon}>
            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                 className={styles.taskIcon}>
                <path
                    d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16z"></path>
            </svg>
        </div>
    );
};

export default NotebookIcon;