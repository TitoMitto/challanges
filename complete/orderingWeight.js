function orderWeight(strng) {
    let weightMap = {}
    strng.split(' ').forEach((item)=>{
        let total = item.split("").reduce((total, curr)=> total + Number(curr), 0)
        if(weightMap[total]){
            weightMap[total].push(item)
        }else{
            weightMap[total] = [item]
        }
        weightMap[total].sort()
    })
    return [...Object.entries(weightMap).map((a)=> a[1].join(' '))].join(' ')
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"))