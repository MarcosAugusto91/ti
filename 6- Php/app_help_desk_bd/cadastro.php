<html>

<head>
  <meta charset="utf-8" />
  <title>App Help Desk</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="icon" href="imagens/logo.png" type="image/x-icon">

  <style>
    .card-login {
      padding: 30px 0 0 0;
      width: 350px;
      margin: 0 auto;
    }
  </style>
</head>

<body>

  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="index.php">
      <img src="../app_help_desk_bd/imagens/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      App Help Desk
    </a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="index.php">VOLTAR</a>
      </li>
    </ul>
  </nav>

  <div class="container">
    <div class="row">

      <div class="card-login">
        <div class="card">
          <div class="card-header">
            Cadastre-se:
            <img src="imagens/user.png" style="margin-left: 175px; width:35px" alt="">
          </div>
          <div class="card-body">
            <form action="valida_cadastro.php" method="POST">
              <div class="form-group">
                <input name="nome" type="text" class="form-control" placeholder="Nome Completo" required autofocus>
              </div>              
              <div class="form-group">
                <input name="email" type="email" class="form-control" placeholder="E-mail" required>
              </div>
              <div class="form-group">
                <input name="senha" type="password" class="form-control" placeholder="Senha" required>
              </div>
              <div class="form-group">
                <select name="perfil" class="form-control">
                    <option style="text-align: center;">-- Selecione --</option>
                    <option>Usuario</option>
                    <option>Tecnico</option>
                    <option>Administrador</option>
                </select>
                <?php //VALIDA SE O USUÁRIO JÁ NÃO ESTAVA CADASTRADO
                    if(isset($_GET['email']) && $_GET['email'] === 'erro') { ?>
                        <div class="text-danger" style="text-align: center;"> E-Mail já cadastrado!</div>
                <?php } ?>

                <?php //VALIDA SE O PERFIL É VALIDO
                    if(isset($_GET['validaperfil']) && $_GET['validaperfil'] === 'erro') { ?>
                        <div class="text-danger" style="text-align: center;"> Obrigatório selecionar um perfil!</div>
                <?php } ?>

                <?php //VALIDA SE O PERFIL É VALIDO
                    if(isset($_GET['usuario']) && $_GET['usuario'] === 'sucesso') { ?>
                        <script> alert('Usuário cadastrado com Sucesso!');</script>
                <?php } else if(isset($_GET['usuario']) && $_GET['usuario'] != 'sucesso') { ?>
                <script> alert('Erro ao inserir usuário no banco, contate o administador!'); </script> 
                <?php } ?>
              </div>
              <button class="btn btn-lg btn-info btn-block" type="submit">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</body>

</html>