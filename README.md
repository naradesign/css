# 안녕하세요. 질문드려도 괜찮을까요?
CSS playground

안녕하세요. "The RED : 견고한 UI 설계를 위한 마크업 가이드" 강의를 수강하고있는 류수현입니다. 드디어 16강을 듣게되어 실습과제를 풀어보게 되었습니다.
실습과제 중 2번을 강의에서 배운대로 Coverage를 사용해서 unused CSS를 제거하던 중 여쭈어보고싶은 점이 생겨 질문드립니다!

> 실습과제
> 1. https://github.com/naradesign/css 저장소를 포크하세요.
> 2. defer-css.css 파일에서 Unused CSS 코드를 찾아 제거하세요.
> 3. defer-css-unoptimized.html 파일에서 필수 CSS 코드를 <head> 내부에  추가하세요. 
> 4. defer-css-unoptimized.html 파일에서 렌더 블로킹 CSS를 병렬 로딩> (preload)하고 지연 적용(onload)하세요.
> 5. https://github.com/naradesign/css 저장소에 Pull Request를 보내주세요.

<br><br>

# 질문

```CSS
/* defer-css.css 에 있는 코드입니다 */
h1 {
      word-spacing: 5px;
      color: blue;
      font-weight: bold;
      text-align: center;
    }
```
h1태그는 기본값으로 `font-weight: bold;`를 가져서 두꺼운 글자로 표시된다고 알고있어 h1에 bold를 준적이 없었습니다. 하지만 실습과제의 코드를 보고 제가 여태껏 잘못 작성해온게 아닐까 걱정이 들어 여쭈어봅니다.
- 브라우저나 버전에 따라 h1의 기본값이 bold가 아닌 경우가 있기에 `font-weight: bold;`를 적는거라면 앞으로도 heading 태그가 두껍게 표시되길 바랄때는 bold를 명시하는것이 더 좋은 코드인가요?
- 위의 이유가 아니라면 h1의 `font-weight: bold;`부분도 Unused CSS에 속하는 건가요?

너무 기초적인 질문을 드리는거같아 실례가 될까 조심스럽지만 검색하여도 관련된 내용을 제대로 찾지 못해 질문드립니다.

긴 질문을 읽어주셔서 감사합니다.






