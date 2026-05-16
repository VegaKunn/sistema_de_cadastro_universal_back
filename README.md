# Sistema de Cadastro Universal - Backend

Projeto backend desenvolvido para a faculdade UNIVESP utilizando AdonisJS.

O sistema fornece uma API responsável pelo gerenciamento universal de cadastros, permitindo integração com o frontend da aplicação.

---

## Tecnologias Utilizadas

- AdonisJS 7
- TypeScript
- SQLite
- Lucid ORM
- VineJS
- JWT/Auth
- ESLint
- Prettier

---

## Funcionalidades

- Cadastro de usuários
- Gerenciamento de dados
- API REST
- Validação de dados
- Autenticação
- Integração com banco SQLite

---

## Como Executar o Projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar migrations

```bash
node ace migration:run
```

### 3. Iniciar ambiente de desenvolvimento

```bash
npm run dev
```

### 4. Build do projeto

```bash
npm run build
```

### 5. Executar projeto em produção

```bash
npm run start
```

---

## Scripts Disponíveis

| Comando           | Descrição                           |
| ----------------- | ----------------------------------- |
| npm run dev       | Executa servidor em desenvolvimento |
| npm run start     | Executa servidor em produção        |
| npm run build     | Gera build da aplicação             |
| npm run test      | Executa testes                      |
| npm run lint      | Executa lint                        |
| npm run format    | Formata o código                    |
| npm run typecheck | Verifica tipagem TypeScript         |

---

## Dependências Principais

```json
"dependencies": {
  "@adonisjs/auth": "^10.0.0",
  "@adonisjs/core": "^7.0.0",
  "@adonisjs/cors": "^3.0.0",
  "@adonisjs/lucid": "^22.0.0",
  "@adonisjs/session": "^8.0.0",
  "@adonisjs/shield": "^9.0.0",
  "@vinejs/vine": "^4.3.0",
  "better-sqlite3": "^12.6.2"
}
```

---

## Banco de Dados

O projeto utiliza SQLite como banco de dados principal.

Arquivo padrão:

```bash
tmp/db.sqlite3
```

---

## Participantes

| Nome                                | RA       |
| ----------------------------------- | -------- |
| Adriano Araujo da Cruz              | 20235386 |
| André Jesus Cardoso de Oliveira     | 23226686 |
| Luciana da Cruz Nascimento          | 23210700 |
| Luiz Fernando de Oliveira Rodrigues | 23212174 |
| Marcos José de Sousa Barros         | 1707572  |
| Thiago Garcia Costa                 | 23223697 |
| Thomas Jonatas Santos de Carvalho   | 23209119 |
| Wender Augusto Vega                 | 23214669 |

---

## Instituição

Projeto acadêmico desenvolvido para a UNIVESP.
