//selects the toggle theme button and creates event listener to change the theme of the website
const toggleThemeBut = document.querySelector('#toggle-theme');
toggleThemeBut.addEventListener('click', function () {
    const root = document.documentElement;
    const theme = root.className === 'dark' ? 'light' : 'dark';
    root.className = theme;
    document.querySelector('.theme-name').textContent = newTheme;
});