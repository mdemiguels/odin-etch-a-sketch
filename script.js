const gridContainer = document.querySelector(".grid-container");
let gridWidth = 16;
let gridHeight = 16;

for (let i = 0; i < gridWidth; i++) {
    let pixelWidth = gridContainer.offsetWidth / gridWidth;
    let pixelHeight = gridContainer.offsetWidth / gridHeight;

    const divColumn = generatePixelDiv(pixelWidth, pixelHeight);
    gridContainer.appendChild(divColumn);

    for (let i = 0; i < gridHeight; i++) {

        const divRow = generatePixelDiv(pixelWidth, pixelHeight);
        gridContainer.appendChild(divRow);
        
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const pixelNodeList = document.querySelectorAll(".pixel");
    let isDrawing = false;

    gridContainer.addEventListener("mousedown", () => {
        isDrawing = true;
    });

    gridContainer.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    pixelNodeList.forEach((pixel) => {
        pixel.addEventListener("mousedown", () => {
            pixel.classList.add("draw");
        });

        pixel.addEventListener("mouseover", () => {
            if (isDrawing) {
                pixel.classList.add("draw");
            }
        });
    });
});

function generatePixelDiv(pixelWidth, pixelHeight) {
    const divPixel = document.createElement("DIV");
    divPixel.classList.add("pixel");
    divPixel.style.width = pixelWidth + "px";
    divPixel.style.height = pixelHeight + "px";
    divPixel.style.border = "1px solid black";
    return divPixel;
}

