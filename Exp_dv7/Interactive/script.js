document.getElementById('changeColorBtn').addEventListener('click', function() {
    const color = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = color;
});

document.getElementById('displayNameBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    document.getElementById('nameOutput').innerText = `Hello, ${name}!`;
});

document.getElementById('randomNumberBtn').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumberOutput').innerText = `Random Number: ${randomNumber}`;
});

// Function to reveal sections with animation
function revealSections() {
    const sections = document.querySelectorAll('.interactive-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 300); // Stagger the animations
    });
}

// Call the function to reveal sections on page load
window.onload = revealSections;