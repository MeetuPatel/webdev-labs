
const makeDefault = () => {
   document.getElementsByTagName("body")[0].className = 'default'
};

const makeOcean = () => {
   document.getElementsByTagName("body")[0].className = 'ocean'
};

const makeDesert = () => {
   document.getElementsByTagName("body")[0].className = 'desert'
};

const makeHighContrast = () => {
   document.getElementsByTagName("body")[0].className = 'high-contrast'
};

document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#high-contrast").addEventListener('click', makeHighContrast);