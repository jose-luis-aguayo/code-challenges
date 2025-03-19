function lonelyInteger(a){

    if(a.length == 1){
        return a[0]
    }
    
    a.sort((a,b) => a - b)
    
    
    
    let prevNumber, nextNumber, currentNumber;
    
    
    
    for(let i = 1; i < a.length ; i ++){
        currentNumber = a[i];
        nextNumber = a[i+1];
        prevNumber = a[i-1];
        
        
        if(i == a.length - 1) {
            if(currentNumber != prevNumber)
                {
                    return currentNumber
                }
        } else if(currentNumber != prevNumber && currentNumber != nextNumber)
        {
            return currentNumber
        }
    }
}


lonelyInteger([1])