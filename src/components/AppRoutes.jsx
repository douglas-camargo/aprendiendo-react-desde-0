import React from 'react'
import Form from './Pages/Form'
import Courses from './Pages/Courses'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Course from './Pages/Course'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/Historial'
import Home from './Pages/Home'
import Users from './Pages/Users'

const AppRoutes = () => 
    <> 
 <Router>
  <MainMenu />
 <Switch>
  <Route path="/" exact component={Home} />
  <Route path="/cursos" exact component={Courses} />
  <Route path="/cursos/:id" exact component={Course} />
  <Route path="/historial" component={History} />
  <Route path="/historial:valor" component={History} />
  <Route path="/usuarios" component={Users} />
  <Route path="/formulario" exact component={ () => <Form name="pagina de contacto" /> } />
  <Route component={ () => 
    <div>
      <h1>Error 404</h1>
      <span>Pagina no encontrado</span>
    </div>
  } />
  </Switch>
</Router> 

{/* < Banner /> */}
{/* < Formulario name="de Douglas"/> */}
{/* < CourseGrid /> */}



 {/* imprimiendo el array  */}
{/* {
  cursos.map(c => <Curso tittle={c.titulo} image={c.image}  price={c.price}  profesor={c.profesor} />)

} */}


{/* <Curso  */}
{/* 
    // tittle="curso de React desde cero compadre"
    // image= "https://ux.ed.team/img/profesor.jpg"
    // price=""
    // profesor="" */}
{/* /> */}

</>


export default AppRoutes