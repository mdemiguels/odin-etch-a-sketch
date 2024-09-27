const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
    const divPixel = document.createElement("DIV");
    divPixel.classList = "pixel";

    gridContainer.appendChild(divPixel);
}

document.addEventListener("DOMContentLoaded", () => {
    const pixelNodeList = document.querySelectorAll(".pixel");

    pixelNodeList.forEach((pixel) => {

        pixel.addEventListener("mouseover", () => {
            pixel.classList = "pixel draw";
        });

        pixel.addEventListener("mouseout", () => {
            pixel.classList = "pixel";
        });

    });
});
