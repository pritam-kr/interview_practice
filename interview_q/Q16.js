// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Write a function which takes two objects and return the person with more power.

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

const checkPower = (one, two) =>{
    if(one.power> two.power){
        return one
    }else{
        return two
    }
}

const checking = checkPower(persOne, persTwo)

console.log(`The person ${checking.name}has more power ${checking.power}`)