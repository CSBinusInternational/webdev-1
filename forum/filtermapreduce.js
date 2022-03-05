//filter i sused to filter the data based on a specific attribute
let food=[{name:"pizza",type:"italian"},{name:"burger",type:"american"},{name:"pasta",type:"italian"},{name:"pho",type:"vietnamese"},
{name:"ramen",type:"japanese"}]
let filter=food.filter((item) => {
    return item.type=="italian"
})
console.log(filter)

//map gets one attriute of each item which then can be used to create a new array with either the same values or values based 
//on the operations performed on the original array
let map=food.map((item) => {
    return item.name
})
console.log(map)

//multiply each number in the array by 2 using map
const numbers = [65, 44, 12, 4];
let map2=numbers.map(number => number * 2)
console.log(map2)

//reduce accumulates the value returned by the operations performed on each item in the array and returns a single value
const students=[{name:"john",age:25},{name:"jane",age:30},{name:"bob",age:20},{name:"joe",age:15}]
//getting average age
let reduce=students.reduce((total,student) => {
    return total+student.age
},0)
console.log(reduce)
console.log(reduce/students.length)

