import React, {useState, Component} from "react"
import { useEffect } from "react"
import useCourse from "../CustomHooks/useCourse";

const Course = ({match}) => {
    const [comment, setComment] = useState("sin comentarios")
    const course = useCourse(match.params.id)

const myComment = e => {
  setComment(e.target.value)
}

return(
  course ?(
    <>
    <div className="ed-grid m-grid-3"> 
        <h1 className="m-cols-3" >{course.titulo }</h1>
        <img className="m-cols-1" src={course.image} alt={course.titulo}/>   
        <p className="m-cols-2">Profesor:{course.profesor}</p> 
        </div>
    <div >
      <h2>escribe tu comentario</h2>
      <input type="text" placeholder="escribe ..." onChange={myComment.bind(this)}/>
  <p>{comment}</p>
    </div>
    </>
    )
    
    : (
    <div className= "ed-grid">
        <h1>El curso no existe</h1>
    </div>
    )
    )
}
    export default Course



// const changeTitle = (text) => {
//   setState({
//     ...state,
//     titulo:text
//   })
// }

{/* <button onClick={changeTitle.bind(this, "Html desde cero") } >Cambiar titulo</button>    */}




    // const cursos = [
//     {
//       "id":1,
//       "titulo": "React desde 0",
//       "image": "https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
//       "price": 100,
//       "profesor": "Douglas camargo"
//     },
  
//     {
//       "id":2,
//       "titulo": "HTML desde 0",
//       "image": "https://edteam-media.s3.amazonaws.com/blogs/smaller/03928ceb-64e7-4336-b18c-6f65a751de6e.jpg",
//       "price": 200,
//       "profesor": "Klyswer Oliva"
//     },
  
//     {
//       "id":3,
//       "titulo": "CCS desde 0",
//       "image": "https://edteam-media.s3.amazonaws.com/blogs/smaller/d388fad6-edb6-46e9-b0fe-e0d31851f3c5.jpg",
//       "price": 300,
//       "profesor": "Alvaro felipe"
//     }
//   ]
  

    //const CursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]