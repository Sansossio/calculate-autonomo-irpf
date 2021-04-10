# Calculate Spain Autonomo IRPF 2021

Example
```js
const calculate = require('calculate-autonomo-irpf')

console.log(
  calculate(32000)
)
```

Output:
```json
{
  "net": {
    "yearly": "€24,234.50",
    "monthly": "€2,019.54"
  },
  "totalIrpf": 7765.5,
  "percentage": 24.27
}
```

See full example [here](https://github.com/Sansossio/calculate-autonomo-irpf/tree/master/example)