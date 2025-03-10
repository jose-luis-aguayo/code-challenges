// input 07:05:45PM
// steps
// Get P or A
// Get the first two digits of the time
// Add or substrate
// Build result string


function timeConversion(time) {
    const format = time.at(-2)
    let hours = time.at(0) + time.at(1)
    let militaryHours = 0

    
    if ( format == 'P') {

        militaryHours = 12 + (+hours)
        console.log(`${militaryHours}:${time.slice(3, 8)}`)

    } else if ( format == 'A') {
        if (hours == 12) hours = '00'

        console.log(`${hours}:${time.slice(3, 8)}`)

        
    }

        

}

timeConversion('12:05:45PM')