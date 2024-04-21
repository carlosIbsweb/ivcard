export function fontSelect(action,selectedFont) {
    let fonts = `
        <div ${action} class="col s12">
            <select class="browser-default">
                <option value="" disabled>Escolha uma fonte</option>
                <option value="Roboto"${selectedFont === 'Roboto' ? ' selected' : ''}>Roboto</option>
                <option value="Open Sans"${selectedFont === 'Open Sans' ? ' selected' : ''}>Open Sans</option>
                <option value="Lato"${selectedFont === 'Lato' ? ' selected' : ''}>Lato</option>
                <option value="Montserrat"${selectedFont === 'Montserrat' ? ' selected' : ''}>Montserrat</option>
                <option value="Source Sans Pro"${selectedFont === 'Source Sans Pro' ? ' selected' : ''}>Source Sans Pro</option>
                <option value="PT Sans"${selectedFont === 'PT Sans' ? ' selected' : ''}>PT Sans</option>
                <option value="Oswald"${selectedFont === 'Oswald' ? ' selected' : ''}>Oswald</option>
                <option value="Poppins"${selectedFont === 'Poppins' ? ' selected' : ''}>Poppins</option>
                <option value="Roboto Condensed"${selectedFont === 'Roboto Condensed' ? ' selected' : ''}>Roboto Condensed</option>
                <option value="Nunito"${selectedFont === 'Nunito' ? ' selected' : ''}>Nunito</option>
                <option value="Playfair Display"${selectedFont === 'Playfair Display' ? ' selected' : ''}>Playfair Display</option>
                <option value="Mulish"${selectedFont === 'Mulish' ? ' selected' : ''}>Mulish</option>
                <option value="Quicksand"${selectedFont === 'Quicksand' ? ' selected' : ''}>Quicksand</option>
                <option value="Raleway"${selectedFont === 'Raleway' ? ' selected' : ''}>Raleway</option>
                <option value="Roboto Slab"${selectedFont === 'Roboto Slab' ? ' selected' : ''}>Roboto Slab</option>
            </select>
            <label>Selecione a Fonte</label>
        </div>
    `;
    return fonts;
}