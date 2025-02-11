// Example: Add a surprise button
const surpriseButton = document.createElement('button');
surpriseButton.innerText = 'Click for a Surprise!';
surpriseButton.style.margin = '20px';
surpriseButton.style.padding = '10px 20px';
surpriseButton.style.backgroundColor = '#e91e63';
surpriseButton.style.color = '#fff';
surpriseButton.style.border = 'none';
surpriseButton.style.borderRadius = '5px';
surpriseButton.style.cursor = 'pointer';

surpriseButton.addEventListener('click', () => {
  alert('I love you more than anything! Happy Birthday, my love! 🎂💖');
});

document.body.appendChild(surpriseButton);
