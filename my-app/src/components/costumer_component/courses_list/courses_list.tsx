import React, { useEffect, useState } from "react";
import db from '../../../api/db.json'

import { Course } from "../../../types/course.type";
import CourseCard from "../course_card/course_card";

import { Container } from "react-bootstrap";

function CourseList () {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");
        const userParse = usuario ? JSON.parse(usuario) : null;
        
        const fetchData = () => {
            try {
                const data = db.cursos;

                const filteredData = data.filter((course: Course) => {
                    return course.funcionario_id === userParse.id
                })

                setCourses(filteredData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);


    return (
        <Container className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            {courses.map((course: Course) => (
                <CourseCard key={course.id} {...course} />
            ))}
        </Container>
    );
}

export default CourseList;