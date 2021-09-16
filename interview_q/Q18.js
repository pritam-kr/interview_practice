var readlineSync = require('readline-sync')

// Create a CLI app which would detect fake news. 
// This app will take news as input and then source.
//  If source is Facebook or whatsapp then it will output user saying, 
// // "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

var news = readlineSync.question("Enter your news \n")
var source = readlineSync.question("Enter your  source of news \n")

if(source.toUpperCase() === 'facebook'.toUpperCase() || source.toUpperCase() === 'whatsapp'.toUpperCase() || source.toUpperCase() === 'telegram'.toUpperCase()){
    console.log(`The ${news} is completely fake if they belongs to facebook, telegram, whatsaap`)
}else{
    console.log('You can read this news')
}
