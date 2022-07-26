const todo1 = 'qwer'
const todo2 = 'asdf'

const todolists = [
    {id: todo1, title: 'what to learn', filter: 'all'},
    {id: todo2, title: 'what to learn', filter: 'all'}
]

const tasks = {
        [todo1]: [
            {id: 12, title: 'JS', isDone: false},
            {id: 13, title: 'CSS', isDone: false},
            {id: 14, title: 'HTML', isDone: false}
        ],
        [todo2]: [
            {id: 21, title: 'milk', isDone: false},
            {id: 22, title: 'JS', isDone: false},
            {id: 23, title: 'JS', isDone: false}
        ],
    }

    //REDUCE

const nums = [5, 12, 0, 3, 17, 6]

console.log(nums.reduce((a, el)=> a + el, 0))
console.log(nums.reduce((a, el)=> a > el ? a : el))
console.log(nums.reduce((a, el)=> a < el ? a : el))

let students = [
    {id: 1, name: "Bob", age: 22, isMarried: true, scores: 85},
    {id: 2, name: "Alex", age: 21, isMarried: true, scores: 90,},
    {id: 3, name: "Nick", age: 20, isMarried: false, scores: 120},
    {id: 4, name: "John", age: 19, isMarried: false, scores: 100},
    {id: 5, name: "Helen", age: 20, isMarried: false, scores: 110},
    {id: 6, name: "Ann", age: 20, isMarried: false, scores: 105},
];

//console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))
// console.log(students.reduce((acc, el) => acc + el.scores , 0))
// console.log(students.reduce((acc, el) => acc + el.age , 0))
// console.log(students.map( s => ({...s, scores: s.scores + 10})))
// console.log(students.reduce((acc, el) => {
//     acc.push({...el, scores: el.scores + 10})
//     return acc
// } , []))
// console.log(students.reduce( (ass, el) => {
//     ass[el.id] = {...el}
//     delete acc[el.id].id
//     return acc
// }, {}))

let arr = [1, 2, 3, 4]

function grow(x){
return x.reduce((acc, el) => acc * el)

}

console.log(grow(arr))
