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
