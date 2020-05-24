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



