import React, {Fragment} from 'react';
import '../styles/styles.scss';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import store from '../redux/store'
import { getCourseList } from '../redux/actionCreators';

store.dispatch(getCourseList())

const App = () => 

<Provider store={store}>
  <AppRoutes />
</Provider>

{/* <Fragment>  */}

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

// </Fragment>




export default App;
