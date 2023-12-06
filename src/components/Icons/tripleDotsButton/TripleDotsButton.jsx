import React from 'react';
import styles from "./TripleDotsButton.module.css";

const TripleDotsButton = ({color})=> {
    return (
        <button  className={styles.but}>
            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                 className={styles.tripleDotsIcon}
                 fill={color}>
                <path
                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
        </button>
    );
};

export default TripleDotsButton;