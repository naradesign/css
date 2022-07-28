const baseStyleEl = document.querySelector('#base'); // style 요소
const tryItEl = document.querySelector('#try'); // 라디오 버튼 컨테이너
const demoTargetStr = document.querySelector('#applies').textContent; // 적용할 선택자 스트링
const demoTargetEl = document.querySelectorAll(demoTargetStr); // 선택자 리스트
const selectorEl = document.querySelector('#selector'); // 선택자 표시 요소
const declarationEl = document.querySelector('#declaration'); // 선언부 표시 요소
const baseOutputEl = document.querySelector('#base-output'); // 기본 코드 아웃풋
const equivalentToEl = document.querySelector('#equivalent-to'); // 동등한 코드 아웃풋
const equivalentArr = equivalentToEl && equivalentToEl.dataset.eq.split(' '); // 데이터셋에 있는 동등한 속성 배열
const defaultValueStr = tryItEl.querySelector(':checked').nextElementSibling.textContent.replace(/\/\*.*\*\//, ''); // 초깃값 문자열

// 동등한 속성+값 문자열 구하기
const getEquivalentStr = () => {
    let elementStyleStr = '';
    const elementStyleObj = demoTargetEl[0].style;

    for (let i = 0; i < equivalentArr.length; i++) {
        elementStyleStr += equivalentArr[i] + ': ' + elementStyleObj[equivalentArr[i].replace(/-./g, x=>x[1].toUpperCase())] + ';\n';
    }

    return elementStyleStr;
};

// 예제에 스타일 적용하기
const applyStyle = (valueStr) => {
    for (let i = 0; i < demoTargetEl.length; i++) {
        demoTargetEl[i].setAttribute('style', valueStr);
    }
};

// 동등한 속성+값 표시하기
const setEqStr = (valueStr) => {
    if (!equivalentToEl) {
        return;
    }

    equivalentToEl.textContent = valueStr + '\n==\n' + getEquivalentStr();
};

// 기본 스타일을 초깃값으로 적용하기
selectorEl.textContent = demoTargetStr; // 선택자
declarationEl.textContent = defaultValueStr; // 속성+값
applyStyle(defaultValueStr); // 스타일 적용
setEqStr(defaultValueStr); // 동등한 표현

// 베이스 코드 표시하기
baseOutputEl.textContent = baseStyleEl.textContent;

// 선택한 값을 데모에 적용하기
tryItEl.addEventListener('change', (event) => {
    const selectedValueStr = event.target.nextElementSibling.textContent.replace(/\/\*.*\*\//, '');

    declarationEl.textContent = selectedValueStr;
    applyStyle(selectedValueStr);

    setTimeout(() => {
        setEqStr(selectedValueStr)
    }, 400);
});
