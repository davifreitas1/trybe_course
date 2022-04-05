const paragraph = document.querySelector('#paragraph');

function setFromLocalStorage() {
  const background = localStorage.getItem('backgroundColor');
  const textColor = localStorage.getItem('color');
  const size = localStorage.getItem('fontSize');
  paragraph.style.backgroundColor = background;
  paragraph.style.color = textColor;
  paragraph.style.fontSize = size;
}

setFromLocalStorage();

// Lógica para mudar cor de fundo

function addBackgroundColorEvent() {
  const colorsBtns = document.querySelectorAll('.background-color-button');
  for (const btn of colorsBtns) {
    btn.addEventListener('click', function() {
      paragraph.style.backgroundColor = btn.innerText;
      localStorage.setItem('backgroundColor', btn.innerText);
    });
  }
}

addBackgroundColorEvent();

// Lógica para mudar cor do texto

function addTextColorEvent() {
  const colorsBtns = document.querySelectorAll('.text-color-button');
  for (const btn of colorsBtns) {
    btn.addEventListener('click', function() {
      paragraph.style.color = btn.innerText;
      localStorage.setItem('color', btn.innerText);
    });
  }
}

addTextColorEvent();

// Lógica para mudar tamanho da fonte

function changeFontSizeEvent() {
  const colorsBtns = document.querySelectorAll('.font-size-button');
  for (const btn of colorsBtns) {
    btn.addEventListener('click', function() {
      paragraph.style.fontSize = btn.innerText;
      localStorage.setItem('fontSize', btn.innerText);
    });
  }
}

changeFontSizeEvent();