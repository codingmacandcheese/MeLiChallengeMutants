# MeLiChallengeMutants

¡Magneto necesita nuestra ayuda para reclutar a la mayor cantidad de mutantes y así poder luchar contra los X-Men!
Para eso, desarrollé la siguiente API Rest en NodeJS y Express con una Base de Datos en MongoDB, la cual le permitirá a Magneto detectar rapidamente si un humano es mutante basándose en su secuencia de ADN.

## Instrucciones

Para ver este proyecto, primero asegurese de tener instalado [node](https://nodejs.org/es/) en la version 12.16.3

1. git clone https://github.com/codingmacandcheese/MeLiChallengeMutants.git
2. npm install
3. nodemon server

Hecho esto, ya podrás realizar llamadas a la API sin inconvenientes.

## API 

## Servicio Mutant

Recibe un array de Strings que representa una secuencia de ADN y devuelve si la misma pertenece a un mutante o no.

- **URL:** https://melichallengemutants.herokuapp.com/mutant/

- **Method:** POST

- **Body Params:** JSON con la secuencia de ADN. Se debe enviar de la siguiente manera:

  ```javascript
  {"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]}
  ```

 - **Respuestas:** 
  
    - 200-OK: Mutante. 
    - 403-Forbidden: No Mutante.
    - 400: Error. 
    

## Servicio Stats

Devuelve estadísticas de las verificaciones de ADN hechas.

- **URL:** https://melichallengemutants.herokuapp.com/stats

- **Method:** GET

 - **Respuesta:** 
  
    - 200: Estadísticas. Se ven de la siguiente manera:

    ```javascript
    {
        "count_mutant_dna": 40,
        "count_human_dna": 100,
        "ratio": 0.4
    }
    ```

    - 400: Error. 
