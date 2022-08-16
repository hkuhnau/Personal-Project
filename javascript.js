//checking labelOne for correct/incorrect input and giving the message
const getTextOne = () => {
    let textOne = document.getElementById("textOne").value;
    let labelOne = document.querySelector("label");
    let inputOne = /^console\.log\(\"+[a-zA-Z]+\"\)\;$/;
    let theResult = inputOne.test(textOne);

    console.log(theResult);
    console.log(textOne);

    if (theResult == false) {
        labelOne.style.color = "red";
        labelOne.innerHTML = "Incorrect, Try Again";
        const myTimeout = setTimeout(originalLabel, 2200);
        function originalLabel() {
            labelOne.style.color = "white";
            labelOne.innerHTML = "Check your Answer";
        }
    } else {
        labelOne.style.color = "green";
        labelOne.innerHTML = "Correct!";
        const myTimeout = setTimeout(originalLabel, 2200);
        function originalLabel() {
            labelOne.style.color = "white";
            labelOne.innerHTML = "Check your Answer";
        }
    }
//checking labelTwo for correct/incorrect input and giving the message
}

const getTextTwo = () => {
    let textTwo = document.getElementById("textTwo").value;
    let labelTwo = document.getElementById("labelTwo");
    let inputOne = /^let\smyAge\s=\s+[0-9]+\;/;
    let theResult = inputOne.test(textTwo);
    console.log(textTwo);
    if (theResult == false) {
        labelTwo.style.color = "red";
        labelTwo.innerHTML = "Incorrect, Try Again";
        const myTimeout = setTimeout(originalLabel, 2200);
        function originalLabel() {
            labelTwo.style.color = "white";
            labelTwo.innerHTML = "Check your Answer";
        }
    } else {
        labelTwo.style.color = "green";
        labelTwo.innerHTML = "Correct!";
        const myTimeout = setTimeout(originalLabel, 2200);
        function originalLabel() {
            labelTwo.style.color = "white";
            labelTwo.innerHTML = "Check your Answer";
        }
    }

}

//define the svg
const svg = document.getElementById("svg1");
//define the helpsection
const helpSection = document.getElementById("helpSection");
//define the array of answers for the helpSection
const array = ["Hint: Have you checked your spelling?", "Hint: Did you forget the semicolon?", "Hint: Do you have quotations around your name?"];
//loop over the array every time the button is clicked and add to the helpSection
let i = 0;

function oneByOne(e) {
  for (i; i <= 3; i++) {
    console.log(i);
    if (i == 3) {
        i = 0;
    }
    return [helpSection.innerHTML = array[i++],setTimeout(() => {
        helpSection.innerHTML = "";
    }, 2000)];
  }
}
svg.onclick = oneByOne;



//define the svg2
const svg2 = document.getElementById("svg2");
//define the helpsection
const helpSection2 = document.getElementById("helpSection2");
//define the array of answers for the helpSection
const array2 = ["Hint: Have you checked your spelling?", "Hint: Did you forget the semicolon?", "Hint: The words are case sensitive"];
//loop over the array every time the button is clicked and add to the helpSection
let i2 = 0;

function oneByOne2(e) {
  for (i2; i2 <= 3; i2++) {
    console.log(i2);
    if (i2 == 3) {
        i2 = 0;
    }
    return [helpSection2.innerHTML = array2[i2++],setTimeout(() => {
        helpSection2.innerHTML = "";
    }, 2000)];
  }
}
svg2.onclick = oneByOne2;
