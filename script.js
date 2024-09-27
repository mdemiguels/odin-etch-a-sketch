const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
    const divPixel = document.createElement("DIV");
    divPixel.classList = "pixel";

    gridContainer.appendChild(divPixel);
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
