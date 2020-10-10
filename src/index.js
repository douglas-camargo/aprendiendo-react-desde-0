import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';


// forma para hacer un hola mundo sin jsx
// const root = document.getElementById("root")
// const elemento = React.createElement("h1", {className: "saludo"}, "hola mundo")
// ReactDOM.render(elemento,root)

//forma de hacer hola mundo con jsx
// const root = document.getElementById("root")
// ReactDOM.render(<h1 className="saludos">hola mundo</h1>,root)

//forma de hacer hola mundo con componentes jsx
const root = document.getElementById("root")
ReactDOM.render(<App />,root)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


