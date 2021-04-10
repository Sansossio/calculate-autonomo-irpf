const sections = require("./sections")

function numberParse (n) {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
  })
}

function calculate (amount = 30000) {
  let totalIrpf = 0

  let prevMax = 0

  for (const section of sections) {
    const partialAmount = Math.min(amount - prevMax, section.max - prevMax)

    totalIrpf += partialAmount * section.irpf
    prevMax = section.max

    if (amount <= section.max) {
      break
    }
  }

  const yearly = amount - totalIrpf

  return {
    net: {
      yearly: numberParse(yearly),
      monthly: numberParse(yearly / 12)
    },
    totalIrpf,
    percentage: +(totalIrpf / amount * 100).toFixed(2)
  }
}

console.log(
  JSON.stringify(calculate(
    +process.argv.slice(2)[0]
  ), null, 2)
)

module.exports = calculate