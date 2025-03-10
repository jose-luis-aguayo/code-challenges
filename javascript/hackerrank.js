let strings = ['aba', 'baba', 'aba', 'xzxb'];
let queries = ['aba', 'xzxb', 'ab']



function matchingStrings(strings, queries) {
    let result = Array.from(Array(queries.length).keys());

    
    
    
    //strings is the array where I am going to search
    //queries is the list of strings to be searched

    for( let i = 0; i < queries.length; i ++ ) {
        result[i] = 0
        for ( let j = 0; j < strings.length; j++) {
            if ( queries[i] === strings[j] ) {
                result[i] = result[i] + 1;
            }
        }
    }

    
    return result

}

/*
function matchingStringsRecursive(strings = ['aba', 'baba', 'aba', 'xzxb'], queries = ['aba', 'xzxb', 'ab'], numberOfStrings = 0) {
    if ( numberOfStrings == strings.length ) {
        return
    }

    console.log(strings[numberOfStrings])
    matchingStringsRecursive(strings = ['aba', 'baba', 'aba', 'xzxb'], queries = ['aba', 'xzxb', 'ab'], numberOfStrings + 1) 
}

//matchingStringsRecursive()
*/


module.exports = matchingStrings;

