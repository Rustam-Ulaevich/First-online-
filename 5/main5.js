const arr= ['Rustam', 2,'Gulnara', 0, 'Vova', 'anna', 100, 'Almaz',  11, 'ura', 1]

const compareFunc = (a,b) => {
    console.log(a, b)
    if( a.toString().toLowerCase() <= b.toString().toLowerCase() ){
        return -1
    } else {
        return 1
    }
}
//console.log(arr.sort(compareFunc))

console.log([...arr.filter( ar => typeof ar === "number").sort((a, b) => a - b ),
   ...arr.filter( ar => typeof ar === "string").sort((a, b) => a - b)])

let students = [
    {name: "Bob", age: 22, isMarried: true, scores: 85},
    {name: "Alex", age: 21, isMarried: true, scores: 90,},
    {name: "Nick", age: 20, isMarried: false, scores: 120},
    {name: "John", age: 19, isMarried: false, scores: 100},
    {name: "Helen", age: 20, isMarried: false, scores: 110},
    {name: "Ann", age: 20, isMarried: false, scores: 105},
];

console.log([...students].sort((a, b) => a.name < b.name ? -1 : 1))
console.log([...students].sort((a, b) => a.scores - b.scores))


// ----- Bubble sort -----

const array = [15, 4 , 0 , 2, -2, 88, -3, 1, 100, 10]

for (let a=0; a<array.length-1; a++){
    for (let i = 0; i < array.length-1-a; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
            // let temp = array[i];
            // array[i] = array[i+1];
            // array[i+1] = temp
        }
    }
}

console.log(array)

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//         // [x[i], x[i + 1]] = [x[i + 1], x[i]]
//         let temp = array[i];
//         array[i] = array[i+1];
//         array[i+1] = temp
//     }
// }
// console.log(array)
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//         // [x[i], x[i + 1]] = [x[i + 1], x[i]]
//         let temp = array[i];
//         array[i] = array[i+1];
//         array[i+1] = temp
//     }
// }
// console.log(array)
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//         // [x[i], x[i + 1]] = [x[i + 1], x[i]]
//         let temp = array[i];
//         array[i] = array[i+1];
//         array[i+1] = temp
//     }
// }
// console.log(array)
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//         // [x[i], x[i + 1]] = [x[i + 1], x[i]]
//         let temp = array[i];
//         array[i] = array[i+1];
//         array[i+1] = temp
//     }
// }
// console.log(array)
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//         // [x[i], x[i + 1]] = [x[i + 1], x[i]]
//         let temp = array[i];
//         array[i] = array[i+1];
//         array[i+1] = temp
//     }
// }
// console.log(array)
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//         // [x[i], x[i + 1]] = [x[i + 1], x[i]]
//         let temp = array[i];
//         array[i] = array[i+1];
//         array[i+1] = temp
//     }
// }
// console.log(array)
