const getTextOne = () => {
    let textOne = document.getElementById("textOne").value;
    let labelOne = document.querySelector("label");
    let inputOne = /^console\.log\(\"+[a-zA-Z]+\"\)\;$/;
    let theResult = inputOne.test(textOne);

    console.log(theResult);
    console.log(textOne);

    if (theResult == false) {
        labelOne.style.color = "red";
    } else {
        labelOne.style.color = "green";
    }

}

const getTextTwo = () => {
    let textTwo = document.getElementById("textTwo").value;
    let labelTwo = document.getElementById("labelTwo");
    let inputOne = /^myAge\s=\s+[0-9]+\;/;
    let theResult = inputOne.test(textTwo);
    console.log(textTwo);
    if (theResult == false) {
        labelTwo.style.color = "red";
    } else {
        labelTwo.style.color = "green";
    }

}
