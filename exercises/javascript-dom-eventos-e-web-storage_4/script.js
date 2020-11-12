const paragraphText = document.querySelectorAll('.paragraph');

// Change background color
let getSelectBG = document.querySelector('#background-color');
getSelectBG.addEventListener('change', function (event) {
  changeBackgroundColor(event.target.value);
});

let changeBackgroundColor = (color) => {
  document.body.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
};

// Change font color
let getSelectFC = document.querySelector('#text-color');
getSelectFC.addEventListener('change', function (event) {
  changeFontColor(event.target.value);
});

let changeFontColor = (color) => {
  for (let i of paragraphText) {
    i.style.color = color;
  }
  localStorage.setItem('fontColor', color);
};

// Change font size
let getSelectFS = document.querySelector('#font-size');
getSelectFS.addEventListener('change', function (event) {
  changeFontSize(event.target.value);
});

let changeFontSize = (size) => {
  for (let i of paragraphText) {
    i.style.fontSize = size;
  }
  localStorage.setItem('fontSize', size);
};

// Change line height
let getSelectLH = document.querySelector('#line-height');
getSelectLH.addEventListener('change', function (event) {
  changeLineHeight(event.target.value);
});

let changeLineHeight = (height) => {
  for (let i of paragraphText) {
    i.style.lineHeight = height;
  }
  localStorage.setItem('lineHeight', height);
};

// Change font family
let getSelectFF = document.querySelector('#font-type');
getSelectFF.addEventListener('change', function (event) {
  changeFontFamily(event.target.value);
});

let changeFontFamily = (family) => {
  for (let i of paragraphText) {
    i.style.fontFamily = family;
  }
  localStorage.setItem('fontFamily', family);
};

let initialize = () => {
  let backgroundColor = localStorage.getItem('backgroundColor');
  if (backgroundColor) changeBackgroundColor(backgroundColor);

  let fontColor = localStorage.getItem('fontColor');
  if (fontColor) changeFontColor(fontColor);

  let fontSize = localStorage.getItem('fontSize');
  if (fontSize) changeFontSize(fontSize);

  let lineHeight = localStorage.getItem('lineHeight');
  if (lineHeight) changeLineHeight(lineHeight);

  let fontFamily = localStorage.getItem('fontFamily');
  if (fontFamily) changeFontFamily(fontFamily);
};

initialize();
