import styles from '../styles/Navbar.module.css';
import Logo from '../components/icons/Logo';
import MenuButton from "./MenuButton";

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.leftNav}>
                <MenuButton/>
                <Logo/>
                <span className={styles.logoText}>Morningstar</span>
            </div>
            <div className={styles.rightNav}>

            </div>
        </nav>
    );
};

export default Navbar;