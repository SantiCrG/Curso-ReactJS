// siempre importar las bibliotecas
// cuando importemos el modulo "react" siempre hay que llamar el import igual
import React, { createContext } from "react";
// le decimos que queremos modificar el dom con react
import ReactDom from "react-dom/client";


// importamos el nombre de el componente y en que archivo se encuentra 
// luego de esto lo podemos usar en un render para que se visualize
import {Ejemplo, Tarjetas, Juegos, Botones} from "./React2";

// para importar por default ya que no esta exportando nada individualmente 
// esta exportando todo el modulo
// tambien podemos exportar otro individualmene del mismo archivo
import Ezio , {Heart} from "./React3";


// en el html hay un id llamado root entonces de ese id queremos que react monte nuestra aplicacion de este archivo

//Guardamos el valor en una constante y le decimos que desde el documento vamos a estar llamando un elemento con ID
//CON SU VALOR "root"

//const root = document.getElementById("root")

//Desde ReactDom vamos a estar utilizando su metodo llamado CreateRoot
// es mucho mas facil poner lo que estamos guardando en la anterior constante dentro de la tarea de create root 
//asi diciendole lo que queremos hacer desde el react doom guardandolo en una constante

// EL ELEMENTO ROOT > EL ELEMENTO RAIZ

 const root = ReactDom.createRoot(document.getElementById("root"))
 // con este root le estamos mandando un elemento a nuestra raiz tipo html para mostrar
//root.render(<h1>Hola Mundo</h1>)


//

// Nuestro componente le ponemos un nombre a nuestra funcion
function Saludar(){
    // en este caso retornamos un div con sus funciones adentro un h1 y un parrafo
    return <div>
  <h1>Hola este es  un componente</h1>
    <p>Componente En parrafo</p>
    </div> 
}



//De esta manera podemos renderizar nuestro componente
/*
En este caso el nos pedira un elemento padre el cual va leer los componentes
que tenga adentro ese elemento padre en este caso utilizamos el Div como elemento
padre
*/

root.render(<div>
    <Saludar></Saludar>
    <Saludar></Saludar>
    <Saludar></Saludar>
    </div>)


// Otro componente con condicionales

function Compe(){
    const santi = true
    
    if (santi){
        return <h1>Este es santi</h1>
    }else{
        return <h1>Este no es santi</h1>
    }

    //Para escribir esta condicional con una sola linea de codigo seria
    // El if es ?
    // el else es : 
    return <h1>{santi ? "Este es santi": "Este no es santi"}</h1>

}

root.render(
    <Compe/>
)


// componente con objetos

// creamos la funcion
function Object(){
    // creamos la constante con su objetos
    const users = {
        "user": "Santiago",
        "LastName": "Ceron Garcia"
    }
// retornamos el objeto en un h1 con llaves para que identifique que es codigo
// Ponemos un JSON donde de JSON queremos utilizar stringify asi convertimos un objeto de javascript en un string
    return <h1>{JSON.stringify(users)}</h1>
}

root.render(
    <Object/>
)

// Segunda opcion para mostrarlo mejor

function Objetos(){
    const Objeto = {
        Username: "Santi",
        Lastname: "Ceron"
    }
    // retornamos
        // desde la constante Objeto Quiero ver el Username o El Lastname
    return <div>
        <h1>{Objeto.Username}</h1>
        <p>{Objeto.Lastname}</p>
    </div>
}


root.render(
    <Objetos/>
)


// Como convertir un booleano en string

function Casados(){
    const married = true

    // returnamos dentro de un div el cual hace de padre y ponemos la constante para llamar el valor
    //seguido poner toString el cual nos ayudara a convertir el booleano en un string
    return (
    <div>
        <h1>{married.toString()}</h1>
    </div>)
}

root.render(
    <Casados/>
)



/// Funcion dentro de otra funcion


function Casadinis(){
    const casaditos = false

    function Suma(x, y){

        return x + y;
    }

    // retornamos dentro de un div el cual hace de padre y ponemos la constante para llamar el valor
    //seguido poner toString el cual nos ayudara a convertir el booleano en un string
    //

    // Podemos usar una funcion dentro de otra mostrando igualmente el valor de la otra funcion 
    // asi haciendo la suma de dos numeros 
    return (
    <div>
        <h1>{casaditos.toString()}</h1>
        <h1>{Suma(10, 10)}</h1>
    </div>
    );
}


// PROPS

// PARA PASAR PARAMETRO Y VISUALIZARLO EN LA CONSOLE
// De esta manera podemos imprimir el valor de una propiedad 


// acordemonos que las llaves es para identificar que es codigo


function Palabras({Name, User, Area, Sueldo, Direccion, Civil ,greet}){
    console.log(Name, User, Area, Sueldo, Direccion,Civil, greet)
    return <div>
        <h1>{Name}</h1>
        <p>Usuario: {User}</p>
        <h4>Estado Civil: {Civil ? "casado" : "soltero"}</h4>
        <p>Sueldo: 💵${Sueldo}</p>
        <li>Pais: {Direccion.Pais}</li>
        <li>Ciudad: {Direccion.Ciudad}</li>
        <li>Localidad: {Direccion.Localidad}</li>
        <li>Codigo Postal {Direccion.Cod}</li>
    </div>
}

// si no queremos utilizar etiquetas como divs o <h1> podemos utilizar este tipo de etiqueta
// esta etiqueta <> se llama fragment la cual nos brinda JSX
root.render(<>
{ /* <Palabras 
Name="Santiago Ceron"
User="Sceron"
Area="Analista"
Civil= {true}
Sueldo = {1780000}
Direccion = {{Pais:"Colombia", Ciudad:"Bogota", 
Localidad:"Suba", 
Cod:"11111"}}

greet={function() {
    alert("hello")
}}
/>

<Palabras  
// reutilizacion de codigo del otro componente solo cambiando los datos
Name={"Luis Martinez"}
User="Lmartinez"
Area="Proyectos"
Civil= {false}
Sueldo = {30000000}
Direccion = {{Pais:"Colombia", Ciudad:"Bogota", 
Localidad:"Suba", 
Cod:"232222"}}
/> */}

<Botones title="Comprar"/>
<Botones title="Ver Mas"/>
<Botones title="Tipo Texto"/>


</>)


//PARA COMENTAR EN JSX SE ENCIERRA LO QUE QUEREMOS COMENTAR EN LLAVES Y LUEGO SELECICONAMOS LO QUE QUEREMOS COMENTAR CON SHIFT + ALT + A