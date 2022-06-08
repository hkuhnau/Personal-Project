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

    // return labelOne.innerHTML = "Check your Answer";
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
