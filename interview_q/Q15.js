// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

const persOne = {
    name: 'Ram',
    age: 25,
    yuga: 'Treta'
}
const persTwo = {
    name: 'Krishna',
    age: 31,
    yuga: 'Dwapar'
}

function checkAge(one, two){
    if(one.age>two.age){
        return one
    }else{
        return two
    }
}

const checkingAge = checkAge(persOne, persTwo)

console.log(`The person ${checkingAge.name} getting old ${checkingAge.age} years`)