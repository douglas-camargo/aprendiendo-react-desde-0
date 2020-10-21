import {ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST} from "./actions"

const addToCart = id => ({
    type:ADD_TO_CART,
    id
})

const deleteFromCart = id => ({
    type:DELETE_FROM_CART,
    id
})

const getCourseList = () => dispatch => {
    fetch('http://my-json-server.typicode.com/douglas-camargo/json-db/cursos', {method: 'get'})
    .then(response => response.json())
    .then(response2 => {
        return dispatch({
            type:GET_COURSE_LIST,
            courses:response2
        })
   })
}


export {addToCart, deleteFromCart, getCourseList}