class ArrayList {
    constructor() {

        this.array = [...arguments];
    }
    myPop() {
        this.array.pop();
    }
    clear() {
        this.array = [];
    }
    myPush() {
        this.array.push(...arguments);
    }
    myShift() {
        this.array.shift(...arguments);
    }
    myUnshift() {
        this.array.unshift();
    }

    myMap(func) {
        return this.array.map(func);
    }
    myFilter(func) {
        return this.array.filter(func)
    }

    myConcat() {
        this.array.concat(...arguments)
    }
    myReduce() {
        this.array.reduce();
    }
    mFind(func) {
        this.array.find(func);
    }
}


myArray = new ArrayList(4, 5, 6, 5, 2, 8, 66);
myArray.myPop();
logIt = function(el) {
    console.log(el)
}
myArray.myMap(logIt);
// console.log(myArray.array);

for (let el in myArray) {
    console.log(el)
}