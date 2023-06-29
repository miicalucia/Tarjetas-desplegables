const paisaje1 = document.getElementsByClassName(".paisaje1");
const paisaje2 = document.getElementsByClassName(".paisaje2");
const paisaje3 = document.getElementsByClassName(".paisaje3");
const paisaje4 = document.getElementsByClassName(".paisaje4");
const paisaje5 = document.getElementsByClassName(".paisaje5");

let paneles = [paisaje1, paisaje2, paisaje3, paisaje4, paisaje5]


paneles.forEach(panel => {
    panel.addEventListener("click", () => {
