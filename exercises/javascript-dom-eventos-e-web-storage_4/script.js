const paragraphText = document.querySelectorAll('.paragraph');

let changeBackgroundColor = (color) => {
  let colorOption = color.options[color.selectedIndex].value;
  document.body.style.backgroundColor = colorOption;
  localStorage.setItem('backgroundColor', color);
};

let changeFontColor = (color) => {
  let textColorOption = color.options[color.selectedIndex].value;
  for (let i of paragraphText) {
    i.style.color = textColorOption;
  }
  localStorage.setItem('fontColor', color);
};

let changeFontSize = (size) => {
  let textSize = size.options[size.selectedIndex].value;
  for (let i of paragraphText) {
    i.style.fontSize = textSize;
  }
  localStorage.setItem('fontSize', size);
};

let changeLineHeight = (height) => {
  let lineHeight = height.options[height.selectedIndex].value;
  for (let i of paragraphText) {
    i.style.lineHeight = lineHeight;
  }
  localStorage.setItem('lineHeight', height);
};

let changeFontFamily = (family) => {
  let fontType = family.options[family.selectedIndex].value;
  for (let i of paragraphText) {
    i.style.fontFamily = fontType;
  }
  localStorage.setItem('fontFamily', family);
};
