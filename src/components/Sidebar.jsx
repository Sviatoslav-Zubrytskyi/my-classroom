import styles from '../styles/Sidebar.module.css'
import {Link, useLocation} from "react-router-dom";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const Aside = styled.aside`
  min-width: ${props => (props.sidebarIsOpen ? '4.75rem' : '18.75rem')};
  @media (max-width: 1248px) {
    position: absolute;
  }
  @media (max-width: 600px) {
    position: absolute;
    width: ${props => (props.sidebarIsOpen ? '0' : '18.75rem')};
    min-width: ${props => (props.sidebarIsOpen ? '0' : '18.75rem')};
    overflow: hidden;
  }
`;
const Sidebar = () => {
    const sharedState = useSelector((state) => state.sharedState);
    const currentPage = useLocation().pathname;
    const isHomeActive = currentPage === "/home" || currentPage === "/";
    const isCourseActive = currentPage === "/course";
    return (
        <Aside sidebarIsOpen={sharedState} className={styles.sidebar}>
            <div className={styles.items}>
                <Link to="/home" className={`${styles.item} ${isHomeActive ? styles.focus : ''}`}>
                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z"></path>
                    </svg>
                    {!sharedState && <span className={styles.text}>Home</span>}
                </Link>
                <Link to="/course" className={`${styles.item} ${isCourseActive ? styles.focus : ''}`}>
                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" className={styles.courseIcon}>
                        <path
                            d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
                    </svg>
                    {!sharedState && <span className={styles.text}>Course</span>}
                </Link>
            </div>

        </Aside>
    );
};

export default Sidebar;