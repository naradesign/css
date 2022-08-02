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
const setCode = (isMultiline) => {
    let cssCodeStr = '';

    for (let i = 0; i < basePropArr.length; i++) {
        if (!isMultiline && basePropArr[i] === '-webkit-box-orient') {
            continue;
        }

        cssCodeStr += basePropArr[i] + ': ' + getComputedStyle(clampEl)[basePropArr[i]] + ';\n';
    }

    for (let i = 0; i < userPropArr.length; i++) {
        if (!isMultiline) {
            break;
        }

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
    const isMultiline = +lineClampEl.value > 1;

    if (isMultiline) { // 멀티라인 초기화
        clampEl.style.display = '-webkit-box';
        clampEl.style.whiteSpace = null;
        clampEl.style.WebkitBoxOrient = 'vertical';
        clampEl.style.WebkitLineClamp = lineClampEl.value;
        clampEl.style.fontSize = fontSizeEl.value + 'px';
        clampEl.style.lineHeight = lineHeightEl.value;
        clampEl.style.height = 'auto'; // 높이 초기화
        clampEl.style.height = getComputedStyle(clampEl)['height']; // 높이 다시 계산
        fontSizeEl.disabled = false;
        lineHeightEl.disabled = false;
    } else { // 싱글라인 초기화
        clampEl.style.display = 'block';
        clampEl.style.whiteSpace = 'nowrap';
        clampEl.style.WebkitBoxOrient = null;
        clampEl.style.WebkitLineClamp = null;
        clampEl.style.fontSize = null;
        clampEl.style.lineHeight = null;
        clampEl.style.height = null;
        fontSizeEl.disabled = true;
        lineHeightEl.disabled = true;
    }

    setCode(isMultiline);
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
