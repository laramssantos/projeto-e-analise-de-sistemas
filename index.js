/*Criando o projeto
. na pasta do projeto, utilizar o comando 
. npm init  para criar o arquivo .json que contém várias informações
. Ver vídeo https://www.youtube.com/watch?v=EN6Dx22cPRI&t=250s para saber o que colocar
. npm install --save pysql express
. o comando faz com que o mysql e o express sejam parte do projeto
. npm intall -g nodemon
. nodemon faz com que não precise rodar o prgarama toda vez que uma alteração é feita
. só colocar ' nodemon ' que o código roda.*/

/*Para as funções de criar, colocar informações, alterar e deletar, ver esse vídeo https://www.youtube.com/watch?v=EN6Dx22cPRI&t=250s */

const express = require('express');
const mysql = require('mysql');

//Criar a conexão com o bd
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "M@yaraB@ncoD&D@dos2506", //colocar a senha que você configuirou para o BD
    database: "bd_cp"
});

//Conectar
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Conectado!');
});

const app = express();

//colocar no browser ' localhost:3000 ' que aparece
app.listen('3000', () => {
    console.log('Server started on port 3000');
});

//Selecionar do bd

//Selecionar toda uma tabela
app.get('/pegarclientes', (req, res) => {
    
    let sql = 'SELECT * FROM clientes';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        //console.log(results); //esse faz aparecer no terminal
        res.send(results); // esse faz aparecer no browser 
        //res.send('Pessoas...');
    });

});


// Selecionar uma coluna de uma tabela
app.get('/pegarNome', (req, res) => {
    let sql = 'SELECT nomeCompleto FROM clientes';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        //console.log(results); //esse faz aparecer no terminal
        res.send(results); // esse faz aparecer no browser 
    });
});


//Selecionar Linhas com determinada informação
app.get('/pegarpeloCPF', (req, res) => {
    let sql = "SELECT * FROM clientes WHERE cpf = '12345678932'";
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        //console.log(results); //esse faz aparecer no terminal
        res.send(results); // esse faz aparecer no browser 
    });
});

//Selecionar campo com base em outro campo
app.get('/pegarNomepeloCPF', (req, res) => {
    let sql = "SELECT nomeCompleto FROM clientes WHERE cpf = '12345678932'";
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        //console.log(results); //esse faz aparecer no terminal
        res.send(results); // esse faz aparecer no browser 
    });
});

//Selecionar campo com base em outro campo utilizando uma variável

var c = '06112862341';
app.get('/pegarNomepelaVariavel', (req, res) => {
    let sql = "SELECT nomeCompleto FROM clientes WHERE cpf = ?";
    // o ? indica que vamos usar uma variável. A variável é colocada na linha abaxio, entre []. No caso, é o [c]
    let query = db.query(sql, [c], (err, results) => {
        if (err) throw err;
        //console.log(results); //esse faz aparecer no terminal
        res.send(results); // esse faz aparecer no browser 
    });
});

//Selecionar com valor passado por parâmetro
// Colocar no browser algo como http://localhost:3000/pegarNomeporParametro/32561498732 , só mudar o final para ser o número desejado
app.get('/pegarNomeporParametro/:id', (req, res) => {
    // Note as as aspas são diferentes aqui
    let sql = `SELECT nomeCompleto FROM clientes WHERE cpf = ${req.params.id};`;
    // o ? indica que vamos usar uma variável. A variável é colocada na linha abaxio, entre []. No caso, é o [c]
    let query = db.query(sql, [c], (err, results) => {
        if (err) throw err;
        //console.log(results); //esse faz aparecer no terminal
        res.send(results); // esse faz aparecer no browser 
    });
});


//Enviar arquivo html para browser
app.get('/testeHTML', (req, res) => {
    res.sendFile(__dirname + "/site.html");
});

//Enviar arquivo html para browser utilizando Handlebars
// ver esse vídeo https://www.youtube.com/watch?v=U4OUBjnjBWU&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=19
app.get('/testeHandelbars', (req, res) => {
    //res.render(__dirname + "/site.html");
});