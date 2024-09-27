const gridContainer = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < 16; i++) {
        
        const divRow = document.createElement('DIV');
        gridContainer.appendChild(divRow);

        for (let j = 0; j < 16; j++) {
            
            const divColumn = document.createElement('DIV');
            divRow.appendChild(divColumn);

        }
        
    }
});