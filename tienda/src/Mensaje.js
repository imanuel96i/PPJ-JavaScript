const Mensaje = (props) => {
    const retorno = <h1 style={{ color: props.color }}> {props.message} </h1> 
    return retorno
}

export default Mensaje