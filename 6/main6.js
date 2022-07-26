let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John", 'jhv']
}

//1. Создайте поверхностную копию объекта user
let copyUser;
copyUser = {... user}

//Проверка:
// console.log(user===copyUser)- что должно быть в консоли?                     true
// console.log(user.friends===copyUser.friends)- что должно быть в консоли?     true


//2. Полная (глубокая) копия объекта user
let deepCopyUser;
deepCopyUser = {...user, friends: [...user.friends]}

//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?                  false
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?  false


//3. Поверхностная копия массива students
let copyStudents;
copyStudents = [...students]

//Проверка:
// console.log(students === copyStudents) - что должно быть в консоли?        true
// console.log(students[0] === copyStudents[0]) - что должно быть в консоли?  true


//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents;
deepCopyStudents = students.map( s => s = {...s})
console.log(deepCopyStudents)
//Проверка:
// console.log(deepCopyStudents === students) - что должно быть в консоли?         false
// console.log(deepCopyStudents[0] === students[0]) - что должно быть в консоли?   false


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль


//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName;
function arraySortedByName(a, b) {
    if(a.name < b.name){return -1}
    if(a.name > b.name){return 1}
    return 0
}
sortedByName = deepCopyStudents.sort(arraySortedByName)
console.log(sortedByName);


//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores;
console.log(sortedByScores);


//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents;
bestStudents = students.filter( s => {return (s.scores >= 100)})
console.log(bestStudents)


//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents;
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents;
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents;
notMarriedStudents = students.filter( s => s.isMarried === false )
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames;
studentsNames = students.map( s => s.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace;
console.log(nameWithSpace)
let namesWithComma;
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents;
trueStudents = students.map( s => (s, s.isStudent{true}))
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick;
studentsWithMarriedNick = students.map( s => (s))
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann;
ann
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent;
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

let scoresSum;
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
   //..............................
}
console.log(addFriends(students));









