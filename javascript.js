let inicio = document.getElementById("inicio")
let seleccion= document.getElementById("seleccion")
function empezar(){
    
    inicio.style.display = "none"
    seleccion.style.display= "flex"
}

class Player {
    constructor(name, life, imagen){
    this.name = name;
    this.life = life;
    this.imagen = imagen;
}

};

let j1 = new Player('Incineroar', 100, "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0727_000_mf_n_00000000_f_n.png") // personajes1
let j2 = new Player('Pikachu', 100, "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0025_001_mo_n_00000000_f_n.png") //personajes2
let j3 = new Player('mewtwo', 100, "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0150_000_uk_n_00000000_f_n.png")//personajes3
let j4 = new Player('Greninja', 100, "https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0658_000_mf_n_00000000_f_n.png")//personaje4

class Jugador {

    constructor(player) {
        this.personaje = player

    }
  
}
let jugador1 = new Jugador()
console.log(jugador1) // jugador1.personaje = unfenid
let jugador2 = new Jugador()
console.log(jugador2) // jugador2.personaje = unfenid


const seleccionarJugador = (player) => {


    if (jugador1.personaje == undefined || jugador2.personaje == undefined) {


        switch (player) {


            case 'incineroar'://personaje1
                if (jugador1.personaje == undefined) {

                    jugador1.personaje = j1;
                    console.log(jugador1.personaje)

                } else if (jugador2.personaje == undefined && jugador1.personaje !== j1) {

                    jugador2.personaje = j1;
                   console.log(jugador2.personaje)
                    
                    escenarioLucha()
                }
                break
            case 'pikachu'://personaje2
                if (jugador1.personaje == undefined) {

                    jugador1.personaje = j2;
                    console.log(jugador1.personaje)

                } else if (jugador2.personaje == undefined && jugador1.personaje !== j2) {
                    jugador2.personaje = j2;
                    console.log(jugador2.personaje)
                    escenarioLucha()
                }
                break

            case 'mewtwo'://personaje3
                if (jugador1.personaje == undefined) {

                    jugador1.personaje = j3;
                    console.log(jugador1.personaje)

                } else if (jugador2.personaje == undefined && jugador1.personaje !== j3) {
                    
                    jugador2.personaje = j3;
                    console.log(jugador2.personaje)
                    
                    escenarioLucha()
                }
                break
            case 'greninja'://personaje4
                if (jugador1.personaje == undefined) {

                    jugador1.personaje = j4;
                    console.log(jugador1.personaje)

                } else if (jugador2.personaje == undefined && jugador1.personaje !== j4) {

                    jugador2.personaje = j4;
                    console.log(jugador2.personaje)
                    
                    escenarioLucha()
                }
                break
       
            }
           
      } 
}

let nodoIma = document.getElementById("juga1")
let nodoIma2 = document.getElementById("juga2")

console.log(nodoIma,nodoIma2)

function escenarioLucha(){
    
    seleccion.style.display= "none"
    pelea.style.display= "flex"
    
    
    nodoIma.setAttribute("src",jugador1.personaje.imagen)
    nodoIma2.setAttribute("src",jugador2.personaje.imagen)
    
    // innerHTML = jugador1.personaje.imagen
    // innerHTML = jugador2.personaje.imagen

}

let vidajuga1 = document.getElementById("vidapj1")
let vidajuga2 = document.getElementById("vidapj2")




// let nodo.vida.jugador1= (parrafo=div>parrafo) // barra de vida del jugador1 
// let nodo.vida.jugador2=(parrafo=div>parrafo) // barra de vida del jugador 2 


let restavida = (vidarestar) => (vidarestar) - 10

let nodofinal = document.getElementById("ganador")
let nodofinale = document.getElementById("fotofinal")

function atacar (personaje){
    
    switch (personaje) {
        case 'jugador1':
            

            
            console.log(jugador1.personaje.life)
            
            jugador2.personaje.life = restavida(jugador2.personaje.life)
            vidajuga2.innerHTML = jugador2.personaje.life
            if (jugador2.personaje.life == 0) {
                ganador(jugador1)
                nodofinal.setAttribute("src",jugador1.personaje.imagen)
            }
            else {
                console.log("sigue luchando")
            }

        break;
        case 'jugador2':
            
            jugador1.personaje.life = restavida(jugador1.personaje.life)
            vidajuga1.innerHTML = jugador1.personaje.life
            
            if (jugador1.personaje.life == 0) {
                ganador(jugador2)
                nodofinal.setAttribute("src",jugador2.personaje.imagen)
            }
            else {
                console.log("sigue luchando")
            }
                
        break;
    }
}

function ganador (estepersonaje) {
    pelea.style.display= "none"
    fotofinal.style.display= "flex"
    nodofinal.setAttribute("src",estepersonaje)
}

/// funciones tanto con flecha como sin flecha