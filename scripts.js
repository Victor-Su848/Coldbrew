//selects the toggle theme button and creates event listener to change the theme of the website
const toggleThemeBut = document.querySelector('#toggle-theme');
toggleThemeBut.addEventListener('click', function () {
    const root = document.documentElement;
    const theme = root.className === 'dark' ? 'light' : 'dark';
    root.className = theme;
    document.querySelector('.theme-name').textContent = newTheme;
});

//auto-scroller scripts
let counter = 1;
setInterval(() => {
  document.getElementById(`radio${counter}`).checked = true;
  if (counter >= 3) {
    counter = 1;
  } else {
    counter += 1;
  }
}, 5000);
const radio1 = document.getElementById("radio1");
radio1.onclick = function () {
  counter = 1;
};
const radio2 = document.getElementById("radio2");
radio2.onclick = function () {
  counter = 2;
};
const radio3 = document.getElementById("radio3");
radio3.onclick = function () {
  counter = 3;
};
//auto-scroller scripts end