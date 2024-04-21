import { handleStatus } from "./modules/promise-helpers.js"
import { addStylesToHead } from "./modules/modelos.js"
import { ivcardIcones } from "./modules/icones.js";
import CardsTemplate from "./components/cardsTemplateRender.js";



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
                    }
                },
                methods: {
                    ivcardIcones(icone) {
                        return ivcardIcones[icone]
                    },
                    StylesModeloUser() {
                        let styles = this.user.styles
                        addStylesToHead(`
                        .ivcard-icones span.ivcard-icon-inner a.ivcard-item-icone, .template-top .imagem img{
                            border-color: ${styles.templateColor}
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
                            fill: ${styles.iconeTextColor};
                            color: ${styles.iconeTextColor}
                        }
                        .template-top h3 {
                            color: ${styles.nomeTextColor}
                        }
                      `)
                    }
                },
                template: `
                    <div id="iv-card" class="ivcard-render">
                        ${CardsTemplate}
                    </div>
                    `,
                mounted() {
                    /*
                      *Renderizar style templateModelo
                       */
                      addStylesToHead(usuario.stylesModelo)
                      this.StylesModeloUser()
                }
            })
        })
        .catch(err => console.log);

        