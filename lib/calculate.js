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
  const monthly = yearly / 12
  return {
    annualGross: amount,
    net: {
      yearly: yearly,
      monthly: monthly,
      formatted: {
        yearly: numberParse(yearly),
        monthly: numberParse(monthly)
      }
    },
    totalIrpf,
    percentage: +(totalIrpf / amount * 100).toFixed(2)
  }
}

module.exports = calculate
