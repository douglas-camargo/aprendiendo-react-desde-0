import React, {Fragment} from 'react';
// import './App.css';
import './styles/styles.scss';
import Curso from './Curso';

const cursos = [
  {
    "titulo": "React desde 0",
    "image": "https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": 30,
    "profesor": "Douglas camargo"
  },

  {
    "titulo": "HTML desde 0",
    "image": "https://edteam-media.s3.amazonaws.com/blogs/smaller/03928ceb-64e7-4336-b18c-6f65a751de6e.jpg",
    "price": 50,
    "profesor": "Klyswer Oliva"
  },

  {
    "titulo": "CCS desde 0",
    "image": "https://edteam-media.s3.amazonaws.com/blogs/smaller/d388fad6-edb6-46e9-b0fe-e0d31851f3c5.jpg",
    "price": 40,
    "profesor": "Alvaro felipe"
  }

]

const App = () => 
<Fragment>

<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="Banner" src="https://www.recreoviral.com/wp-content/uploads/2019/03/Fondos-de-pantalla-estilo-Tumblr7.jpg" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Practicando react</p>
        <p> Practicando ando</p>
        <a href="#" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>


<div className="ed-grid m-grid-3">
{
  cursos.map(c => <Curso tittle={c.titulo} image={c.image}  price={c.price}  profesor={c.profesor} />)

}


{/* <Curso  */}
{/* 
    // tittle="curso de React desde cero compadre"
    // image= "https://ux.ed.team/img/profesor.jpg"
    // price=""
    // profesor="" */}
{/* /> */}


</div>

</Fragment>


export default App;
