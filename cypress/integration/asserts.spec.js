/// <reference types="cypress" />

it('Equaly', () => {
const a = 1;

//igual a 1
expect(a).equal(1);
// verifica se o numero informado e 1, senao retorna a mensagem 
expect(a, 'Deveria ser 1').equal(1);
//espero que seja igual a 1
expect(a).to.be.equal(1);
//espero que seja 1
expect(a).to.equal(1);
//espero que 'a' nao seja igual a 'b'
expect('a').not.to.be.equal('b')
})

it('Truthy', () => {
  const a = true;
  const b = null;
  let c;
//verifica se o valor informado, corresponde ao esperado
  expect(a).to.be.true;
  expect(true).to.be.true;
  expect(b).to.be.null;
  expect(a).not.to.be.null;
  expect(c).to.be.undefined;
})

it('Object Equality', () => {
  const obj = {
    a: 1,
    b: 2
  }
  //igual
  expect(obj, 'execucao 1').equal(obj)
  expect(obj, 'execucao 2').equals(obj)
  expect(obj, 'execucao 3').eq(obj)
  expect(obj, 'execucao 4').to.be.equal(obj)
  expect(obj, 'execucao 5').to.be.deep.equal({ a: 1, b: 2})
  expect(obj, 'execucao 6').eql({ a: 1, b: 2})
  //se correspode ao informado
  expect(obj, 'execucao 7').include({ b: 2 })
  expect(obj, 'execucao 8').to.have.property('b')
  expect(obj, 'execucao 9').to.have.property('b', 2)
  expect(obj, 'execucao 10').to.not.be.empty
  expect({}).to.be.empty
})

it('Arrays', () => {
  const arr = [1, 2, 3]

  //espera-se que tenha essa sequencia
  expect(arr, ' executando arrays 1').to.have.members([1, 2, 3])
  //espera-se que tenha essa sequencia
  expect(arr, ' executando arrays 2').to.include.members([1, 3])
  //nao espera-se
  expect(arr, ' executando arrays 3').to.not.be.empty
  expect([]).to.be.empty
})

it('Types', () => {
const num = 1
const str = 'String'

//espera-se que seja um numero
expect(num).to.be.a('number')
//espera-se que seja uma string
expect(str).to.be.a('string')
//espera-se que seja um object
expect({}).to.be.an('object')
//espera-se que seja um array
expect([]).to.be.an('array')

})

it('String', () => {
  const str = 'String de teste'

  expect(str).to.be.equal('String de teste')
  //tamanho '15'
  expect(str).to.have.length(15)
  //contem a palavra 'de'
  expect(str).to.contains('de')
  //iniciado com a palavra 'String'
  expect(str).to.match(/String/)
  //termina com a palavra teste
  expect(str).to.match(/teste$/)
  //tamanho
  expect(str).to.match(/.{15}/)
  //se nao contem numeros
  expect(str).to.match(/\D+/)
  //se contem apenas letras
  expect(str).to.match(/\w+/)
})
it("Numbers", () => {
  const number = 4
  const floatNumber = 5.2123

  //igual a 4
  expect(number).to.be.equal(4)
  // se esta acima de 3
  expect(number).to.be.above(3)
  //abaixo de 7
  expect(number).to.be.below(7)
  // se esta igual ao informado
  expect(floatNumber).to.be.equal(5.2123)
  //se o numero esta proximo do informado
  expect(floatNumber).to.be.closeTo(5.2, 0.1)
  expect(floatNumber).to.be.above(5)
  
})