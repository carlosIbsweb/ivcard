import { modelos ,navegacaoDados } from "../modules/modelos.js"
const CardsTemplate = `
    <div class="content-ivcard">
        <div id="ivcard-template">
            <div class="ivcard-template-inner">
              
                <div class="template-top">
                    <div :class="[item.title, 'ivcard-item-edit']" v-for="(item, i) in user.templateTop" :key="item">
                        <h3 v-if="item.title === 'nome'">{{ item.value }}</h3>
                        <img v-else-if="item.title === 'logotipo' || item.title === 'imagem'" :src="item.value" />
                        <p v-if="item.title === 'descricao'" class="description">{{ item.value }}</p>
                    </div>
                </div>
                <div class="template-middle">
                    <div class="ivcard-icones">
                        <span class="ivcard-icon-inner ivcard-item-edit" v-for="(icone,i) in user.icones" :key="icone">
                            <a :href="icone.url" target="_blank" class="ivcard-item-icone">
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