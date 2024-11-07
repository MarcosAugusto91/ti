<?php include "validador_acesso.php"; 

  //Abrimos o arquivo
  $arquivo =  fopen("chamados.txt", "r");
  $chamados = array();

  /* Verificamos se é o fim do arquivo a cada linha, 
     até chegar na última e sair da estrutura de repetição
     Depois usamos o fgets para obter a informação de cada linha
     e guardamos na string registros, por último inserimos no array chamados
  */
  while(!feof($arquivo)) {
    $registros = fgets($arquivo); 
    $chamados[] = $registros;
  }
  
  //echo "<pre>";
  //print_r($chamados);
  //echo "</pre>";

  //Fechamos o arquivo
  fclose($arquivo);
?>

<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <style>
      .card-consultar-chamado {
        padding: 30px 0 0 0;
        width: 100%;
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

        <div class="card-consultar-chamado">
          <div class="card">
            <div class="card-header">
              Consulta de chamado
            </div>
            
            <div class="card-body">
              
            <?php 
            //Usando a estrutura de repetição para rodar o array
            foreach($chamados as $chamado){ ?>
              
              <?php 
              //Fazemos um explode para separar cada string em um índice
              $chamados_dados = explode("|", $chamado);
              
              //Verificamos se cada array contém todos os 3 indices preenchidos
              if(count($chamados_dados) < 3){
                continue;
                }
              ?>
                <div class="card mb-3 bg-light">
                <div class="card-body">
                
                  <h5 class="card-title">
                    <?php echo $chamados_dados[0];?>
                  </h5>
                  
                  <h6 class="card-subtitle mb-2 text-muted">
                    <?php echo $chamados_dados[1];?>
                  </h6>

                  <p class="card-text">
                    <?php echo $chamados_dados[2];?>
                  </p>       
                </div>
              </div>
            <?php } ?>

              <div class="row mt-5">
                <div class="col-6">
                  <a class="btn btn-lg btn-warning btn-block" href="home.php">Voltar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>