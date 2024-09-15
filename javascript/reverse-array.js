

//first attempt
function reverseArray(a) {
    let b = []

    for(let i = a.length -1; i >= 0; i--){
        b.push(a[i])
    }

    return b
}

//after research
function reverseArray2(a) {
    return a.reverse()
}

console.log(reverseArray2([1, 2, 3]))