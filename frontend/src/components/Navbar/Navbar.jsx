import styles from './Navbar.module.css';
import Logo from '../Icons/Logo/Logo';
import MenuButton from "../MenuButton/MenuButton";
import {Link} from "react-router-dom";
import profileImage from '../../images/Sviatoslav.jpg'
import axios from "axios";
import bgJS from "../../images/JSbg.png";

const Navbar = () => {
    const handleAddItem = () => {
        // Add a new item to the database
        axios.post('http://localhost:5050/api/courses',
            {
                "teacher": "Viktor",
                "groupName": "TEST TEST TEST",
                "bg": `url(${bgJS})`,
                "bgPosition": "center center",
                "color": "black",
                "tasks": [
                    {
                        "text": "fix my BUGS, please UwU",
                        "date": "Dec 4",
                        "icon": "BookIcon"
                    },
                    {
                        "text": "fix my BUGS, please UwU",
                        "date": "Dec 4",
                        "icon": "BookIcon"
                    },
                    {
                        "text": "fix my BUGS, please UwU",
                        "date": "Dec 4",
                        "icon": "BookIcon"
                    },
                    {
                        "text": "fix my BUGS, please UwU",
                        "date": "Dec 4",
                        "icon": "BookIcon"
                    },
                ]
            }).then((response) => {
            // setItems([...items, response.data]);
            // setNewItem("")
        })
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftNav}>
                <MenuButton/>
                <Link to={"/"} className={styles.logoLink}>
                    <Logo/>
                    <span className={styles.logoText}>Morningstar</span>
                </Link>
            </div>
            <div className={styles.rightNav}>
                <span className={styles.plusIcon}>
                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" className=" NMm5M"><path
                        d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path></svg>
                </span>
                <div className={styles.profileIcon}>
                    <img src={profileImage} alt="profileIcon" className={styles.profileImage}/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;