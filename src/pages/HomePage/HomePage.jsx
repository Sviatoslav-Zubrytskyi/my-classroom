import MainLayout from "../../layouts/MainLayout";
import styles from './HomePage.module.css';
import Course from "../../components/Course/Course";
import {useSelector} from "react-redux";

function HomePage() {
    const courses = useSelector(state => state.courses)
    return (
        <MainLayout>
            <div className={styles.courses}>
                {courses.map((course) => {
                    return (
                        <Course
                            id={course.id}
                            teacher={course.teacher}
                            groupName={course.groupName}
                            bg={course.bg}
                            bgPosition={course.bgPosition}
                            color={course.color}
                        />
                    )
                })}
            </div>
        </MainLayout>
    );
}

export default HomePage;
