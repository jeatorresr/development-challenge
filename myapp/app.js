const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const port = 3000

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

//Con res.status puedo asignar la respuesta que quiero entregar
app.get('/user', (req, res) => {
    res.status(200).send('Hello Users from Express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Crear un formulario para poder ingresar los numeros a sumar
var formulario = '<form method="post" action="/suma">'
    + '<label for="num1">Num1</label>'
    + '<input type="text" name="num1" id="num1">'    
    + '<label for="num2">Num2</label>'
    + '<input type="text" name="num2" id="num2">' 
    + '<input type="submit" value="Enviar"/>'
    + '</form>';

//Necesito un metodo get que muestre el formulario cuando el usuario haga el
//request a la pagina
app.get('/suma', function (req, res) {
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
    res.send('<html>Ingrese los numeros<body>'
            + formulario
            + '<p>' + resultado + '</p>'
            + '</html></body>'
    );
});