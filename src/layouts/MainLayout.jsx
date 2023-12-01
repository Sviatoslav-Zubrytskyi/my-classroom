import React from 'react';
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import styles from '../MainLayout.module.css';

const MainLayout = ({children}) => {
    return (
        <div className={styles.main}>
            <Topbar/>
            <div className={styles.content}>
                <Sidebar/>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;