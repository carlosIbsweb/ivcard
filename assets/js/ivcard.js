import { handleStatus } from "./modules/promise-helpers.js"
import { modelos, navegacaoDados } from "./modules/modelos.js";
import { ivcardIcones } from "./modules/icones.js";


let nav = document
.querySelector('.nav-ivcard')
.querySelector('a')

nav.addEventListener('click',function(event){
    
    if(event.target.parentNode.classList.contains('active')){
        return false
    }
        event.target.parentNode.classList.toggle('active') 
        fetch('http://localhost/ivcard/modelos.php')
        .then(handleStatus)
        .then(modelos)
        .then(navegacaoDados)
        .catch(err => console.log);
})


fetch('http://localhost/ivcard/usuario.php')
        .then(handleStatus)
        .then(dados => {
            let ivIcones = document.querySelector('.ivcard-icones')
            for(let dado of dados.icones){
                ivIcones.innerHTML += `<span>${ivcardIcones[dado]}</span>`
            }
        })
        .catch(err => console.log);