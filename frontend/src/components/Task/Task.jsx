import styles from "./Task.module.css";

import {Link} from "react-router-dom";
import TripleDotsButton from "../Icons/tripleDotsButton/TripleDotsButton";
import BookIcon from "../Icons/coursePageIcons/BookIcon";
import NotebookIcon from "../Icons/coursePageIcons/NotebookIcon";
import axios from "axios";

const Task = ({task, courseId, updateTaskList}) => {
    // const sharedState = useSelector((state) => state.sharedState);
    // const [rerenderFlag, setRerenderFlag] = useState(false);
    const deleteTask = () => {
        axios.delete(`http://localhost:5050/api/tasks/${courseId}/${task._id}`).then(response => {
            console.log(`task was deleted: ${response.data}`);
            updateTaskList();
            // setRerenderFlag(true);
        }).catch(error => {
            console.error(error);
        })
    }
    return (
            <div className={`${styles.task}`}>
                <Link to={"/task"} className={styles.taskLink}></Link>
                <div className={styles.taskContainer}>
                    {
                         (task.icon === "BookIcon") ? <BookIcon/> :
                        <NotebookIcon/>
                    }
                    <div className={styles.taskContent}>
                        <p className={styles.taskText}>{task.text}</p>
                        <p className={styles.taskDate}>{task.date}</p>
                    </div>
                </div>
                <div className={styles.distance}></div>
                <TripleDotsButton color="gray" functionCall={() => deleteTask()}/>
            </div>
    );
};

export default Task;
