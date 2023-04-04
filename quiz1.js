// get string as output
let message = 'benr'
console.log(message, typeof message)

//get number as output
message = 123
console.log(message, typeof message)

//str n number
let str = "BENR"
let num = 3523
let course = str + num
console.log(course, typeof course)

//integer
let str1 = "12"
let num1 = 1
let total1 = parseInt(str1) + num1
console.log(total1, typeof total1)

//float
let str2 = "1.258"
let num2 = 1
let total2 = parseFloat(str2) + num2
console.log(total2, typeof total2)

//array
let data = ["benr", 3523, true]
console.log(data[0])
console.log(data[1])
console.log(data[2])
console.log(data[3])

//data and key
let user = {
    name: "Anita",
    age: 23,
    faculty: "FKEKK"
}
console.log(user.name)
console.log(user.age)
console.log(user.faculty)

//user interface
let comments = [
    {
        name: "user1",
        date: "1/4/2023",
        msg: "good video",
        like: 2000
    },
    {
        name: "user2",
        date: "2/4/2023",
        msg: "very good video",
        like: 3000
    },
]
console.log(comments[1].msg) //very good video