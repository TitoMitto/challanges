function moveZeros(arr) {
    let zeros = []
    return [...arr.filter((any)=> any === 0? zeros.length == zeros.push(0):true), ...zeros]
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))