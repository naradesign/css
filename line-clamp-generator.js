const fieldEl = document.querySelector('.field');
const codeEl = document.querySelector('.code');
const clampEl = document.querySelector('.clamp');
const lineClampEl = document.querySelector('#-webkit-line-clamp');
const fontSizeEl = document.querySelector('#font-size');
const lineHeightEl = document.querySelector('#line-height');
const copyBtnEl = document.querySelector('#copy-btn');
const basePropArr = ['display', '-webkit-box-orient', 'overflow', 'text-overflow'];
const userPropArr = ['-webkit-line-clamp', 'font-size', 'line-height', 'height'];

// 코드 표시
const setCode = () => {
    let cssCodeStr = '';

    for (let i = 0; i < basePropArr.length; i++) {
        cssCodeStr += basePropArr[i] + ': ' + getComputedStyle(clampEl)[basePropArr[i]] + ';\n';
    }

    for (let i = 0; i < userPropArr.length; i++) {
        let itemStr = userPropArr[i];

        cssCodeStr += itemStr + ': ' + clampEl.style[itemStr] + ';';

        if (itemStr === 'line-height') {
            cssCodeStr += ' /* == ' + getComputedStyle(clampEl)[itemStr] + ' */';
        }

        cssCodeStr += '\n';
    }

    codeEl.textContent = cssCodeStr;
};

// 스타일 설정
const setStyle = () => {
    clampEl.style.WebkitLineClamp = lineClampEl.value; // 클램프
    clampEl.style.fontSize = fontSizeEl.value + 'px'; // 글꼴 크기
    clampEl.style.lineHeight = lineHeightEl.value; // 줄 간격
    clampEl.style.height = 'auto'; // 높이 초기화
    clampEl.style.height = getComputedStyle(clampEl)['height']; // 높이 다시 설정

    setCode();
};

// 클립보드로 복사
const copyToClipBoard = () => {
    navigator.clipboard.writeText(codeEl.textContent).then(() => {
        alert('Copy complete! 😎');
    }).catch((err) => {
        alert('Sorry it didn\'t work. 😱');
    });
};

setStyle();
fieldEl.addEventListener('input', setStyle);
copyBtnEl.addEventListener('click', copyToClipBoard);
