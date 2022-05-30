import titulos from "./Saludos.module.css";

const Saludos = () =>{
    const saludar =["Hola", "Hola", "Hola", "Mundo"]
    return (
        saludar.map((saludo, id) => <h1 key={id} className={titulos.azul}>{saludo}</h1>)
    )
}

export default Saludos;