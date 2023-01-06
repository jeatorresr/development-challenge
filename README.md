# development-challenge

NodeJS application - BASIC DEVELOPMENT CHALLENGE

Para crear la aplicación de NodeJS base se realizaron los siguientes pasos:

- Crear el directorio utilizando el comando mkdir myapp
  ```
  mkdir myapp
  ```
- Añadir un nuevo archivo dentro del directorio con el nombre **app.js**

- Copiar el codigo que se encuentra en la siguiente pagina web en el nuevo archivo creado: https://expressjs.com/en/starter/hello-world.html

Con la base construida, se procede a desarrollar el desafio.  

**EJECUCIÓN**

*Nota*: Utilizar el servicio de Postman para realizar las diferentes pruebas de funcionamiento.  La respuesta de cada endpoint se verá en la terminal donde ejecutó el contenedor.

1. Descargar la imagen de docker que contiene el proyecto
```
docker pull jeatorresr/development-challenge:0.0.1
```
2. Ejecutar la imagen exponiendo el puerto del contenedor a un puerto en su máquina.
```
docker run -p 3000:3000 jeatorresr/development-challenge:0.0.1
```
3. En la aplicación Postman probar cada uno de los endpoints solicitados así:
- /user
    Enviar una peticion **GET** a http://localhost:3000/user.
- /suma
    Enviar una petición **POST** a http://localhost:3000/suma utilizando la siguiente estructura:
    ```
    {
      "num1":"5",
      "num2":"2"
    }
    ```
- /bitcoin
    Enviar una petición **POST** a http://localhost:3000/suma utilizando la siguiente estructura:
    ```
    {
      "moneda":"EUR"
    }
    ```
    Tenga en cuenta que los valores permitidos son EUR, GBP y USD.
