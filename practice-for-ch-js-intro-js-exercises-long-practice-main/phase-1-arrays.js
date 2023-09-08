// Your code here
Array.prototype.uniq = function() {
    let arr = []

    for (let i = 0; i < this.length; i++) {
        if (arr.indexOf(this[i]) === -1) {
            arr.push(this[i])
        }
    }

    return arr
}

console.log([1,2,2,3,3,3].uniq())