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
