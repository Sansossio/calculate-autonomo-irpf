const calculate = require('calculate-autonomo-irpf')

console.log(
  calculate(
    +process.argv.slice(2)[0]
  )
)
