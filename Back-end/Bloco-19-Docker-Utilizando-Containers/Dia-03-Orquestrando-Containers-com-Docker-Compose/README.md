# Orquestrando Containers com Docker Compose

Assimilação e aplicação dos conceitos de Networks, Volumes e criação de arquivos para Docker Compose.

Exercícios:
- Designar o volume de um container com a imagem httpd:2.4 com o arquivo missao_trybe.html.
- Criar e testar containers criados com Docker Compose.
- Relacionar services do docker-compose.

## Comandos Docker

Exercício 1:

$ docker run -dit --name container-exercise-apache -v ~/trybe/trybe_course/Back-end/Bloco-19-Docker-Utilizando-Containers/Dia-03-Orquestrando-Containers-com-Docker-Compose/exercise1:/usr/local/apache2/htdocs/ -p 4545:80 httpd:2.4

Link de acesso ao html: http://localhost:4545/missao_trybe.html

Exercício 3:

Ainda é preciso executar o comando npm install dentro do diretório my-app para depois subir o compose com   $ docker compose up -d
