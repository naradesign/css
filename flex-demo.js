const baseStyleEl = document.querySelector('#base');
const tryItEl = document.querySelector('#try');
const demoEl = document.querySelector(document.querySelector('#applies').textContent);
const codeEl = document.querySelector('#code');

// 기본 스타일을 초깃값으로 적용하기
demoEl.setAttribute('style', tryItEl.querySelector(':checked').nextElementSibling.textContent);

// 베이스 코드 표시하기
codeEl.textContent = baseStyleEl.textContent;

// 선택한 값을 데모에 적용하기
tryItEl.addEventListener('change', (event) => {
    demoEl.setAttribute('style', event.target.nextElementSibling.textContent);
});
