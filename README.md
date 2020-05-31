# Como rodar este projeto
Instalar o cypress
```
npm install cypress --save-dev
```

Abrir o cypress no node_modules
```
node_modules/.bin/cypress open
```

Usa-se quando se tem o nome completo do que deseja buscar
```
'have.text'
```

Usa-se quando se tem parte do nome do que deseja buscar
```
'contain'
```

No css o ponto antes da palavra (.teste), simboliza a classe

A # antes da palavra significa busca por Id.


Comando que permite executar antes de todos
```
before(() => {
  })
```

  Comando que permite executar antes de cada um dos testes
```
beforeEach(() => {
  })
```

Comando para permitir inserir valor
```
type('Aprendendo Cypress')
```

Comando para retardar o tempo de execução
```
{delay:100})
```

Comando usado quando for textField
```
'have.value'
```

Aponta para a própria propriedade
```
'have.prop'
```

Execução via comando
```
no arquivo package.json > "cypress:run": "cypress run"
no terminal:npm run cypress:run
```
Se tiver bugs (além de ser possível verificar no arquivo de vídeos)
```
no terminal: npm run cypress:run -- --spec caminhoDoArquivocomErro (cypress/integration/time.spec.js)
```
Para visualizar a execução do teste
```
npm run cypress:run -- --spec cypress/integration/time.spec.js --headed --no-exit
```

Visualizar no chrome
```
node_modules/.bin/cypress open
npm run cypress:run -- --spec cypress/integration/time.spec.js --browser chrome
```
Se houver erro da execução do npm
```
./node_modules/.bin/cypress run --spec cypress/integration/time.spec.js --browser chrome
```
Executar apenas a pasta "Barriga"
```
./node_modules/.bin/cypress run --spec cypress/integration/barriga/**/*



