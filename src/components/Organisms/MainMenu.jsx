import React from "react"
import { NavLink } from 'react-router-dom';
import CartCounter from '../Atoms/CartCounter'


const MainMenu = () =>

<header className="ed-header s-bg-grey s-py-2" >
  <div className="ed-grid lg-grid-5">
    <div className="s-cross-center s-main-center lg-main-start">
        <img className="logo" src="https://ed.team/static/images/logo.svg" />
    </div>
    <nav className="nav lg-cols-4 s-cross-center ed-grid full">
      <ul className="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
        <li className="lg-mr-3">
        <NavLink exact activeClassName="activo" className="link s-column s-cross-center"to="/">
            <span>Inicio</span>
          </NavLink>
        </li>
        
        <li className="lg-mr-3">
        <NavLink activeClassName="activo" className="link s-column s-cross-center"to="/Formulario">
            <span>Formulario</span>
          </NavLink>
        </li>
        
        <li className="lg-mr-3">
          <NavLink activeClassName="activo" class="link s-column s-cross-center"to="/Cursos">
            <span>Cursos</span>
          </NavLink>
        </li>
        
        <li>
        <NavLink activeClassName="activo" className=" s-mr-4 link s-column s-cross-center"to="/usuarios">
            <span>usuarios</span>
          </NavLink>
        </li>
        <CartCounter />
      </ul>
    </nav>
  </div>
</header>




export default MainMenu

