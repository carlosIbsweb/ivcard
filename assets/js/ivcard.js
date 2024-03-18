import { handleStatus } from "./modules/promise-helpers.js"
import { modelos, navegacaoDados } from "./modules/modelos.js";


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