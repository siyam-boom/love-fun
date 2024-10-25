const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const congratsMessage = document.querySelector('.congrats-message');
const buttonsDiv = document.querySelector('.buttons');
const questionDiv = document.querySelector('h1');
// Handle the YES button click to show the congratulations message
yesBtn.addEventListener('click', () => {
    questionDiv.style.display = 'none';
    buttonsDiv.style.display = 'none'; // Hide the buttons
    congratsMessage.style.display = 'block'; // Show the congratulations message
});

// Handle the NO button click to swap positions with the YES button
noBtn.addEventListener('click', () => {
    // Swap the buttons by changing their order in the DOM
    if (noBtn.nextSibling === yesBtn) {
        // If NO is before YES, move YES before NO
        buttonsDiv.insertBefore(yesBtn, noBtn);
    } else {
        // Otherwise, move NO before YES
        buttonsDiv.insertBefore(noBtn, yesBtn);
    }
});
