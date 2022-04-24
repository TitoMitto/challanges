function validSolution(board) {
    let lines2 = board.map((a, i) => [...board.map((a) => a[i])])
    if (board.some((line) => line.reduce((t, curr) => t + curr, 0) !== 45)) return false
    if (lines2.some((line) => line.reduce((t, curr) => t + curr, 0) !== 45)) return false
    let boxes = Array(9).fill([])
    let box = 0;

    while(boxes.some((a)=> a.length < 9)) {
        for(var i in board){
            let [a, b, c] = board[i];
            boxes[box] = [...boxes[box], a, b, c]
            board[i] = board[i].slice(3)
            if(boxes[box].length === 9) box += 1;
        }
    }

    if (boxes.some((line) => line.reduce((t, curr) => t + curr, 0) !== 45)) return false

    return true;
}


console.log(validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
]
))





/*  1 2 3 4 5 6 7 8 9
    2 3 1 5 6 4 8 9 7
    3 1 2 6 4 5 9 7 8
    4 5 6 7 8 9 1 2 3
    5 6 4 8 9 7 2 3 1
    6 4 5 9 7 8 3 1 2
    7 8 9 1 2 3 4 5 6
    8 9 7 2 3 1 5 6 4
    9 7 8 3 1 2 6 4 5 */