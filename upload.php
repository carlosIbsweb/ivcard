<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Verifique se o arquivo de imagem é real ou falso
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["image"]["tmp_name"]);
  if($check !== false) {
    echo "O arquivo é uma imagem - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "O arquivo não é uma imagem.";
    $uploadOk = 0;
  }
}

// Verificar se o arquivo já existe
if (file_exists($target_file)) {
  echo "Desculpe, o arquivo já existe.";
  $uploadOk = 0;
}

// Verificar o tamanho do arquivo
if ($_FILES["image"]["size"] > 500000) {
  echo "Desculpe, seu arquivo é muito grande.";
  $uploadOk = 0;
}

// Permitir apenas alguns formatos de arquivo
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Desculpe, apenas arquivos JPG, JPEG, PNG & GIF são permitidos.";
  $uploadOk = 0;
}

// Verificar se $uploadOk é setado como 0 por um erro
if ($uploadOk == 0) {
  echo "Desculpe, seu arquivo não foi enviado.";
// Se tudo estiver correto, tente fazer o upload do arquivo
} else {
  if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
    echo "O arquivo ". htmlspecialchars( basename( $_FILES["image"]["name"])). " foi enviado.";
  } else {
    echo "Desculpe, houve um erro ao enviar seu arquivo.";
  }
}
?>