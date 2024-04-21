<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
$mensagemErro = '';
$fileName = '';
$arquivosPermitidos = ['jpg','gif','png'];

// Verifique se o arquivo de imagem é real ou falso
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["image"]["tmp_name"]);
  if($check !== false) {
    $mensagemErro = "O arquivo é uma imagem - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    $mensagemErro = "O arquivo não é uma imagem.";
    $uploadOk = 0;
  }
}

// Verificar se o arquivo já existe
if (file_exists($target_file)) {
  $mensagemErro = "Desculpe, o arquivo já existe.";
  $uploadOk = 0;
}

// Verificar o tamanho do arquivo
if ($_FILES["image"]["size"] > 500000) {
    $mensagemErro = "Desculpe, seu arquivo é muito grande.";
  $uploadOk = 0;
}

// Permitir apenas alguns formatos de arquivo
if(!in_array($imageFileType,$arquivosPermitidos)) {
    $mensagemErro = "Desculpe, apenas arquivos JPG, JPEG, PNG & GIF são permitidos.".$imageFileType;
  $uploadOk = 0;
}

// Verificar se $uploadOk é setado como 0 por um erro
if ($uploadOk == 0) {
    $mensagemErro = $mensagemErro;
// Se tudo estiver correto, tente fazer o upload do arquivo
} else {
  if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
    $fileName = htmlspecialchars( basename( $_FILES["image"]["name"]));
  } else {
    $mensagemErro = "Desculpe, houve um erro ao enviar seu arquivo.";
    $uploadOk = 0;
  }
}


$out = [];
$out['upload'] = $uploadOk;
$out['mensagemErro'] = $mensagemErro;
$out['fileName'] = $fileName;

echo json_encode($out);
?>