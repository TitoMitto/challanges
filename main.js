function valueOfX(eq) {
    let net = eq.split("=").map((a) => a.trim())
    let simplified = '';
    net.forEach((v, i) => {
        if (/(\-|\+\s)?x(\s\-|\+)?/g.test(v)) {
            let symbol = v.match(/(\+|\-)/g);
            if (/(\+|\-)\s\d+/g.test(v)) {
                let numb = v.match(/\s(\d+)/g)
                if (i == 0) net[1] = `${net[1]} ${symbol == "+" ? "-" : "+"} ${numb}`
                else net[0] = `${net[0]} ${symbol == "+" ? "-" : "+"} ${numb}`;
                if (i == 0) net[0] = net[0].replace(/\s(\+|\-)\s\d+/g, "")
                else net[1] = net[1].replace(/\s(\+|\-)\s\d+/g, "");
            } else if (/(\+|\-)\sx/g.test(v)) {
                let numb = v.match(/(\d+)\s/g)
                if (numb != null) {
                    net[i] = net[i].replace(/(\d+)\s/g, "")
                    if (i == 0) net[1] = `${net[1]} - ${numb}`
                    else net[0] = `${net[0]} - ${numb}`;
                }
            }
        }
    })
    return net
}

console.log(valueOfX('- x = 9 - 2'))

// x + 1 = 9 - 2
// x + 1 // 9 - 2
// x = 9 - 2 - 1
// x = 