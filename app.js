const addButton = document.getElementById('addButton');
const buttons = [];

addButton.addEventListener('click', function() {
    createRandomButton();
});

function createRandomButton() {
    const container = document.getElementById('container');
    const randomText = generateRandomText();
    const randomColor = generateRandomColor();
    const button = document.createElement('button');
    button.textContent = randomText;
    button.className = 'random-button';
    button.style.color = randomColor;
    container.appendChild(button);
    buttons.push(button);

}

function removeButton(button) {
    const index = buttons.indexOf(button);
    if (index !== -1) {
        buttons.splice(index, 1);
        button.style.opacity = 0;a
        setTimeout(() => {
            button.remove();
        }, 500); // 
    }
}

function generateRandomText() {
    const texts = ["Apple", "Banana", "Orange", "Strawberry", "Grapes", "Pineapple"];
    return texts[Math.floor(Math.random() * texts.length)];
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeButtons() {
    const interval = setInterval(function() {
        if (buttons.length === 0) {
            clearInterval(interval);
        } else {
            const button = buttons.pop();
            button.style.opacity = 0; 
            setTimeout(() => {
                button.remove();
            }, 500);
        }
    }, 1000); 
}


setTimeout(removeButtons, 1000);
