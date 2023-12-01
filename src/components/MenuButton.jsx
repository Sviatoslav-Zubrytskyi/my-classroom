import React, {useState} from 'react';
import styles from '../styles/MenuButton.module.css';
import { useDispatch} from 'react-redux';
const MenuButton = ({sendDataToParent}) => {
    const dispatch = useDispatch();

    const updateSharedState = () => {
        dispatch({ type: 'UPDATE_SHARED_STATE', payload: isOpen});
    };
    const [isOpen, setIsOpen] = useState(true);
    const changeMenu = () => {
        setIsOpen(!isOpen);
        updateSharedState();
    }
    return (
        <button onClick={changeMenu} className={styles.button}>
            <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" className=" NMm5M">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
        </button>
    );
};

export default MenuButton;