/*Criando o projeto
. na pasta do projeto, utilizar o comando 
. npm init  para criar o arquivo .json que contém várias informações
. Ver vídeo https://www.youtube.com/watch?v=EN6Dx22cPRI&t=250s para saber o que colocar
. npm intall --save pysql express
. o comando faz com que o mysql e o express sejam parte do projeto
. npm intall -g nodemon
. nodemon faz com que não precise rodar o prgarama toda vez que uma alteração é feita*/

/*ANTES DE RODAR O CÓDIGO
. o banco de dados tem que ter sido inicializado na máquina, não precisa estar aberto
. instalar o NODE.JS https://nodejs.org/en/download/
. Comando " npm install mysql " para instalar o módulo de mysql
. Dá um erro, então tem que colocar esse comando no mySQL Workbench
. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
. your_new_password é a senha que você deseja colocar no seu bd
. FLUSH PRIVILEGES; para atualizar 
. Para rodar o código, é só usar o comando " node nomeCódigo.js " no terminal
. Mais informações em https://www.w3schools.com/nodejs/nodejs_mysql.asp */

//Conexão com o Banco
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "M@yaraB@ncoD&D@dos2506",
  database: "bd_cp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT nomeCompleto FROM clientes WHERE cpf = '12345678932'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/