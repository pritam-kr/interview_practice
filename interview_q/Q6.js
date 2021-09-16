// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?

var readlineSync = require('readline-sync')

var totalMark = 0;
var highestMark = 0;
var averageMark;
var userName;
var testMark;
var preMark;
var finalMark;

for(i=0; i<2; i++){
    userName = readlineSync.question("Enter your name\n")
    testMark = readlineSync.question("Enter your test marks \n")
    preMark = readlineSync.question("Enter your pre final marks \n")
    finalMark = readlineSync.question("Enter your final marks \n")

    totalMark = totalMark + Number(testMark) + Number(preMark) + Number(finalMark)

    console.log(`Total marks of all students is ${totalMark}`)

    averageMark = totalMark / 2;

    if(totalMark > highestMark){
        highestMark = totalMark
    }

}

var mess = readlineSync.keyInYN(`know average marks of all students and as well as highest marks of the student`)

if(mess == true){
    console.log(`The average marks of all students is ${averageMark} and highest marks of the student is ${highestMark}`)
}else{
    console.log('Thank you for playing')
}