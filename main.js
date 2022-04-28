// the patty icon has no onclick attribute...the event listener runs the function
const patty = document.querySelector(".patty");
const myList = document.querySelector(".navigation");
const listItem = document.querySelectorAll(".list-items");
const nav = document.querySelector("nav");

patty.addEventListener('click', () => {
    const visible = myList.getAttribute("data-visible");
    if (visible === "false") {
        myList.setAttribute("data-visible", true);
        nav.setAttribute("data-visible", true);
        //switching the list items to have the button class when in mobile view and visible
        //the list items are contained in a node list
        for (i = 0; i < listItem.length; i ++) {
            //looping over each one and setting their boostrap class
            listItem[i].setAttribute("class", "btn btn-outline-info");
        }
    } else if (visible === "true") {
        myList.setAttribute("data-visible", false);
        nav.setAttribute("data-visible", false);
        for (i = 0; i < listItem.length; i ++) {
            //looping over each one and setting their boostrap class
            listItem[i].setAttribute("class", "list-items");
        }
    }
});
