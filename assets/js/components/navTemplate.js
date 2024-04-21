import { handleStatus } from "../modules/promise-helpers.js"
import { components ,navegacaoDados } from "../modules/modelos.js"

export const NavTemplate = `
<div class="nav-ivcard">
<nav>
    <ul>
        <li class="modelos">
            <a @click="Navegacao('modelos',$event)" class="waves-effect waves-light">
                <span class="material-icons">
                    app_settings_alt
                </span>
                <span class="legenda">Modelos</span>
            </a>
        </li>
        <li class="modelos">
            <a @click="Navegacao('icones',$event)" class="waves-effect waves-light">
                <span class="material-icons">
                    apps
                </span>
                <span class="legenda">Ícones</span>
            </a>
        </li>

        <li class="modelos">
            <a @click="Navegacao('styles',$event)" class="waves-effect waves-light">
                <span class="material-icons">
                    style
                </span>
                <span class="legenda">Style</span>
            </a>
        </li>
    </ul>
</nav>
<div class="navegacao-dados scale-transition close">
    <div class="navegacao-inner">
    <meu-componente :navegacao="navegacao"></meu-componente>
    </div>
    <div class="navegacao-close">
        <span class="navegacao-dados-close material-icons">chevron_left</span>
    </div>
</div>
</div>
`
