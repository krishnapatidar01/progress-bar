const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function updateProgressBar(index) {
  checkboxes.forEach((checkbox, i) => {
    if (i === index - 1) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });

  let progress = index * 25;

  progressBar.style.width = progress + '%';
  progressText.textContent = progress + '%';
}