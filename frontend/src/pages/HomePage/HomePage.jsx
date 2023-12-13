import MainLayout from "../../layouts/MainLayout";
import styles from './HomePage.module.css';
import Course from "../../components/Course/Course";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function HomePage() {
    const courses = useSelector(state => state.courses);
    // const [items, setItems] = useState('');
    // const [newItem, setNewItem] = useState('some info');
    // useEffect(() => {
    //     // Fetch data from the server on component mount
    //     axios.get('http://localhost:5000/api/items').then((response) => {
    //         setItems(response.data);
    //     });
    // }, []);
    //
    // const handleAddItem = () => {
    //     // Add a new item to the database
    //     axios.post('http://localhost:5000/api/items', { name: newItem }).then((response) => {
    //         setItems([...items, response.data]);
    //         setNewItem('');
    //     });
    // };
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
