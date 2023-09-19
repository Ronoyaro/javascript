function testeInterval() {
  let total = 0;
  const incremento = 100
  setInterval(() => {
    total+= incremento
    console.log(total++)
  }, 2000)
}

// testeInterval()