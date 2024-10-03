
// Create array
// class arrya{
//     constructor(values) {
//         this.arrya =  values
//     }
// }

// const arry = new arrya([1, 2, 3, 4])
// console.log(arry);


//Delete last intex of array
class arrya{
    constructor(values) {
        this.arrya =  values
    }

    deleteIndex() {
        const index = this.arrya.pop()
        console.log(index);
        
    }

    addIndex(ele) {
        const index = this.arrya.push(ele)
        console.log(index);
        
    }


}
const arry = new arrya([1, 2, 3, 4])
console.log(arry);

//delete array
arry.deleteIndex()
console.log(arry);

//push array
arry.addIndex(9)
console.log(arry);


//Shift Unshift etc do it your self


