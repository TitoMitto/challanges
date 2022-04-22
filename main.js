function valueOfX(eq) {
    let [left, right] = eq.split("=")
    if(right.includes("x"))[left, right] = [right, left]
    
    return (left.includes("- x")? - 1: 1) * eval(eval(right) - eval(left.replace("x", 0)))
  }

console.log(valueOfX('x - 9 + 9 = 9 - 2'))

console.log(valueOfX('9 - 3 + x = 8 + 7'))

console.log(valueOfX('9 - x + 5 = 8 + 7'))

// x + 1 = 9 - 2
// x + 1 // 9 - 2
// x = 9 - 2 - 1
// x = 