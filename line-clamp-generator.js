'use strict';

const fieldEl = document.querySelector('.field');
const codeEl = document.querySelector('.code');
const clampEl = document.querySelector('.clamp');
const lineClampEl = document.querySelector('#-webkit-line-clamp');
const fontSizeEl = document.querySelector('#font-size');
const lineHeightEl = document.querySelector('#line-height');
const copyBtnEl = document.querySelector('#copy-btn');
const basePropArr = ['display', '-webkit-box-orient', 'overflow', 'text-overflow'];
const userPropArr = ['-webkit-line-clamp', 'font-size', 'line-height'];

// 코드 표시
const setCode = (isSingleLine) => {
  let cssCodeStr = '';

  for (let i = 0; i < basePropArr.length; i++) {
    if (isSingleLine && basePropArr[i] === '-webkit-box-orient') {
      continue;
    }

    cssCodeStr += basePropArr[i] + ': ' + clampEl.style[basePropArr[i]] + ';\n';
  }

  for (let i = 0; i < userPropArr.length; i++) {
    if (isSingleLine) {
      break;
    }

    let itemStr = userPropArr[i];

    cssCodeStr += itemStr + ': ' + clampEl.style[itemStr] + ';';

    if (itemStr === 'line-height') {
      cssCodeStr += ' /* == ' + getComputedStyle(clampEl)[itemStr] + ' */';
    }

    cssCodeStr += '\n';
  }

  if (isSingleLine) {
    cssCodeStr += 'white-space: nowrap;';
  }

  codeEl.textContent = cssCodeStr;
};

// 스타일 설정
const setStyle = () => {
  const isMultiLine = +lineClampEl.value > 1;
  const isSingleLine = !isMultiLine;

  if (isMultiLine) {
    // 멀티라인 초기화
    clampEl.style.display = '-webkit-box';
    clampEl.style.whiteSpace = null;
    clampEl.style.WebkitBoxOrient = 'vertical';
    clampEl.style.WebkitLineClamp = lineClampEl.value;
    clampEl.style.fontSize = fontSizeEl.value + 'px';
    clampEl.style.lineHeight = lineHeightEl.value;
    fontSizeEl.disabled = false;
    lineHeightEl.disabled = false;
  } else {
    // 싱글라인 초기화
    clampEl.style.display = 'block';
    clampEl.style.whiteSpace = 'nowrap';
    clampEl.style.WebkitBoxOrient = null;
    clampEl.style.WebkitLineClamp = null;
    clampEl.style.fontSize = null;
    clampEl.style.lineHeight = null;
    fontSizeEl.disabled = true;
    lineHeightEl.disabled = true;
  }

  setCode(isSingleLine);
};

// 클립보드로 복사
const copyToClipBoard = () => {
  navigator.clipboard
    .writeText(codeEl.textContent)
    .then(() => {
      alert('Copy complete! 😎');
    })
    .catch((err) => {
      alert("Sorry it didn't work. 😱");
    });
};

setStyle();
fieldEl.addEventListener('input', setStyle);
copyBtnEl.addEventListener('click', copyToClipBoard);
