const makeBigger = (ev) => {
   h1element = document.querySelector("h1");
   h1element_size = parseFloat(window.getComputedStyle(h1element, null).getPropertyValue('font-size'));
   document.querySelector("h1").style.fontSize = (h1element_size + 1) + 'px';
   pelement = document.querySelector("p");
   pelement_size = parseFloat(window.getComputedStyle(pelement, null).getPropertyValue('font-size'));
   document.querySelector("p").style.fontSize = (pelement_size + 1) + 'px';

};

const makeSmaller = () => {
   h1element = document.querySelector("h1");
   h1element_size = parseFloat(window.getComputedStyle(h1element, null).getPropertyValue('font-size'));
   document.querySelector("h1").style.fontSize = (h1element_size - 1) + 'px';
   pelement = document.querySelector("p");
   pelement_size = parseFloat(window.getComputedStyle(pelement, null).getPropertyValue('font-size'));
   document.querySelector("p").style.fontSize = (pelement_size - 1) + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
