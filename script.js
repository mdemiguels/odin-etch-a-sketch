const gridContainer = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < 256; i++) {
        
        const divPixel = document.createElement('DIV');
        divPixel.classList = 'pixel';
        gridContainer.appendChild(divPixel);
        
    }
});