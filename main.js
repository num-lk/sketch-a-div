
// Add event listener delegate to document
document.addEventListener('mouseover', (e) => {

    // Exit case when not a cell
    if (e.target.className !== 'cell') { return; }

    // Get element for ease of use
    const cell = e.target;

    // Randomize color and add to alpha channel / darken
    const re = /[\d.]+/g; // Regex to capture color channels from CSS
    const channels = cell.style.backgroundColor.match(re);
    const alpha = channels.length < 4 ? 0.1 : Math.min(parseFloat(channels[3]) + 0.1, 1);
    let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${alpha})`
    
    // Set cell color
    cell.style.backgroundColor = color;
});

// Add event handler to resize button
const resizeButton = document.querySelector('.resize-button');
resizeButton.addEventListener('click', () => {
    let input = prompt('Enter new grid size');
});

function generateGrid(size) {

    // Create and configure new cell
    let cell = document.createElement('div');
    let cellSize = 100 / size;
    cell.setAttribute('style', `
        width:calc(${cellSize}% - 1px); 
        height:calc(${cellSize}% - 1px);
        background-color: rgba(0, 0, 0, 0.01);
    `);
    cell.className = 'cell';

    // Get container
    let container = document.querySelector('.grid-container');

    // Remove previous cells
    container.replaceChildren();

    // Add n^2 cells to fill grid
    let cellCount = Math.pow(size, 2);
    for (let i = 0; i < cellCount; i++) {
        clone = cell.cloneNode(true);
        container.appendChild(clone);
    }
}

// Create initial grid
generateGrid(16);