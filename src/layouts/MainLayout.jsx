import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from './MainLayout.module.css';

const MainLayout = ({children}) => {
    return (
        <div className={styles.main}>
            <Navbar/>
            <div className={styles.content}>
                    <Sidebar primary="primary"/>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;