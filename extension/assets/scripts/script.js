const darkModeBtn = document.getElementById('darkModeBtn');
const lightModeBtn = document.getElementById('lightModeBtn');
const TextMainBtn = document.getElementById('text-main-btn');
const dragAndDrop = document.getElementById('dragAndDrop');
const uploaded__image = document.getElementById('uploaded__image');
const imageLink = document.getElementById('imageLink');
const container__image__uploader = document.getElementById('container__image__uploader');
// const TextMain = document.getElementById('text-main');
// const TextArea = document.getElementById('text-area');
const Sucess = document.getElementById('Sucess');
const body = document.body;

const applyDarkMode = () => {
    body.classList.remove('light-mode');
    dragAndDrop.classList.remove('light-modes');
    dragAndDrop.classList.add('dark-modes');
    container__image__uploader.classList.remove('light-modes');
    container__image__uploader.classList.add('dark-modes');
    uploaded__image.classList.remove('light-modes');
    uploaded__image.classList.add('dark-modes');
    imageLink.style.color = 'white';
    Sucess.style.color = 'white';
    localStorage.setItem('theme', 'dark');
};

const applyLightMode = () => {
    body.classList.add('light-mode');
    dragAndDrop.classList.add('light-modes');
    dragAndDrop.classList.remove('dark-modes');
    container__image__uploader.classList.add('light-modes');
    container__image__uploader.classList.remove('dark-modes');
    uploaded__image.classList.add('light-modes');
    uploaded__image.classList.remove('dark-modes');
    imageLink.style.color = 'black';
    Sucess.style.color = 'black';
    localStorage.setItem('theme', 'light');
};

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        applyLightMode();
    } else {
        applyDarkMode();
    }
};

function TextMainBtnMode() {
    if (TextMain.classList.contains('none')) {
        TextMain.classList.remove('none');
        TextArea.classList.add('none');
    } else {
        TextMain.classList.add('none');
        TextArea.classList.remove('none');
    }
}

initTheme();

darkModeBtn.addEventListener('click', applyDarkMode);
lightModeBtn.addEventListener('click', applyLightMode);
TextMainBtn.addEventListener('click', TextMainBtnMode);
