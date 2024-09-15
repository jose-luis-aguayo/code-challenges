let a = [2]
let b = [20, 30, 12]

function getTotalX(a, b){
let numbers = []
let my = false
let index

    a.sort(function(a, b){return a - b});
    b.sort(function(a, b){return a - b});
    
    for(let i = a[a.length - 1]; i <= b[0]; i ++) {
        
        for(j = a.length - 1; j >= 0; j--){
            if(i%a[j] != 0) { 
                my = true
            } 
        }

        if(my == false) {
            numbers.push(i)
        } else {
            my = false
        }

    }

    
    
    for(let k = b.length - 1; k >= 0; k--){
        
        
        for(let l = 0; l < numbers.length; l++) {
            
            //for each number in b i will check against numbers array
            if(b[k]%numbers[l] != 0) { 
              
              index = numbers.indexOf(numbers[l])
              if(index > -1) {
                numbers.splice(index, 1)
              }
              
            } 


        }

        
        
    }

    

    return numbers.length

}

console.log(getTotalX(a, b))