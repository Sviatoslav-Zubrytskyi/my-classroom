import styles from '../styles/Navbar.module.css';
import Logo from '../components/icons/Logo';
import MenuButton from "./MenuButton";
import {Link} from "react-router-dom";

const Navbar = () => {

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

            </div>
        </nav>
    );
};

export default Navbar;