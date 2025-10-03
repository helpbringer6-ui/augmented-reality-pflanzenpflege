document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('plant-selection').style.display = 'block';
    loadPlants();
});

function loadPlants() {
    const plants = ['Aloe Vera', 'Ficus', 'Cactus'];
    const selectionDiv = document.getElementById('plant-selection');
    plants.forEach(plant => {
        const button = document.createElement('button');
        button.innerText = plant;
        button.addEventListener('click', () => selectPlant(plant));
        selectionDiv.appendChild(button);
    });
}

function selectPlant(plant) {
    alert('Sie haben ' + plant + ' ausgewählt!');
    // Hier kann AR-Logik hinzugefügt werden.
}