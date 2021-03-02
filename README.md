## E-Commerce Builderall - Front-end

Prova: Desenvolva um sistema ecommerce simples utilizando boas práticas, preferencialmente vindas de metodologias como SOLID, KISS (bônus TDD/BDD).

Tecnologias:

* Frontend: SPA em Vue 2.5/3
* Backend: Api Laravel

Demonstração:
https://youtu.be/qWuhB6DEaNY

## Instalar o Vue CLI
Pode não ser necessário, mas como os modos de desenvolvimento e build usam alguns comando que dependem dessa interface, é melhor deixar instalado.
```
npm install -g @vue/cli
```

## Clone o projeto
```
git clone https://github.com/dudstecnologia/desafio-builderall-front.git
```

## Acesse a pasta do projeto clonado
```
cd desafio-builderall-front
```

## Instalar as dependências do projeto
```
npm install
```

## Criar o arquivo de variáveis baseado no modelo
Utilize o comando cp no Linux, e copy no Windows
```
cp config.js.example config.js
```

## Alterar a URL Base no arquivo config.js de acordo com o seu ambiente
Por padrão eu já deixei o endereço que é utilizado pelo servidor de desenvolvimento do Laravel, altere apenas se for necessário.
```
API_URL: 'http://127.0.0.1:8000/api'
```

## Iniciar a aplicação em modo de desenvolvimento (Ideal para testar)
Se a porta 8080 não estiver ocupada, ela será usada nesse modo. Logo o endereço para teste será: http://localhost:8080/
```
npm run serve
```

## Acesso a área restrita
Para acessar a área restrita é necessário informar um dos sequintes endpoints:

* /admin
* /login

## Credenciais para acesso a área restrita
* email = admin@email.com
* senha = password

## Credenciais do PayPal
Ao acessar o sistema, na primeira tela (Dashboard), é necessário que informe suas credenciais de SandBox do PayPal para ser utilizado nas compras na área pública do e-commerce.
