// este es un nuevo componente el cual vamos a querer exportar a otro archivo como lo es el principal index
import PropTypes from "prop-types"

// ES IMPORTANTE QUE LAS FUNCIONES EMPIEZEN CON LA LETRA MAYUSCULA

// exportamos nuestro componente
export function Ejemplo(){

    return <div>
  <h1>Hola este es  un componente por aparte</h1>
    <p>Componente En parrafo por aparte</p>
    </div> 
}

// otro componente con if  para exportar
export function Tarjetas(){
    const tarjet = "Credito"
    if(tarjet == "Debito"){
        return"esto es debito"
    }else if(tarjet == "Credito"){
        return " Esto es credito "
    }else{
        return "Ingrese la tarjeta correcta"
    }
}


export function Juegos(){

    const games = "Minecraft"
    switch(games){
        case "Minecraft":
            return "Este juego es Minecraft"
        break;
        case "Cod":
            return "Este juego es Cod"
        break;
    }

}




// DEFAULT PROPS

export function Botones({title}){
    console.log(title)
    return <button>
        {title}
    </button>

}

// De la funcion botones en con proptypes quiero que la propiedad sea solo un string
//le estamos diciendo tambien que es requerido
Botones.propTypes = {
    title: PropTypes.string
}