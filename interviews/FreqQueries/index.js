function freqQuery(queries) {
  const data = []
  const freq = new Map()
  
  const output = []

  const insert = el => {
      freq.set(el, (freq.get(el) || 0) + 1)
      data.push(el)
      return
  }
  
  const del = el => {
      const index = data.indexOf(el)
      if (index === -1) return;
      
      freq.set(el, (freq.get(el) || 1) - 1) 
      return data.splice(index, 1)
  }
  
  const checkFreq = el => {
      const freqs = [...freq.values()]
      // console.log(freqs, el)
      return freqs.some(v => v === el)
  }

  const handleOperation = (op, el) => {
      switch(op) {
          case 1:
              return insert(el)
          case 2:
              return del(el)
          case 3: 
              const isMatch = checkFreq(el)
              const out = isMatch ? 1 : 0
              output.push(out)
              return;
          default: return;
      }
  }

  
  for (const [operation, element] of queries) {
      console.log({ operation, element })
      handleOperation(operation, element)
  }
  
  console.log({ output })

  return output
}
