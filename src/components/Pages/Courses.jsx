import React from "react"
import CourseGrid from "../Organisms/CourseGrid";
import { connect } from "react-redux";

const Courses = ({courses}) => <CourseGrid courses={courses}/>

// componentDidMount() {
//   fetch('http://my-json-server.typicode.com/douglas-camargo/json-db/cursos', {method: 'get'})
//   .then(response => response.json())
//   .then(response2 => {
//       this.setState({
//           courses:response2
//       })
//   })
// }

const mapStateToProps = state => ({
  courses: state.coursesReducer.courses
})

    export default connect(mapStateToProps, {}) (Courses)

