/*
* Excercise 1
*
*/

/*
* Then write a function that changes the text and the color inside the div
*
*/


const colorful = document.getElementById("color-block");

function changeColor(){
    //Write a condition determine what color it should be changed to
    const box = document.getElementById("color-block");
    const text = document.getElementById("color-name");
    console.log(box.style.background);
    if(box.style.backgroundColor === "rgb(0, 128, 0)"){
        //change the background color using JS
       box.style.backgroundColor = "#f08080";
        //Change the text of the color using the span id color-name
       text.innerText = "#f08080";
       console.log(box);
    }
    else{
        //change the background color using JS
        box.style.backgroundColor = "#008000";
        console.log(box);
        //Change the text of the color using the span id color-name
        text.innerText = "#008000";

    }
}

colorful.addEventListener("click", changeColor); 

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/



function convertTemp(){
    //Calculate the temperature here
    //Send the calculated temperature to HTML
    x = document.getElementById("f-input")
    x = x.value
    console.log(x)
    document.getElementById("c-output").innerHTML = ((x-32)*(5/9));
}

button = document.getElementById("convertbtn");
button.addEventListener("click", convertTemp); 


