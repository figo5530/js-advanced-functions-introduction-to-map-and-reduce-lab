// Your code here

function mapToNegativize(arr) {
    return arr.map((i) => -i)
}

function mapToNoChange(arr) {
    return arr.map((i) => i)
}

function mapToDouble(arr) {
    return arr.map((i) => i*2 )
}

function mapToSquare(arr) {
    return arr.map((i) => i*i)
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce((a,c) => a + c, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i]) return true
    }
    return false
}