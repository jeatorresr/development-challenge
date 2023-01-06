const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const { json, request, response } = require('express')
const port = 3000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
app.use(bodyparser.json())
var jsonFile;
const https = require('https');
const req = require('request')

// Request URL
var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

app.get('/', (req, res) => {
    res.status(200).send('Hello :)')
})

//Con res.status puedo asignar la respuesta que quiero entregar
app.get('/user', (req, res) => {
    res.status(200).send('Hello Users from Express')
    console.log('Hello Users from Express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Segundo punto
//Crear un formulario para poder ingresar los numeros a sumar
var formulario = '<form method="post" action="/suma">'
    + '<label for="num1">Num1</label>'
    + '<input type="text" name="num1" id="num1">'    
    + '<label for="num2">Num2</label>'
    + '<input type="text" name="num2" id="num2">' 
    + '<input type="submit" value="Enviar"/>'
    + '</form>';

//Necesito un metodo get que muestre el formulario cuando el usuario haga el request a la pagina
app.get('/suma', function (req, res) {
    console.log('Suma: ingrese los numeros')
    res.send('<html>Ingrese los numeros<body>'
            + formulario
            + '</html></body>'
    );
});

//Con el metodo post leo los valores ingresados y devuelvo un resultado
app.post('/suma', function (req, res) {
    var num1 = req.body.num1 || '';
    var num2 = req.body.num2 || '';
    var resultado = '';
    if (num1 != '' && num2 != '')
        resultado = parseInt(num1)+parseInt(num2);
        console.log(resultado)
    res.send('<html>Ingrese los numeros<body>'
            + formulario
            + '<p>' + resultado + '</p>'
            + '</html></body>'
    );
});

//Tercer punto
var formulario2 = '<form method="post" action="/bitcoin">'
    + '<label for="moneda">Moneda</label>'
    + '<input type="text" name="moneda" id="moneda">' 
    + '<input type="submit" value="Enviar"/>'
    + '</form>';

app.get('/bitcoin', function (req, res) {
    console.log('Bitcoin: Ingrese una moneda EUR, GBP o USD')
    res.send('<html>Ingrese la moneda (EUR, GBP, USD)<body>'
            + formulario2
            + '</html></body>'
    );
});

app.post('/bitcoin', function (req, res) {
    var moneda = req.body.moneda || '';
    var bitcoin = '';
    if (moneda != ''){
        if(moneda == 'EUR'){
            const rate = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response)=>response.json())
            .then((jsonFile)=>console.log(jsonFile.bpi.EUR.rate))
            const description = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response)=>response.json())
            .then((jsonFile)=>console.log(jsonFile.bpi.EUR.description))
            res.send('<html>Ingrese la moneda (EUR, GBP, USD<body>'
            + formulario2
            + '<p>' + description + '</p>'
            + '</html></body>'
            );
        } else if(moneda == 'GBP'){
            const rate = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response)=>response.json())
            .then((jsonFile)=>console.log(jsonFile.bpi.GBP.rate))
            const description = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response)=>response.json())
            .then((jsonFile)=>console.log(jsonFile.bpi.GBP.description))
            res.send('<html>Ingrese la moneda (EUR, GBP, USD<body>'
            + formulario2
            + '<p>' + description + '</p>'
            + '</html></body>'
            );
        } else if(moneda == 'USD'){
            const rate = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response)=>response.json())
            .then((jsonFile)=>console.log(jsonFile.bpi.USD.rate))
            const description = fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response)=>response.json())
            .then((jsonFile)=>console.log(jsonFile.bpi.USD.description))
            res.send('<html>Ingrese la moneda (EUR, GBP, USD<body>'
            + formulario2
            + '<p>' + description + '</p>'
            + '</html></body>'
            );
        } else {
            console.log('Ingrese una moneda valida')
        }
    }
    

});

