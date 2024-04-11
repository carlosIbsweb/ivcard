const CardsTemplate = `
    <div class="content-ivcard">
        <div id="ivcard-template" style="background: url(assets/img/capa_modelo_1.jpg)">
            <div class="ivcard-template-inner">
                <div class="template-top">
                    <div class="logotipo">
                        <img src="https://ibsweb.com.br/ibsAssets/logo-footer.svg" />
                    </div>
                    <div class="imagem">
                        <img :src="imagem" />
                    </div>
                    <div class="nome">
                        <h3 @input="updateNome" ref="editable" contenteditable="true">{{nome}}</h3>
                    </div>
                </div>
                <div class="template-middle">
                    <div class="ivcard-icones">
                        <span v-for="icone in icones" v-html="ivcardIcones(icone)"></span>
                    </div>
                </div>
                <div class="template-footer">
                    <div class="info">
                        Toque nos ícones<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" style="&#10;    fill: #003d01;&#10;"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"/></svg>
                    </div>
                </div>
            </div>
        </div>
        <form action="#">
            <p class="range-field">
              <input type="range" id="test5" v-model="rangeValue" min="0" max="100" />
            </p>
          </form>
          {{rangeValue}}
    </div>
`

export default CardsTemplate;