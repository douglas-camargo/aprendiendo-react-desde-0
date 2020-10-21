import React from "react"
import CourseCard from '../Molecules/CourseCard';
// import withLoader from "../HOC/withLoader";

const CourseGrid = ({courses}) => 

<div className="ed-grid m-grid-3">
{
  courses.map(c => 
  <CourseCard 
  key={c.id}
  id={c.id}
  tittle={c.titulo}
  image={c.image}
  price={c.price}
  profesor={c.profesor}
  />
  )}
</div>

export default CourseGrid