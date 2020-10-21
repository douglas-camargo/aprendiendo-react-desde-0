import React from 'react'

class Form extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            nombre:"",
            correo:"",
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        // this.cambiarFecha = this.cambiarFecha.bind(this)

    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
    })}

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
    })}

    // cambiarFecha() {
    //     this.setState({
    //         fecha: new date()
    //     })
    // }

render() {
    return (
        <div className="ed-grid">
            <h1>Formulario {this.props.name}</h1>
            <h4> {Math.ceil(this.state.fecha/1000)} </h4>
            <form>
            <div className="ed-grid m-grid-2">
                <div className="form__item">
                    <label>nombre completo</label>
                    <input type="text" onChange={ this.cambiarNombre } />
                </div>
                <div className="form__item">                 
                    <label>correo</label>
                    <input type="email" onChange={ this.cambiarCorreo} />
                </div>
                <div className="form__item">
                    <input className="button full" type="submit" value="enviar"></input>
                </div>

            </div>
            </form>
            
            <div>
            <h2>{`hola ${this.state.nombre}`}</h2>
            <span>{`Tu correo es: ${this.state.correo}`}</span>

            </div>
        </div>
    )
}
}

export default Form