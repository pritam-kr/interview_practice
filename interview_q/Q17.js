// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.

const persOne = {
    name: 'Ram',
    power: 2500,
    yuga: 'Treta'
}
const persTwo = {
    name: 'Krishna',
    power: 2325,
    yuga: 'Dwapar'
}

function checkPower(one, two){
    var powerOne = Number(one.name.length)*35
    var powerTwo = Number(two.name.length)*35
    if(powerOne>powerTwo){
        return one
    }else{
        return two
    }
}

const checkingPower = checkPower(persOne, persTwo)

console.log(`The Person ${checkingPower.name} has more power based on name.`)