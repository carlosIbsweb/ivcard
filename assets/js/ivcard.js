import { handleStatus, navegacaoType, removerObjetoChave, inicializarDropdown, updateTemplateTop, getTemplateTopValue} from "./modules/promise-helpers.js"
import { carregarDados,modelos, navegacaoDados, addStylesToHead } from "./modules/modelos.js";
import { ivcardIcones } from "./modules/icones.js";
import {CardsTemplate, SalvarDados} from "./components/cardsTemplate.js";
import {NavTemplate} from "./components/navTemplate.js";
import { handleFileChange, uploadImage } from "./modules/image.js";



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
                        styles: usuario.styles
                    },
                    navegacao: [],
                    rangeValue: 0,
                    dadosNavegacao: `<span @click="bora">nadassssssssss</span>`,
                    imagePreview: null,
                    fileTemplate: null,
                    fileFoto: null,
                    folderImg: 'uploads/'
                },
                methods: {
                    salvarDados(){
                        if(this.file){
                            this.uploadImageFoto();
                            return;
                        }

                        if(this.fileTemplate){
                            this.uploadImageTemplate();
                            return;
                        }

                        Materialize.toast('Dados salvo com Sucesso!', 3000, 'blue rounded')
                        this.gerar();
                    },
                    ivcardIcones(icone) {
                        return ivcardIcones[icone]
                    },
                    updateNome(v) {
                        this.user.nome = event.target.innerText
                    },
                    gerar() {
                        
                            usuario['templateTop'] = this.user.templateTop;
                            usuario['icones'] = this.user.icones;
                            usuario['styles'] = this.user.styles;


                        console.log(JSON.stringify(usuario))
                    },
                    //Quando eu clico em um menu de navegação
                    Navegacao(dado,event) {
                        
                        if(!event.target.parentNode.classList.contains('activeNav')){
                            //Removendo os actives
                            $('.activeNav').removeClass('activeNav')
                            event.target.parentNode.classList.add('activeNav')
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
                        //Limitando a quantidade de ícones que podem inserir
                        if(!estaPresente && this.user.icones.length < 12){
                            this.user.icones.push(icone)
                        }
                        
                        setTimeout(inicializarDropdown,200)
                    },
                    RemoverIcone(icone) {
                        removerObjetoChave(icone,this.user.icones,'icone')
                    },
                    RemoverItem(item) {
                        removerObjetoChave(item,this.user.templateTop,'title')
                    },
                    StylesModeloUser() {
                        let styles = this.user.styles
                        addStylesToHead(`
                        .ivcard-icones span.ivcard-icon-inner a.ivcard-item-icone, .template-top .imagem img{
                            border-color: ${styles.templateColor};
                            background-color: ${styles.iconeBgColor}
                        }
                        .info{
                            background-color: ${styles.templateColor};
                            color: ${styles.templateTextColor}
                        }
                        #ivcard-template{
                            background: url("${styles.templateImagem}");
                            background-color: ${styles.templateBgColor};
                            color: ${styles.templateTextColor}
                        }
                        .ivcard-icon-inner .icone-title, .ivcard-icones svg, .ivcard-icones svg path, .ivcard-icones svg circle {
                            fill: ${styles.iconeColor} !important;
                            color: ${styles.iconeTextColor}
                        }
                        .template-top h3 {
                            color: ${styles.nomeTextColor}
                        }
                      `)
                    },

                    /**
                     * 
                     * Imagem pessoa, inserir, editar e remover
                     */
                    handleFileChangeImgTop(event) {
                        let file = handleFileChange(event)
                        this.file = file;
                        this.user.templateTop = updateTemplateTop('imagem',URL.createObjectURL(file),this.user.templateTop);
                    },
                    handleFileChangeImgTemplate(event) {
                        let file = handleFileChange(event)
                        this.fileTemplate = file;
                        this.user.styles.templateImagem = URL.createObjectURL(file);
                    },
                    //Upload de Imagem da Foto
                    uploadImageFoto() {
                        let folderImg = this.folderImg
                        let userTemplateTop = this.user.templateTop
                        // Salvando a referência da função gerar
                        let gerar = this.gerar;
                        uploadImage(this.file,function(img){
                            if(img.upload){
                                // Faça algo com a resposta do servidor, se necessário
                                updateTemplateTop('imagem',folderImg+img.fileName,userTemplateTop);
                                Materialize.toast('Dados salvo com Sucesso!', 3000, 'blue rounded')
                                //Chamando a função gerar apos o upload
                                gerar()
                            }
                        })
                    },
                    uploadImageTemplate() {
                        let el = this;
                        let folderImg = this.folderImg
                        // Salvando a referência da função gerar
                        let gerar = this.gerar;
                        uploadImage(this.fileTemplate,function(img) {
                            if(img.upload){
                                // Faça algo com a resposta do servidor, se necessário
                                el.user.styles.templateImagem = folderImg+img.fileName
                                Materialize.toast('Dados salvo com Sucesso!', 3000, 'blue rounded')
                                //Chamando a função gerar apos o upload
                                gerar()
                            }
                        })
                    },
                      editarTemplateTop(item,event) {
                        this.user.templateTop = updateTemplateTop(item,event.target.value,this.user.templateTop);
                      },
                      getTemplateTopValue(title) {
                        return getTemplateTopValue(title,this.user.templateTop)
                      },
                      selectFont(){
                        alert('teste')
                      }

                },
                
                template: `
                    <div id="iv-card">
                        ${NavTemplate}
                        ${CardsTemplate}
                        ${SalvarDados}
                    </div>
                    `,
                watch: {
                    'user': {
                        handler() {this.StylesModeloUser()},
                        deep: true
                    }
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

                      /*
                      *Renderizar style templateModelo
                       */
                      addStylesToHead(usuario.stylesModelo)
                      this.StylesModeloUser();

                },
                components: {
                    'meu-componente': carregarDados
                }
            })
        })
        .catch(err => console.log);

        