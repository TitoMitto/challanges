

var recoverSecret = function(triplets) {
    let letters = [];
    while( triplets.some((siblings)=> siblings.length > 0)) {
        for(let [first] of triplets ){
            if(!first) continue
            let allContains = triplets.filter((a)=> a.includes(first));
            if(allContains.every(([a], i)=> a == first)){
                if(!letters.includes(first)){
                    letters.push(first)
                }
            }
        }
        triplets = triplets.map((triplet)=> triplet.filter((a)=> !letters.includes(a)))
    }
    return letters.join('')
}




console.log(recoverSecret([
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
  ]));
