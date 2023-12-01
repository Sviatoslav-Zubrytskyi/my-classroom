import React from 'react';
import styles from '../styles/Sidebar.module.css'
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.items}>
                <Link to={"/home"} className={styles.item}>
                        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" className=" NMm5M">
                            <path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z"></path>
                        </svg>
                        <span>Home</span>
                </Link>
                <Link to={"/course"} className={styles.item}>
                        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" className=" NMm5M">
                            <path
                                d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
                        </svg>
                        <span>Course</span>
                </Link>
            </div>

        </aside>
    );
};

export default Sidebar;