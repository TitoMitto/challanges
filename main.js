function valueOfX(eq) {
    let net = eq.split("=").map((item)=> item.trim())
    if(net[1].includes("x")) net = net.reverse()
    
    if(net[0].match(/(\-|\+\s)?x/g)) {
        let x  = net[0].match(/((\-|\+)\s)*x/g)
        console.log(x)
        net[0] = net[0].replace(/((\-|\+)\s)*x/g,"").trim()
        net[0] = net[0].replace(/\-/g, "s").replace(/\+/g, "a")
        net[0] = net[0].replace(/a/g, "-").replace(/s/g, "+").replace(/^(\d+)/g, "- $1")
        net[1] = `${net[1]} ${net[0]}` 
        net[0] = x[0].replace("+ ", "");
        if(net[0] == "- x"){
            net[0] = "x"
            net[1] = net[1].replace(/\-/g, "s").replace(/\+/g, "a")
            net[1] = net[1].replace(/a/g, "-").replace(/s/g, "+").replace(/^(\d+)/g, "- $1") 
        }
    }

    return eval(net[1])//eval(net[1])
}

console.log(valueOfX('x - 9 + 9 = 9 - 2'))

console.log(valueOfX('9 - 3 + x = 8 + 7'))

console.log(valueOfX('9 - x + 5 = 8 + 7'))

// x + 1 = 9 - 2
// x + 1 // 9 - 2
// x = 9 - 2 - 1
// x = 