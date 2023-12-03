import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from '../styles/MainLayout.module.css';

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