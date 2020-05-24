it('sem testes', () => {})

/*const getSomething = callback => {
 setTimeout(() => {
   console.log('respondendo...')
   callback(12);
 }, 1000)
}*/
const getSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('respondendo...')
      resolve(13);
    }, 1000)
  })
}

/*const system = () => {
  console.log('init');
  getSomething(some => console.log(`Something is ${some}`));
  console.log('end')
}*/

/*const system = () => {
  console.log('init');
  getSomething(some => {
    console.log(`Something is ${some}`)
    console.log('end');
  })
}*/

const system = async () => {
  console.log('init');
  const some = await getSomething()
    console.log(`Something is ${some}`)
  console.log('end')
}

system();