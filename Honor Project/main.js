// the patty icon has no onclick attribute...the event listener runs the function
const patty = document.querySelector(".patty");
const myList = document.querySelector(".navigation");

patty.addEventListener('click', () => {
    const visible = myList.getAttribute("data-visible");
    if (visible === "false") {
        myList.setAttribute("data-visible", true);
    } else if (visible === "true") {
        myList.setAttribute("data-visible", false);
    }
});
