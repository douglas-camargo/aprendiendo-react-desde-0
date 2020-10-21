import {useState, useEffect} from 'react'

const useCourse = id =>{

    const [course, setCourse] = useState({})

    useEffect(() =>{
        fetch(`http://my-json-server.typicode.com/douglas-camargo/json-db/cursos/${id}`, {method: 'get'})
        .then(response => response.json())
        .then(response2 => {
            setCourse(response2)
        })
      }, [])

    return course
}


export default useCourse