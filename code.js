const maincontent = document.createElement("div");
maincontent.id = "maincontent";
const body = document.querySelector(".container");
body.appendChild(maincontent);
const reset = document.querySelector("#reset");


let fillColor = "black";
setGrid(16);


reset.addEventListener("click", ()=> {
    sideLength = parseInt(prompt("Please enter a grid side length less than 100", 50));
    if (sideLength > 100) {
        alert("Too big!")    
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
                pixel.style.backgroundColor = fillColor;
            })
    
    
        }
    
    }
}
