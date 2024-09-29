const gridContainer = document.querySelector(".grid-container");
const popup = document.querySelector(".popup");
const inputSquare = document.querySelector("#squares");
let gridWidth = 16;
let gridHeight = 16;
let randomize = false;

generateGrid();

document.addEventListener("DOMContentLoaded", () => {
    addEventsToPixels();
});

function addEventsToPixels() {
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
            if (randomize) {
                const color = randomRGBColor();
                pixel.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
            } else {
                pixel.style.backgroundColor = "#000";
            }
            pixel.classList.add = "drawed";
        });

        pixel.addEventListener("mouseover", () => {
            if (isDrawing) {
                if (isDrawed) {

                } else {
                    if (randomize) {
                        const color = randomRGBColor();
                        pixel.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
                    } else {
                        pixel.style.backgroundColor = "#000";
                    }
                    pixel.classList.add = "drawed";
                }
            }
        });
    });
}

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    gridWidth = inputSquare.value;
    gridHeight = inputSquare.value;

    reloadGrid();

    popup.classList = "popup";
}

function randomRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return [red, green, blue];
}

function activateRandomMode() {
    randomize = true;
}

function activateNormalMode() {
    randomize = false;
}

function generateGrid() {
    let pixelWidth = gridContainer.offsetWidth / gridWidth;
    let pixelHeight = gridContainer.offsetHeight / gridHeight;

    for (let i = 0; i < gridWidth; i++) {
        const divColumn = generatePixelDiv(pixelWidth, pixelHeight);
        gridContainer.appendChild(divColumn);

        for (let j = 0; j < gridHeight - 1; j++) {
            const divRow = generatePixelDiv(pixelWidth, pixelHeight);
            gridContainer.appendChild(divRow);
        }
    }
}

function generatePixelDiv(pixelWidth, pixelHeight) {
    const divPixel = document.createElement("DIV");
    divPixel.classList.add("pixel");
    divPixel.style.width = pixelWidth + "px";
    divPixel.style.height = pixelHeight + "px";
    divPixel.style.border = "1px dotted grey";
    return divPixel;
}

function reloadGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    generatePixelDiv(gridWidth, gridHeight);
    generateGrid();
    addEventsToPixels();
}
