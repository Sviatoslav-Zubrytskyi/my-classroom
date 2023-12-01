import React from 'react';
import styles from '../styles/Navbar.module.css';
import Logo from '../components/icons/logo'
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles["left-nav"]}>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" className=" NMm5M">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                </button>
                {/*<Logo constanta={10}/>*/}
                <img src="" alt="" className={styles.logo}/>
            </div>
            <div className={styles["right-nav"]}>

            </div>
        </nav>
    );
};

export default Navbar;