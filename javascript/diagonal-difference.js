function diagonalDifference(a){

    let numberOfRows = a.length;
    let diagonalA = 0, diagonalB = 0;
    let endRow = numberOfRows - 1;

    for(let i = 0; i < numberOfRows; i ++){
        let row = a[i]
        let rowB = a[endRow];

        diagonalA += row[i];
        diagonalB += rowB[i];

        endRow--;
        
    }

     
    return Math.abs(diagonalA - diagonalB)
}

diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])