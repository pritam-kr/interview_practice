# interview_practice

1. What is meant by pass by value and pass by reference
2. How would you distinguish between implicit conversion and explicit conversion in javascript.
3. What are the higher order function?
4. What do you think would be the output if we add an alphabetical string with a number or vice versa?
5. Can you explain the functioning of map function? What kind of function is it?
6. Diff between array and objects? As we make the array of objects, can we do vice versa?
7. What are the datatypes supported by javascript?
8. What is a NaN in JS and what is its type?
9. Difference between “==” and “===”.
10. Explain Hoisting in JS.
11. What is “this” keyword in JS?
12. Difference between x++ and ++x.
13. Tell me the output “let x=“10, console.log(x+1)” and console.log(x++)”. Explain why it’s happening.
14. What is the specific term for converting the data types? —coercion.
15. In how many ways we can convert a string to a number?
16. Difference between parseInt and Number.
17. Tell me the typeof(“”+x) and typeof(“”-x).
18. In jS does variables have a type?
19. How are we able to secret the elements of html and manipulate them?
20. Explain useState.
21. Explain workflow of react.
22. What is JSX?
23. Why does we use className instead of class in jsx?
24. Can you explain virtualDOM? How it is different from HTML DOM?
25. What id a reactElement? How it is different from reactComponent?
26. Difference between Function Parameters and Arguments.
27. Difference between array and object
28. Explain version control
29. Explain CSS Box Model
30. Explain Meta Tags
31. How does .querySelector() work internally?
32. What is an API
33. Difference between innerText and innerHTML
34. Difference between parseInt() an Number()
35. What are promises?
36. Difference between js and jsx
37. Explain how Internet works
38. explain display property in CSS
39. difference between inline, block, inline-block
40. what are semantic tags in html
41. what is a callback. Explain its working
42. explain difference between domElement.addEventListener("click", callbackFun)
    and domElement.addEventListener("click", callbackFun())
43. What are the advantages of using React JS over vanila JS
44. difference between imperative paradigm and declarative paradigm
45. what is a package
46. working of String/Array functions like split, join, slice, indexOf, charAt, reverse
47. what is DOM. Is it different from virtual DOM? explain
48. ways of adding CSS to the HTML document and which is the preferred way?
49. difference between class and id
50. what are the various types of events?
51. Explain render cycle in React ( VISR )
52. Difference between Function declaration and Function Expression.
53. Explain what exactly a promise is & its three states.
54. Why do we use useState()? Explain briefly about setState.
55. Difference between forEach & map
56. What's the role of key in React ?
57. array methods like push pop unshift shift (they can be useful even in coding problem.. So better get ur hands dirty as well)

=================================================================================================================================

1. Create a web app where I can input a text. Now reverse the text and on clicking the button, show the output.

2. Here’s an API. Fetch the name and age of user and show them on the web page. Now check weather the user is eligible for vaccination ( must be above 45 ). If yes, show the name in green colour. API - https://randomuser.me/api/?results=10

3. Here’s an API. Fetch the name and gender of user and show them on the web page. Now check weather the user is male or female. If the user is a female, show the name in pink colour. API - https://randomuser.me/api/?results=10

4. Here' an API. It will give an error. Write a web app, call this API and read the error message. Show the name of the error (not whole error). API - https://randomsuser.me/api/

5. Put a paragraph on web with 16px font size. Now Increase the font size by 4px and vice-versa with the help of two buttons. Now change the colour of paragraph to RED when font size is divisible by 5. ( This question was given by Pranshu (neoGrad) in my mock interview)

6. Create a web app to simulate the dark mode functionality. On clicking the button, background color should change from WHITE to GREY and vice-versa.

7. Create a password checker. When char goes above 10, input border should become green. Now create a button. On clicking the button, show/hide the password. ( change ......... to text and vice versa. ) HINT - you need to change the type of input field

8. Create an array of 10 names. [ "Abhi", "Vishal","Aryan","John",.........upto 10 ]. Now create a button. On clicking the button, show one random name.

9. Create a web app where user can input his/her name and a colour. (put a list of colours from which user can choose one ). On clicking the button, show the name with the same colour which user has entered.

10. Create a game where user has to guess the random number range from 1 to 10. User will input a number between 1 to 10 . On clicking the button, show the user whether he/she has guess the correct number or not

11. Create a web app to simulates the character counter functionality of Twitter. When user starts to type something, counter should starts to decrease from 30. When counter reaches to 15, show it in yellow till 0. When counter reaches to 0, show it in red till negative number ( no min limit ). Now create a button. On clicking the button, show the input text on web page. Also, when counter is less than 0, disable the button.

12. Have a text, and three buttons left, right and center. On clicking right button the text should move to right. Similarly for left and center.

13. Create two input fields where users can input numbers. Highlight the input field whose value is more(You can change the background colour for highlighting). Also, print a message saying which number is the highest

14. Import three fonts from Google fonts. Then create a p tag with some text inside it. Now, create three buttons with these font names. On the clicking button, the text font should change accordingly. Note: You have to import fonts in under 15 minutes too.

15. You need to create three input fields and an output field.
    First, two input fields will take numbers as input. The last input field will take the operator as input.
    Operators are +, -, × and /.
    If the third input field value is + then show in the output field the sum of the first input value + second input value.
    Similarly, if we enter ×, - and / in the third input field.
    Note: Button is not required.
    Bonus for this question: limit the last input field to take only +,-,× and /. Show error if user gives any other input.

16. You have to create a counter. Create two buttons + and -. On clicking the + button increment the counter. Similarly for -.
    Now highlight the counter:
    i. If the counter value is multiple of 3 then highlight the counter with Red colour.
    ii. If the counter value is multiple of 5 then highlight it with Green colour.
    iii. If the counter value is multiple of both 5 and 3 then highlight it with Yellow colour

17. Add a text field. Insert a sentence. Now create a button. On clicking the button, highlight the word in the sentence with most number of characters.

18. You have to create a text field and three button.
    Suppose your input text is github.
    On clicking the first button the text should become like this GITHUB.
    On clicking the second button the text should become like this Github.
    On clicking the third button the text should become like this github.

19. Create an input field where the user can enter his/her full birthday. You have to calculate user age.
    Now create a button to check the following condition. 1. If the age is greater than 18 years then show a message to the user that You can drive. 2. If the age is less than 18 years then show a message that You can't drive.
    BONUS- If the user enters a future date then show an error.

20. Create a paragraph and add this sentence Lorem ipsum dolor sit amet consectetur adipisicing elit as its text node
    now create a button. On clicking that button it should show the number of words present in the abovementioned sentence as an output

21. Here is an API: https://mock-practice.prakhar10v.repl.co/items
    This API will give data about items and their price. Print all the items with their prices in the view.
    Then highlight the item with the least price.

22. You have to create three buttons with the name animal,career and dev.
    Now use the API given below to fetch data using these buttons. The URL is incomplete. You need to provide a category.
    For example, when you click on the dev button replaces the category inside curly braces with dev. After fetching it print the response value inside the view.
    Here's the API:
    https://api.chucknorris.io/jokes/random?category=%7Bcategory%7D

23. Ques by @shubhenduSen
HTML page contains the following form:
<form>
  <input id="value" type="text" value="1"/>
  <input id="double" type="button/>
</form>
Write a setup function that registers a click handler and implements the following logic:
When a button with id double is clicked, the value of the text field with id value should be doubled.
If the value of the text field is not numeric, the button click should set it to 1.

24. Question By Prakhar
    Question - Create an Input Element, display the text entered in it, in an outside div. Now Create three buttons, with the names Bold, Italics and Strike through. And clicking on the button will apply the respective style to the text present in output div.
    Extension 1) toggle button on and off,e.g. if an user clicks on 'bold' button and if the button is already bold then turn it back to normal.
    Create a web app which has two input fields and two buttons. One input field will be used to take the input from the user and on the click of a button it will be displayed in h1,p, or you can use any tag of your preference. the second onput will take the color and on the click of the other button the displayed text should change to the color enterd by the user.

// Create a paragraph and add this sentence Lorem ipsum dolor sit amet consectetur adipisicing elit as its text node
// now create a button
// on clicking that button it should show the number of words present in the abovementioned sentence as an output

// Small exercise from Prakhar : Create a web app, which On the Click of a button fetches data from the provided API and from the data, displays the item with the highest price on the screen, below the button.
// https://mock-practice.prakhar10v.repl.co/items

// Add a text field. Insert a sentence. Now create a button. On clicking the button, highlight the word in the sentence with most number of characters.

// Here’s an API. Fetch the name and age of user and show them on the web page. Now check weather the user is eligible for vaccination ( must be above 45 ). If yes, show the name in green colour. API - https://randomuser.me/api/?results=10

// Put a paragraph on web with 16px font size. Now Increase the font size by 4px and vice-versa with the help of two buttons. Now change the colour of paragraph to RED when font size is divisible by 5

// HTML page contains the following form:
// Write a setup function that registers a click handler and implements the following logic:
// When a button with id double is clicked, the value of the text field with id value should be doubled.
// If the value of the text field is not numeric, the button click should set it to 1.
// Ye chit chat mai mast question mila muzhe

// Create a web app where user can input his/her name and a colour. (put a list of colours from which user can choose one ). On clicking the button, show the name with the same colour which user has entered.

Ishan and Shivam mock interview:
Conceptual: Started with DOM explaination then shifted towards API and semantic HTML description
Coding: Build a counter application (done using JS) and then some questions related to the coding part

Pranshu and Saksham mock interview:
CODING: Started with a coding question about input getting disabled if more than 50 characters are entered looks like something more was asked but couldn't understand
Conceptual: Difference between inline and inline-block

Bharati and Supriya mock interview;
Coding : Started with coding question where we had to fetch an API: https://jsonplaceholder.typicode.com/todos and display it on the output on screen(done using JS)
Conceptual: Explain about promises and ways of linking stylesheet to our html file

Mock Interview(30/10/2021):
Akshay Rajput and Divya Devi (conducted on #ttone voice channel started at around 1 pm):

Coding:

Refer to https://npmjs.com/ on the top navbar at the left there is a heart shaped icon which when clicked returns 3 words every now on each click and the first character taken from each of the 3 words forms "NPM"
So what Akshay wanted Divya to do was to have a button in the display which on every click show a random word from a list of words
(Divya did it using Vanilla JS on Vscode)
Hint: use the inbuilt function random from Math library for solving it

Conceptual:

1. State the use of addEventListener. What are the parameters that are passed inside the addEventListener?Describe about them

Feedback:
1)Utilize technical terms while explaining the concepts 2) If one gets stuck while solving the problem in between then explain your approach to the interviewer so that he can help you out

Akshay Rajput and Kevin Solomon:
Coding:
Create a password checker web app.If the length of the password is less than 10 characters then show an error message and if its length is greater then show the
message "Password is valid"
Followup: If there is nothing in the input section then no message should be shown
(Kevin does it using Vanilla JS on stackblitz)

Conceptual:

1. Distinguish between innerHTML and innerText.
2. What are Semantic Elements?

Feedback:
1)Utilize technical terms while explaining the concepts

Mock Interviews(30/10/2021):
Both were taken by Ishan Jirety(NeoGrad):

1. With Krituraj Anand:
   Coding:
   you have to create a profit and loss calculator, in which you will make two input sections one will take current price and other one will take the cost price and to show result one will click on a button and a message will be shown, if there is loss then you just have to show a message with loss amount and similarly for profit

(Krituraj did it using Vanilla JS on VSCODE)
Conceptual:

1. Reason of placing the script tag at the bottom in index.html file.
2. Within querySelector you have used class selector .Are we allowed to try something else like "id"?
3. Difference between class and id
4. Speak about the box model
5. What's the feature of React that you like most?

Feedback:

1. Be ready with your code editor
2. Engage with your interviewer

3. With Pratiyush:
   Coding:
   Here is an API: https://otpgenerator.ishanjirety.repl.co/get-otp?name= . You will enter a name as input from your app and send this API a request with the name along with it (this will be the final URL : https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered) on button click . In the response you will get an OTP which should be shown on the screen.

Followup1: Make another input section that asks the user to guess the OTP and for checking whether the guess is equal to the actual one or not add a button "Validate" which on clicking shows the message "Success " or "Failure" depending . Response is coming in the form of Name-OTP format so something like Pratyush-570928.So compare the OTP value from the response as well as the input which is being entered

Followup2: Change the color of validate message to GREEN when success comes up and change it to RED if failure comes up on click of Validate Button.

(done using Vanilla JS on VScode)
Conceptual:

1. Speak about DOM.
2. Speak about the use of Fetch in your application.
3. What do you think Javascript is synchronous or asynchronous?

// Create a web app which will have 2 input fields.. in 1st input, user can enter a sentence. In 2nd input, user can enter a word. Now if word is present in sentence, then display: found.. else display not found. And the display should work as soon as u enter the text in 2nd input field

// Here' an API. It will give an error. Write a web app, call this API and read the error message. Show the name of the error (not whole error). API

//You need to create three input fields and an output field.
// First, two input fields will take numbers as input. The last input field will take the operator as input. // Operators are +, -, × and /. If the third input field value is + then show in the output field the sum of the first input value + second input value. Similarly, if we enter ×, - and / in the third input field. // Note: Button is not required. for this question: limit the last input field to take only +,-,× and /. Show error if user gives any other input.

// Another question: // You have to create a counter.
// Create two buttons + and -. On clicking the + button increment the counter. Similarly for -. // Now highlight the counter:
// i. If the counter value is multiple of 3 then highlight the counter with Red colour.
// ii. If the counter value is multiple of 5 then highlight it with Green colour. // iii. If the counter value is multiple of both 5 and 3 then highlight it with Yellow colour.

// You have to create a text field and three button. // Suppose your input text is github. ,// On clicking the first button the text should become like this GITHUB. // On clicking the second button the text should become like this Github. // On clicking the third button the text should become like this github.

// Create a password checker. When char goes above 10, input border should become green. Now create a button. On clicking the button, show/hide the password. ( change ......... to text and vice versa. ) HINT - you need to change the type of input field...........for this question, it works only when the cursor is outside of the input field, when cursor inside its yellow, how to change that?

// Create a password checker. When char goes above 10, input border should become green. Now create a button. On clicking the button, show/hide the password. ( change ......... to text and vice versa. ) HINT - you need to change the type of input field...........for this question, it works only when the cursor is outside of the input field, when cursor inside its yellow, how to change that?

// Create a web app which will have 2 input fields.. in 1st input, user can enter a sentence. In 2nd input, user can enter a word. Now if word is present in sentence, then display: found.. else display not found. And the display should work as soon as u enter the text in 2nd input field

// Create a web app which will have 2 input fields.. in 1st input, user can enter a sentence. In 2nd input, user can enter a word. Now if word is present in sentence, then display: found.. else display not found. And the display should work as soon as u enter the text in 2nd input field
