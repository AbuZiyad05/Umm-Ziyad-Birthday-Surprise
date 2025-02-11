// Unlock the message when the correct birthday is entered
document.getElementById('unlockButton').addEventListener('click', function () {
  const passwordInput = document.getElementById('passwordInput').value;
  const header = document.getElementById('header');
  const envelope = document.getElementById('envelope');
  const messageContainer = document.getElementById('messageContainer');
  const backgroundMusic = document.getElementById('backgroundMusic');

  // Check if the entered birthday is correct
  if (passwordInput === '02/11/1987') {
    // Hide the header and envelope
    header.style.display = 'none';
    envelope.style.display = 'none';

    // Show the message and photo
    messageContainer.style.display = 'block';

    // Play confetti animation
    createConfetti();

    // Play background music
    backgroundMusic.play().catch(error => {
      console.error("Audio playback failed:", error);
      alert("Please interact with the page to allow audio playback.");
    });
  } else {
    alert('Oops! That’s not the correct birthday. Try again!');
  }
});

// Confetti animation
function createConfetti() {
  const confettiCount = 100;
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    confettiContainer.appendChild(confetti);
  }
}