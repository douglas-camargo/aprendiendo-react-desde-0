import React, {Fragment} from 'react';
// import './App.css';
import './styles/styles.scss';
import Curso from './Curso';



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
<Curso />
<Curso />
<Curso />
<Curso />
<Curso />
<Curso />
<Curso />
<Curso />
<Curso />

</div>

</Fragment>


export default App;
