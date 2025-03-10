

function flippingBits(n) {
    // Write your code here
    let numberInBase2 = n.toString(2).split('');
    let bitsToAdd = Array(32 - numberInBase2.length).fill('0')
    
    numberInBase2.unshift(...bitsToAdd)

    

    for(i = 0; i < numberInBase2.length; i ++) {
        if(numberInBase2[i] == '0') {
            numberInBase2[i] = '1'
        } else {
            numberInBase2[i] = '0'
        }
    }
    
    let numberInbase10 = parseInt(numberInBase2.join(''), 2)
    

    return numberInbase10
}


flippingBits(1)


module.exports = flippingBits;