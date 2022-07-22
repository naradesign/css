const baseStyleEl = document.querySelector('#base'); // style element
const tryItEl = document.querySelector('#try');
const demoTargetStr = document.querySelector('#applies').textContent; // 적용할 선택자
const demoTargetEl = document.querySelector(demoTargetStr);
const selectorEl = document.querySelector('#selector'); // 선택자
const declarationEl = document.querySelector('#declaration'); // 선언부
const codeEl = document.querySelector('#code'); // 코드
const defaultValueStr = tryItEl.querySelector(':checked').nextElementSibling.textContent.replace(/\(.*\)/, ''); // 초깃값

// 기본 스타일을 초깃값으로 적용하기
selectorEl.textContent = demoTargetStr;
declarationEl.textContent = defaultValueStr;
demoTargetEl.setAttribute('style', defaultValueStr);

// 베이스 코드 표시하기
codeEl.textContent = baseStyleEl.textContent;

// 선택한 값을 데모에 적용하기
tryItEl.addEventListener('change', (event) => {
    const selectedValue = event.target.nextElementSibling.textContent.replace(/\(.*\)/, '');

    declarationEl.textContent = selectedValue;
    demoTargetEl.setAttribute('style', selectedValue);
});
