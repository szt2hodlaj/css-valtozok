const colorPicker = document.getElementById('colorPicker');
const boxSelector = document.getElementById('boxSelector');
const changeColorBtn = document.getElementById('changeColorBtn');

const root = document.querySelector(':root');
const rootStyle = getComputedStyle(root);

changeColorBtn.addEventListener('click', () => {
    const selectedColor = colorPicker.value;
    
    const selectedBox = document.getElementById(`box${boxSelector.value}`);
    
    if (selectedBox) {
        selectedBox.style.backgroundColor = selectedColor;
    } else {
        alert('Nincs ilyen elem szám a weboldalon.');
    }
});