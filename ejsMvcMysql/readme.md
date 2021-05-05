# Mini aplicação monolítica, MVC com MYSQL :wink:

Apenas um pequeno exemplo de como podemos estruturar uma aplicação MVC com EJS :smile:

### Estruturação do repo

```bash
├── controllers
│   ├── userCtr.js
├── database
│   ├── connection.js
├── models
│   ├── User.js
├── routers
│   ├── userRouter.js
├── views
│   ├── errors
│   │   ├── error.ejs
│   ├── users
│   │   ├── index.ejs
│   │   ├── registerUser.ejs
│   └── login.ejs
├── script.sql
├── .gitignore
└── README.md
```

---

### Antes de começar :eyes:

Antes de subir o servidor Node.JS, crie o banco de dados, o script esta `script.sql` (Foi utilizado banco de dados **MYSQl**)

```sql
DROP DATABASE IF EXISTS TesteDB;
CREATE DATABASE IF NOT EXISTS TesteDB;

USE TesteDB;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  
  PRIMARY KEY (id)
);

INSERT INTO users (name, email) VALUES
  ("Vinicius Vasaconcelos", "vinicius@email.com.br"),
  ("Leandro Almeira", "leandro@email.com.br"),
  ("Junior", "junior@email.com.br");
```

---

### Instale as dependências

```javascript
  npm install
```

```javascript
  // esta sendo usado express, mysql2, ejs e nodemon
  "dependencies": {
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "mysql2": "^2.2.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
```

---

### Para funcionar :rocket:

Para subir o servidor utilize o comando:

```javascript
  //o servidor escutará em http://localhost:3000/
  npm start
```

Existe poucas rotas funcionando :smile:

```javascript
  GET: /                       -> Renderiza um formulário

  GET: /users/showViewRegister -> Renderiza um formulário

  GET: /users/                 -> Renderiza uma lista com todas as pessoas

  GET: /users/:email           ->  Não faz nada

  POST: /users                 -> Não faz nada
```