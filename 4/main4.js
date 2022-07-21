// Tests:



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

//Проверка:
// console.log(user===copyUser)- что должно быть в консоли?                     true
// console.log(user.friends===copyUser.friends)- что должно быть в консоли?     true


//2. Полная (глубокая) копия объекта user


//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?                  false
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?  false


//3. Поверхностная копия массива students


//Проверка:
// console.log(students === copyStudents) - что должно быть в консоли?        true
// console.log(students[0] === copyStudents[0]) - что должно быть в консоли?  true


//4*. Полная (глубокая) копия массива students (map)

//Проверка:
// console.log(deepCopyStudents === students) - что должно быть в консоли?         false
// console.log(deepCopyStudents[0] === students[0]) - что должно быть в консоли?   false


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль


//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)


//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)



//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)


//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice



//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)



//7. Сформируйте массив холостых студентов (filter)




//8. Сформируйте массив имён студентов (map)




//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)



//9. Добавьте всем студентам свойство "isStudent" со значением true (map)


//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)


//11. Найдите студента по имени Ann (find)


//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*


//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.









