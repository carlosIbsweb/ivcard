export const CardsTemplate = `
    <div class="content-ivcard">
        <div id="ivcard-template">
            <div class="ivcard-template-inner">
              
                <div class="template-top">
                    <div :class="[item.title, 'ivcard-item-edit']" v-for="(item, i) in user.templateTop" :key="item">
                    <span class="btnEdit">
                            <!-- Dropdown Trigger -->
                            <a class='dropdown-button btn' href='#' :data-activates="'drop-'+item.title">...</a>
                            <!-- Dropdown Structure -->
                            <ul :id="'drop-'+item.title" class='dropdown-content'>
                              <li><a @click="RemoverItem(item.title)"><i class="material-icons dp48">delete</i>Remover</a></li>
                              <li class="divider"></li>
                              <li v-if="item.title === 'imagem'"><a @click="Navegacao('imagem',$event)"><i class="material-icons dp48">edit</i> Editar</a>
                              <li v-else-if="item.title === 'nome'" @click="Navegacao('title',$event)"><a href="#!"><i class="material-icons dp48">edit</i> Editar</a></li>
                              <li v-else ><a href="#!"><i class="material-icons dp48">edit</i> Editar</a></li>
                              
                              </li>
                            </ul>
                            </span>
                        <h3 v-if="item.title === 'nome'">{{ item.value }}</h3>
                        <p v-if="item.title === 'descricao'" class="description">{{ item.value }}</p>
                        <img v-else-if="item.title === 'logotipo' || item.title === 'imagem'" :src="item.value" />
                    </div>
                </div>
                <div class="template-middle">
                    <div class="ivcard-icones">
                        <span class="ivcard-icon-inner ivcard-item-edit" v-for="(icone,i) in user.icones" :key="icone">
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
export const SalvarDados  = `
    <div class="fixed-action-btn">
    <a class="btn-floating btn-large black">
      <i class="large material-icons">mode_edit</i>
    </a>
    <ul>
      <li><a @click="salvarDados()" class="btn-floating green"><i class="material-icons">save</i></a></li>
      <li><a class="btn-floating yellow darken-1"><i class="material-icons">preview</i></a></li>
    </ul>
  </div>
`;



/*
<form action="#">
            <p class="range-field">
              <input type="range" id="test5" v-model="rangeValue" min="0" max="100" />
            </p>
          </form>
          */