<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

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
      <a class="navbar-brand" href="#">
        <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        App Help Desk
      </a>
    </nav>

    <div class="container">    
      <div class="row">

        <div class="card-login">
          <div class="card">
            <div class="card-header">
              Login
            </div>
            <div class="card-body">
              <form action="valida_login.php" method="POST">
                <div class="form-group">
                  <input name="email" type="email" class="form-control" placeholder="E-mail">
                </div>
                <div class="form-group">
                  <input name="senha" type="password" class="form-control" placeholder="Senha">
                </div>
                
                <!-- INICIO DA VALIDAÇÃO PARA VERIFICAR SE EXISTE ALGUM RETORNO! -->
                <?php if(isset($_GET['login']) && $_GET['login'] == 'erro'){
                ?>                  

                  <!-- CRIAÇÃO DE DIV PARA INSERÇÃO DO AVISO! SOMENTE COM HTML E CSS -->
                  <div class ="text-danger">
                    Usuário ou Senha Inválidos!
                  </div>

                <!-- FIM DA VALIDAÇÃO -->
                <?php } ?>

                 <!-- INICIO DA VALIDAÇÃO PARA VERIFICAR SE EXISTE ALGUM RETORNO! -->
                <?php if(isset($_GET['login']) && $_GET['login'] == 'erro2'){
                ?>                  

                  <!-- CRIAÇÃO DE DIV PARA INSERÇÃO DO AVISO! SOMENTE COM HTML E CSS -->
                  <div class ="text-danger">
                    Faça login antes de acessar!
                  </div>

                <!-- FIM DA VALIDAÇÃO -->
                <?php } ?>
                
                <button class="btn btn-lg btn-info btn-block" type="submit">Entrar</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  </body>
</html>