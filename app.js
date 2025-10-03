document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('plant-selection').style.display = 'block';
    loadPlants();
});

function loadPlants() {
    const plants = ['Aloe Vera', 'Ficus', 'Cactus'];
    const selectionDiv = document.getElementById('plant-selection');
    plants.map(plant => {
        const button = document.createElement('button');
        button.innerText = plant;
        button.addEventListener('click', () => selectPlant(plant));
        selectionDiv.appendChild(button);
    });
}

function selectPlant(plant) {
    console.log(`You have selected ${plant}!`);
    // Here you can add AR logic.
}