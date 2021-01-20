// Add your functions here

function map (array, callBack){
    let arr = []
    array.forEach(elem => arr.push(callBack(elem)))
    return arr
}

function reduce(array, func, startingPoint){
    
    let next;
    let start;
    if (startingPoint){
        next = startingPoint
        start = 0
    } else {
        next = array[0]
        start = 1
    }
    for (let i=start; i < array.length;i++){
        next = func(next, array[i])
    }
    return next 
} 


