import { modelos ,navegacaoDados } from "../modules/modelos.js"
const CardsTemplate = `
    <div class="content-ivcard">
        <div id="ivcard-template" style="background: url(assets/img/capa_modelo_1.jpg)">
            <div class="ivcard-template-inner">
                <div class="template-top">
                    <div class="logotipo">
                        <img src="https://ibsweb.com.br/ibsAssets/logo-footer.svg" />
                    </div>
                    <div class="imagem">
                        <img :src="user.imagem" />
                    </div>
                    <div class="nome">
                        <h3 @input="updateNome" ref="editable" contenteditable="true">{{user.nome}}</h3>
                    </div>
                </div>
                <div class="template-middle">
                    <div class="ivcard-icones">
                        <span class="ivcard-icon-inner" v-for="(icone,i) in user.icones">
                            <span class="btnEdit">
                            <!-- Dropdown Trigger -->
                            <a class='dropdown-button btn' href='#' :data-activates="'drop-'+icone.icone">...</a>
                            <!-- Dropdown Structure -->
                            <ul :id="'drop-'+icone.icone" class='dropdown-content'>
                              <li><a @click="RemoverIcone(icone.icone)"><i class="material-icons dp48">delete</i>Remover</a></li>
                              <li class="divider"></li>
                              <li><a href="#!"><i class="material-icons dp48">edit</i> Editar</a></li>
                            </ul>
                            </span>
                            <a :href="icone.url" target="_blank">
                                <span class="ivcard-icone-icon" v-html="ivcardIcones(icone.icone)"></span>
                                <span class="icone-title">{{icone.title}}</span>
                            </a>
                            
                        </span>
                    </div>
                </div>
                <div class="template-footer">
                    <div class="info">
                        Toque nos ícones <i class="material-icons dp48">touch_app</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

export default CardsTemplate;


/*
<form action="#">
            <p class="range-field">
              <input type="range" id="test5" v-model="rangeValue" min="0" max="100" />
            </p>
          </form>
          */