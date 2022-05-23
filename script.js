// Set random color background
const colors = [
    "#d5d6ea",
    "#f6f6eb",
    "#f5d5cb",
    "#f6ecf5",
    "#f6ecf5",
    "#f3ddf2",
    "#FFDFD3",
    "#D291BC",
    "#D5D6EA",
    "#F6F6EB",
    "#D7ECD9",
    "#F5D5CB",
    "#F6ECF5",
    "#F3DDF2",
];

randColor1 = colors[Math.floor(Math.random() * colors.length)];
randColor2 = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundImage = `linear-gradient(90deg, ${randColor1}, ${randColor2})`;


// Set a clickable works to show the details
const work1 = document.getElementById("work1");
const work2 = document.getElementById("work2");
const work3 = document.getElementById("work3");
const work4 = document.getElementById("work4");

work1.addEventListener("click", showDetail1);
function showDetail1() {
    const detail1 = document.getElementById("detail1");
    detail1.classList.toggle("hidden");
}

work2.addEventListener("click", showDetail2);
function showDetail2() {
    const detail2 = document.getElementById("detail2");
    detail2.classList.toggle("hidden");
}

work3.addEventListener("click", showDetail3);
function showDetail3() {
    const detail3 = document.getElementById("detail3");
    detail3.classList.toggle("hidden");
}

work4.addEventListener("click", showDetail4);
function showDetail4() {
    const detail4 = document.getElementById("detail4");
    detail4.classList.toggle("hidden");
}