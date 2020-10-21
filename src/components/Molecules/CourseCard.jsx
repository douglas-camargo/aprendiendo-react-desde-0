import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { addToCart, deleteFromCart } from '../../redux/actionCreators';
import {connect} from 'react-redux'

// const mayordeedad = edad => edad >= 18;
// const persona = {"nombre":"douglas", "apellido":"camargo", "edad":18}

const CourseCard= ({id, tittle, image, price, profesor, addCourseToCart, cart, deleteCourseFromCart}) =>

<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
  <Link to={`/cursos/${id}`}>
    <img src={image} alt={tittle} />
  </Link>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
        {tittle.toUpperCase()}
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src={image} alt="Foto del profesor" />
          </div>
        </div>
        <span className="small">{profesor}</span>
      </div>
    </div>
    <div className="s-main-center">
      { 
        cart.find(a => a === id) 
        ?<button className="button--ghost-alert button--tiny" 
        onClick={() => deleteCourseFromCart(id)}>
          Remover del carrito
        </button>
        :
        <button className="button--ghost-alert button--tiny" href="#"
          onClick={() => addCourseToCart(id)}
        >
          {`$ ${price} USD`}     
        </button>
      }
    </div>
  </div>
</article>


CourseCard.propTypes = {
    tittle: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}

CourseCard.defaultProps = {
  tittle: "no se encuentra el titulo",
    image: "no se encontro la imagen",
    price: "--",
    profesor: ""
}


const mapStateToProps = state => ({
  cart: state.cartReducer.cart
})

const mapDispatchToProps = dispatch => ({
  addCourseToCart(id) {
    dispatch(addToCart(id))
  },
  deleteCourseFromCart(id) {
    dispatch(deleteFromCart(id))
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)
