// Add your functions here
function map(array, funct) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(funct(array[i]))
    }
    return result
}

function reduce(array, funct, start) {
    let result = 0
    if (start) result = start;
    for (let i = 0; i < array.length; i++) {
        result = funct(result, array[i])
    }
    return result
}