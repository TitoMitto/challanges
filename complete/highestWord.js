function high(x){
    let highMap = {};
    x.split(" ").forEach((item)=>{
        let total = item.split("").reduce((total, curr)=> total+ (curr.toUpperCase().charCodeAt(0) - 64), 0)
        highMap[total]? highMap[total].push(item): highMap[total] = [item]
    })
    return Object.entries(highMap).pop()[1].shift();
}

console.log(high("take me to semynak semxnal"))