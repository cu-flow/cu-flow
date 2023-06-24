import React, { useEffect, useState } from 'react';import CourseSchedule from '../../components/courseSchedule/CourseSchedule'
import Header from '../../components/header/Header'
import CourseHeader from '../../components/courseHeader/CourseHeader'


export default function CoursePage() {
  const [courses, setCourses] = useState([{
    faculty: "COMP",
    course_code: "1805",
    section: "A",
    title: "Discrete Structures I",
    description: "Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory. Material is illustrated through examples from computing.",
    availability: "OPEN",
    time: "11:35 - 12:25",
    dates: ["M", "W"],
    location: "Nicol Building",
    instructor: "Alexa Sharp",
    prereqs: "Prereqs: Grade 12 Math: Advanced Functions or Comp 1004 and Comp 1005",
  }])
  useEffect(() => {
    console.log(courses)
  },[courses]) 
  const handleCoursesChange = (newCourses) => {
    setCourses(newCourses);
    }
  const course = [{
    faculty: "COMP",
    course_code: "1805",
    section: "A",
    title: "Discrete Structures I",
    description: "Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory. Material is illustrated through examples from computing.",
    availability: "OPEN",
    time: "11:35 - 12:25",
    dates: ["M", "W"],
    location: "Nicol Building",
    instructor: "Alexa Sharp",
    prereqs: "Prereqs: Grade 12 Math: Advanced Functions or Comp 1004 and Comp 1005",
  }]
  return (
    <>
    <Header handleCoursesChange = {handleCoursesChange}/>
    <CourseHeader course={courses}/>
    <div class = "mx-1">
      <CourseSchedule course = {courses}/>
    </div>
   </>
  )
}
