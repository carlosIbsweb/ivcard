

export function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
        return file;
    }
}


export function   uploadImage(file,mImage) {
    if (!file) {
        alert('Por favor, selecione uma imagem.');
        return;
    }
    const formData = new FormData();
    formData.append('image', file);
    
    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar o arquivo.');
        }
        return response.text();
    })
    .then(data => {
        let img = JSON.parse(data)
        if(img.upload === 0){
            Materialize.toast(img.mensagemErro, 3000, 'red rounded')
            return;
        }
        return mImage(img);
    })
    .catch(error => {
        console.error(error);
    });
}