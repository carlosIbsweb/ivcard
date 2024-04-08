import { handleStatus } from "./modules/promise-helpers.js"
import { modelos, navegacaoDados } from "./modules/modelos.js";
import { ivcardIcones } from "./modules/icones.js";
import CardsTemplate from "./components/cardsTemplate.js";


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


/*******
 *GERANDO O TEMPLATE COM BASE NOS DADOS DO USUÁRIO
 ********/

fetch('http://localhost/ivcard/usuario.php')
        .then(handleStatus)
        .then(dados => {
            new Vue({
                el: "#ivcards",
                data: {
                    nome: dados.nome,
                    imagem: dados.imagem,
                    icones: dados.icones
                },
                methods: {
                    ivcardIcones(icone) {
                        return ivcardIcones[icone]
                    },
                    updateNome(v) {
                        this.nome = event.target.innerText
                    },
                    gerar() {
                        let gerarDados = {
                            nome: this.nome,
                            imagem: this.imagem,
                            icones: this.icones
                        }

                        console.log(JSON.stringify(gerarDados))
                    }
                },
                template: CardsTemplate,
                watch: {
                    nome() {this.gerar()}
                },
                mounted() {
                    this.gerar();
                }
            })
        })
        .catch(err => console.log);