var cont=0;
const fetchPokemon = () =>{
    const pokenameinput= document.getElementById("Pokename");
    
    
    let pokename= pokenameinput.value;
    
    pokename= pokename.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokename}`;
    fetch(url).then((res)=>{
        if(res.status != "200"){
            
            pokeimg("https://tpng.net/download/200x200_782-7824408_porygon-png.png")
            
        }
        else{
            return res.json();
        }
        
    }).then((data) => {
            if(data){
                
                let pokeimage = data.sprites.front_default;
                let pokeNombre= data.species.name;
                let poketipo= data.types;
                let estadisticas= data.stats;
                let movimi= data.moves;
                let Shiny= data.sprites.front_shiny;
                
                poke_nombre(pokeNombre);
                poke_typo(poketipo);
                estadisticas1(estadisticas);
                movimiento(movimi);
                
                if(cont==1){
                    Shinies(Shiny);
                    cont =0;
                }
                else {
                    pokeimg(pokeimage);
                }
                
                
            }
        })
    
}

const movimiento = (let) =>{
    for(let i=0; i<4; i++){
        let movimiento = document.getElementById("movimiento"+i);
        movimiento.innerHTML=let[i].move.name;
    }
}

const estadisticas1 = (let) =>{
    
    for(let i=0; i<6; i++){
        let estadistica = document.getElementById("estadistica"+i);
        
        estadistica.innerHTML=let[i].base_stat;
    }
}


const poke_typo = (let) =>{
    if(let.length==1){
        const poketypo = document.getElementById("Poke_tipo0");
        poketypo.innerHTML=let[0].type.name;
    }
    else{
        
        const poketypo = document.getElementById("Poke_tipo0");
        poketypo.innerHTML=let[0].type.name + " / " + let[1].type.name;
    }

}

const poke_nombre = (let) =>{
    
    const pokeNombre = document.getElementById("Nombre_oficial");
    pokeNombre.innerHTML=let;
}

const pokeimg =(url) =>{
    const pokeima = document.getElementById("Pokeimg");
    pokeima.src=url;
    
    
}

const Shinies = (url) =>{
    const Shiniee = document.getElementById("Pokeimg");
    Shiniee.src=url;
}

function Sacarlo(){
    cont ++;
    fetchPokemon();
}