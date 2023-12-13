import React from 'react';
import styles from "./Course.module.css";
import {Link} from "react-router-dom";
import TripleDotsButton from "../Icons/tripleDotsButton/TripleDotsButton";
import styled from "styled-components";
import {useSelector} from "react-redux";

// Move styled components outside of the functional component
const CourseInfo = styled.div`
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  height: 6.25rem;
  border-right: 0.0625rem solid rgb(218, 220, 224);
  border-left: 0.0625rem solid rgb(218, 220, 224);
  border-top: 0.0625rem solid rgb(218, 220, 224);
  text-decoration: none;
  color: ${(props) => props.color};
  background: ${(props) => props.bg};
  background-size: cover;
  background-repeat: repeat;
  background-position: ${(props) => props.bgPosition};
`;

const Course = ({groupName, teacher, bg, bgPosition, color, id}) => {
    return (
        <div className={styles.course}>
            <CourseInfo color={color} bg={bg} bgPosition={bgPosition}>
                <div className={styles.topDiv}>
                    <Link to={`/course/${id}`} className={styles.link}></Link>
                    <Link to={`/course/${id}`} className={styles.courseName}>{groupName}</Link>
                    <TripleDotsButton color="white"/>
                </div>
                <div>
                    <Link to={{}} className={styles.courseTeacher}>{teacher}</Link>
                </div>
            </CourseInfo>
            <div className={styles.emptySpace}></div>
            <div className={styles.additionalInfo}>
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" className={styles.folderIcon}>
                    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Course;
