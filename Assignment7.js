//Assignment 7

// 1. Take an array of objects of employees created above and print those employees whose age is less than 50.

const employeeArray = [
    {
        name : "Shruti Gova",
        email : "abdc@gmail.com",
        age : 20,
        address : "Shajapur",
        phoneNumber : "1234567890",
        gender : "Female",
        isMarried : false
    },
    {
        name : "Sanjay",
        email : "abcd@gmail.com",
        age : 60,
        address : "Shajapur",
        phoneNumber : "1234567890",
        gender : "Male",
        isMarried : true
    },
    {
        name : "Rahul",
        email : "abcd@gmail.com",
        age : 70,
        address : "Shajapur",
        phoneNumber : "1234567890",
        gender : "Male",
        isMarried : false
    }

]

let check = employeeArray.filter((e) => {
    return e.age < 50;
})

console.log(check); 
