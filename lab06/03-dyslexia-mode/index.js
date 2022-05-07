
const makeToggle = () => {
  const isPressed = window.localStorage.getItem('dyslexic');

  if (isPressed==0)
  {
    window.localStorage.setItem('dyslexic', 1)
    document.getElementsByTagName("body")[0].className = 'dyslexia-mode'
  }
  else
  {
    window.localStorage.setItem('dyslexic', 0)
    document.getElementsByTagName("body")[0].className = 'default'
  }
};

document.querySelector('#dyslexia-toggle').addEventListener('click', makeToggle);
window.localStorage.setItem('dyslexic', 0)