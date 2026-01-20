<?php

    namespace App;

    class Route {

        private $routes;

        public function __construct(){
            /*echo 'Iniciando o método Construtor: <br><br>';*/
            $this->initRoutes();
            $this->run($this->getUrl());
            /*echo '<br><br> Encerrando o método Construtor!';*/
        }

        public function getRoutes(){
            return $this->routes;
        }

        public function setRoutes(array $routes){
            $this->routes = $routes;
        }


        //Cria as rotas, caminhos que o nosso site deverá seguir;
        public function initRoutes(){
            $routes['home'] = array(
                'route' => '/',
                'controller' => 'IndexController',
                'action' => 'index'
            );
            $routes['sobre_nos'] = array(
                'route' => '/sobre_nos',
                'controller' => 'IndexController',
                'action' => 'sobreNos'
            );

            //aplica os arrays dentro da variável $routes que servirá de base para chegar no controlador correto e encontrar a action correta;
            $this->setRoutes($routes);
        }

        //Serve para fazer a função getUrl ser executada trazendo a URL requerida e comparando com as routes obtidas que planejamos anteriormente, dessa forma instanciamos o controlador correto e acionamos a ação correspondente a rota requerida;
        public function run($url){
           /*echo '***' .$url. '***';
            echo '<br>';
            echo '<br>';*/

            foreach($this->getRoutes() as $key => $route){
               if($url == $route['route']){

                $class = "App\\Controllers\\".$route['controller'];
                $controller = new $class;

                $action = $route['action'];
                $controller->$action();
               }
            }
        }

        //Serve para pegar a URL que o usuário requeriu;
        public function getUrl(){
            return parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
            //parse_url('www.globo.com/ge?x=10');
        }
    }

?>