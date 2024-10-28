# Cypress Qazando 🚀

## Descrição 📄
Este projeto foi desenvolvido como parte de um curso da Qazando, os testes foram escritos utilizando o framework Cypress. Eles cobrem os seguintes cenários:

- **Teste de Login:** 🔑 Verifica se o usuário consegue fazer login com credenciais válidas.
- **Teste de Cadastro:** 📝 Verifica se o usuário consegue se cadastrar com informações válidas.
- **Teste de Formulário:** 📨 Verifica se os formulários são enviados corretamente com dados válidos e exibem mensagens de erro com dados inválidos.

## GitHub Actions 🤖
Foi criada uma pipeline para automatizar a execução dos testes. A action é acionada em cada push e pull request para a branch `master`. Ela executa os seguintes passos:

1. Configura o ambiente Node.js. 🛠️
2. Instala as dependências do projeto. 📦
3. Executa os testes utilizando Cypress. ✅

## Instalação 💻
Para instalar as dependências do projeto, siga os passos abaixo:

```bash
npm install
```

## Uso 🚀
Para executar os testes via linha de comando, utilize o comando:

```bash
npx cypress run
```

Para executar os testes via interface gráfica, utilize o comando:

```bash
npx cypress open
```