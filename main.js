function valueOfX(eq) {
    let net = eq.split("=")
    net.forEach((v,i)=>{
        if(/(\-|\+\s)?x(\s\-|\+)?/g.test(v)){
            let symbol = v.match(/(\+|\-)/g);
            
        }
    })
    return net
}


console.log(/(\+|\-)\s(\d)/g.test('x + 1'))

console.log(valueOfX('x + 1 = 9 - 2'))

// x + 1 = 9 - 2
// x + 1 // 9 - 2
// x = 9 - 2 - 1
// x = 