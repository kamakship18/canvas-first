/* Iteration 4: Make the Canvas App Functional */
const imgface = document.getElementById('face-plate');
const buttonface = document.getElementById('b-face');
buttonface.oninput = () => {
  imgface.style.fill = buttonface.value;
};

const imghelmet = document.getElementById('helmet');
const buttonhelmet = document.getElementById('b-helmet');
buttonhelmet.oninput = () => {
  imghelmet.style.fill = buttonhelmet.value;
};

const imgeye = document.getElementById('eyes');
const buttoneye = document.getElementById('b-eyes');
buttoneye.oninput = () => {
  imgeye.style.fill = buttoneye.value;
};

const imgbg = document.getElementById('background');
const buttonbg = document.getElementById('b-bg');
buttonbg.oninput = () => {
  imgbg.style.fill = buttonbg.value;
};