import { handleStatus, navegacaoType, removerObjetoChave, inicializarDropdown } from "./modules/promise-helpers.js"
import { carregarDados,modelos, navegacaoDados } from "./modules/modelos.js";
import { ivcardIcones } from "./modules/icones.js";
import CardsTemplate from "./components/cardsTemplate.js";
import {NavTemplate} from "./components/navTemplate.js";



/*******
 *GERANDO O TEMPLATE COM BASE NOS DADOS DO USUÁRIO
 ********/
fetch('../ivcard/usuario.php')
        .then(handleStatus)
        .then(usuario => {
            new Vue({
                el: "#iv-card",
                data: {
                    user: {
                        templateTop: usuario.templateTop,
                        icones: usuario.icones,
                    },
                    navegacao: [],
                    rangeValue: 0,
                    dadosNavegacao: `<span @click="bora">nadassssssssss</span>`
                },
                methods: {
                    ivcardIcones(icone) {
                        return ivcardIcones[icone]
                    },
                    updateNome(v) {
                        this.user.nome = event.target.innerText
                    },
                    gerar() {
                        let gerarDados = {
                            nome: this.user.nome,
                            imagem: this.user.imagem,
                            icones: this.user.icones
                        }

                        console.log(JSON.stringify(gerarDados))
                    },
                    //Quando eu clico em um menu de navegação
                    Navegacao(dado,event) {
                        if(!event.target.parentNode.classList.contains('active')){
                            event.target.parentNode.classList.add('active')
                        }else{
                            return false;
                        }
                        fetch('http://localhost/ivcard/navegacao.php')
                        .then(handleStatus)
                        .then(dados => {
                            this.navegacao = navegacaoType(dados,dado)
                        })
                        .then(navegacaoDados)
                        .catch(err => console.log);
                    },
                    AdicionarIcone(icone) {
                        /*
                        *Verificar se já está incluso
                        */
                        const estaPresente = this.user.icones.some(objeto => objeto.icone === icone.icone);
                        if(!estaPresente && this.user.icones.length < 6){
                            this.user.icones.push(icone)
                        }
                        
                        setTimeout(inicializarDropdown,200)
                    },
                    RemoverIcone(icone) {
                        removerObjetoChave(icone,this.user.icones,'icone')
                    },
                    RemoverItem(item) {
                        removerObjetoChave(item,this.user.templateTop,'title')
                    }
                },
                
                template: `
                    <div id="iv-card">
                        ${NavTemplate}
                        ${CardsTemplate}
                    </div>
                    `,
                watch: {
                    'user.nome': {handler() {this.gerar()}},
                },
                mounted() {
                    this.gerar();
                    /**
                     * Inicilialiar o dropDown
                     */
                    setTimeout(inicializarDropdown,200)

                    /**
                     * Efeito Sortable dos ícones
                     */
                    const sortable = new Sortable(document.querySelector('.ivcard-icones'), {
                        animation: 150,
                        onEnd: evt => {
                          this.user.icones.splice(evt.newIndex, 0, this.user.icones.splice(evt.oldIndex, 1)[0]);
                        }
                      });

                      /**
                      * Efeito Sortable do TopTemplate
                      */
                      const sortableTemplateTop = new Sortable(document.querySelector('.template-top'), {
                        animation: 150,
                        onEnd: evt => {
                          this.user.templateTop.splice(evt.newIndex, 0, this.user.templateTop.splice(evt.oldIndex, 1)[0]);
                        }
                      });

                },
                components: {
                    'meu-componente': carregarDados
                }
            })
        })
        .catch(err => console.log);

        