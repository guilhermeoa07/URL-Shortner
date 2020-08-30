## Url-Shortner

### Requisitos:
    * DOCKER
    * DOCKER-COMPOSER

### Init
    1 - Executar o comando "docker build --tag=urlshortner ./"
    2 - Execurtar o comando "docker up -p 3333:3333 urlshortner"

### Infos: 

    * Segue um exemplo.env que deve ser modificado para o .env e se necessario editado previamente.

### Rotas: 
   * Metodo: POST 
    caminho: '/url' 
    Detalhes: gera nova url
    Params: não necessario
    Body: { url: 'url a ser reduzida aqui' }
    Exemplo: 

            curl --location --request POST '127.0.0.1:3333/url' \
            --header 'Content-Type: application/json' \
            --data-raw '{
            "url": "https://www.schoolofnet.com/forum/topico/docker-compose-mongo-mongoose-senha-1512"
            }'

   * Metodo: GET 
    caminho: '/url' 
    Detalhes: busca os dados da url salva no banco.
    Params: não necessario
    Body: { url: 'url aqui' }
    Exemplo: 

            curl --location --request GET '127.0.0.1:3333/url' \
            --header 'Content-Type: application/json' \
            --data-raw '{
            "url": "https://www.schoolofnet.com/forum/topico/docker-compose-mongo-mongoose-senha-1512"
            }'

   * Metodo: GET 
    caminho: '/url/:id' 
    Detalhes: Busca url pelo idMongo.
    Params: idMongo
    Body: não necessario.
    Exemplo:

            curl --location --request GET '127.0.0.1:3333/5f4b4a6fe1d87700232f6cb2'