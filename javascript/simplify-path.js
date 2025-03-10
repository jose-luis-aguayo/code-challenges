/**
 * @param {string} path
 * @return {string}
 */
 // "path str="/home/" =>"/home" "
 // path = /home

// var simplifyPath = function(path = '/a/b/c/../././//d') {

    var simplifyPath = function(path = '/home/..') {
    
    // '/a/b/c/../././//d' => 

    //'a' 'b' 'c' '..' '.' '.' , '', '', 'd'
    // .. => pop()
    // . => nothing
    // '' => 
    // `/[].join(/)`

    // stack || a c 

    let pathToAnalize = path.split('/') // split('/'), push(), pop()
    let simplifiedPath = []

    console.log(pathToAnalize)

    for(let i = pathToAnalize.length - 1 ; i >= 0 ; i --){

        
        if ( pathToAnalize[i] == '..') {

            pathToAnalize.splice(i - 1, 2)
            
            
        } else 

        if( pathToAnalize[i] !== '.' && pathToAnalize[i] !== '' ) {
            simplifiedPath.push(pathToAnalize[i])
        }
        
    }

    
    simplifiedPath.reverse()
    return `/${simplifiedPath.join('/')}`
 }


 console.log(simplifyPath())
 