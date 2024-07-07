const maincontent = document.createElement("div");
maincontent.id = "maincontent";
const buttonBox = document.querySelector(".buttonBox");
const body = document.querySelector(".container");
body.insertBefore(maincontent, buttonBox);
const reset = document.querySelector("#reset");
let randomColorOn=false;

const blackAndWhite = document.querySelector("#blackAndWhite");
blackAndWhite.style.backgroundColor="darkgray";
const unicornVomit = document.querySelector("#unicornVomit");

blackAndWhite.addEventListener("click", ()=> {
    randomColorOn = false;
    unicornVomit.style.backgroundColor="lightgray";
    blackAndWhite.style.backgroundColor="darkgray";

});

unicornVomit.addEventListener("click", ()=> {
    randomColorOn = true;
    unicornVomit.style.backgroundColor="darkgray";
    blackAndWhite.style.backgroundColor="lightgray";

});



let fillColor = "black";
setGrid(50);

reset.addEventListener("click", ()=> {
    sideLength = parseInt(prompt("Please enter a grid side length less than 100", 50));
    if (sideLength > 100 || sideLength < 1 || sideLength == NaN) {
        alert("Side length must be a number between 1 and 100!")    
        return;
    }

    setGrid(sideLength);
})

function setGrid(sideLength) {
    maincontent.innerHTML="";
    for (let i=0; i<sideLength; i++) {
        const pixelRow = document.createElement("div");
        pixelRow.setAttribute("class", "pixelRow");
        maincontent.appendChild(pixelRow);
        for (let j=0; j<sideLength; j++) {
            const pixel = document.createElement("div");
            pixel.setAttribute("class", "pixel");
            pixelRow.appendChild(pixel);
            pixel.addEventListener("mouseenter", () => {
                if (randomColorOn) {fillColor=randomizeColor();} else {fillColor="black";} 
                pixel.style.backgroundColor = fillColor;
            })
        }
    }
}

function randomizeColor(){
    let randR = Math.floor(Math.random()*255);
    let randG = Math.floor(Math.random()*255);
    let randB = Math.floor(Math.random()*255);
    randomColor=`rgb(${randR}, ${randG}, ${randB} )`;
    return randomColor;
}
