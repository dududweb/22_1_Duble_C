# 더블엔씨 니콘내콘 모바일 웹페이지 과제

## 📌 프로젝트 소개

중고기프티콘 플랫폼 니콘내콘을 Next.js로 구현하는 프로젝트입니다.
<br/><br/>
<span>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3545e2ba-c145-4013-935c-c483e91377dd/ezgif.com-gif-maker_%281%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220321T003844Z&X-Amz-Expires=86400&X-Amz-Signature=0b0078efdd60aaf41bb34e903a89404a229387e710769502eae03409247b9361&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22ezgif.com-gif-maker%2520%281%29.gif%22&x-id=GetObject" alt="이미지1"/>
</span>
<span>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0b9f6fb3-af62-46bf-b120-ea6c4dc9497d/contactview.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220321T003959Z&X-Amz-Expires=86400&X-Amz-Signature=663631d96d1df2b874900d191c4324f327744e5d036fe5212a4118ae711bdc39&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22contactview.gif%22&x-id=GetObject" alt="이미지2"/>
</span>

## 배포링크

<a href="https://22-1-duble-c.vercel.app/">배포 링크</a>
<br/><br/>

## 📌 요구 사항

다음 페이지들을 클론하는 것이 이번 과제의 주된 요구사항이었습니다.

- [니콘내콘 홈페이지](https://ncnc.app/)
- [카테고리별 브랜드 페이지](https://ncnc.app/categories/67)
- [각 브랜드당 제품 페이지](https://ncnc.app/brands/63)
- [제품별 상세설명 페이지](https://ncnc.app/items/137)
- 사이드 메뉴
  <br/><br/>

## 개발 인원

프론트 1명
<br/><br/>

## 적용 기술

- Next.js
- TypeScript
- Sass
- Cypress
- Eslint, Prettier
  <br/><br/>

## 역할

본인역할 <span style="color:red">\*</span> 표시

- <span style="color:red">\*</span> 재사용 가능한 공통컴포넌트 구현.
- <span style="color:red">\*</span> 페이지 레이아웃, 슬라이드, 모달 작성
- <span style="color:red">\*</span> 페이지 동적 라우트 적용
- <span style="color:red">\*</span> 상세페이지 옵션구성 모달, 구매처리
- <span style="color:red">\*</span> 네브바 사이드메뉴
- <span style="color:red">\*</span> FAQ페이지, 모달
- <span style="color:red">\*</span> Cypress를 이용한 E2E 테스트 코드 작성
  <br/><br/>

## 1️⃣ 기억에 남았던 점

- ### 고민했던 문제 & 해결
  - 현재 SSR로 배포된 웹은 처음 방문시 각 페이지 첫 로딩이 오래 걸리는데 이 부분을 해결 하려고 TTV, TTI를 고려하여 리팩토링 중에 있습니다.
  - CRA와 달랐던 NEXT.JS dynamic routing
    - 처음 이해가 가지 않았던 Next.js의 동적라우팅을 공식문서를 계속해서 참고하였고 이젠 Next.js 환경내에서 자유롭게 사용가능해졌습니다.
  - 고객센터 구매, 판매 탭으로 데이터로 불러오기, 토글기능
    - 해당 페이지는 배포 이후 쉽게 바뀌지 않은 페이지이기 때문에 getStaticProps로 데이터를 받아와 구매탭 리스트가 바로 보이도록 초기값을 처리하였습니다.
    - 현재는 질문 토글을 클릭할 시에 답변을 클라이언트단에서 fetch 하여 출력에는 문제가 없이 출력이 되나 위에 설명한 바와 같이 배포 이후 쉽게 바뀌지 않는 데이터인데 이 부분도 클릭시마다 데이터를 불러오는 것이 아닌 pre-render하여 서버 부하를 덜 수 있을까? 라는 추가적인 고민중에 있습니다.

## 2️⃣ 성장한 점

### 2차 시도

- 프로젝트를 완성하지도 Next.js를 제대로 이해하지 못한 1차 시도가 너무 아쉽고, 사이트 전체 페이지 UI, 기능을 혼자서 구현할 수 있는지 확인하고 싶어 혼자서 나머지 프로젝트를 완성시켰습니다.
- 처음 구글을 제외한 포털에서의 SEO 최적화를 위해 나온 Next.js로 프로젝트를 구현 해보면서 SSR, CSR 의 개념과 차이점과 상황에 맞는 렌더링 방식을 선택하여야한다는 것을 알았습니다.
- 다양한 앱의 의존관계가 정확히 작동하는지 확인, 사용자의 시나리오대로 시뮬레이션하고, 본질적으로 사용자가 어떻게 앱을 사용할지 테스트하는 E2E 테스트를 적용하면서 테스트코드 작성의 중요성을 배웠습니다.
- 혼자서 전체 페이지를 제작해보면서 다양한 기능을 접해볼 수 있어 논리적으로 사고하여 구현하는 능력이 향상되었고 자신감이 생겼습니다.

### 1차 시도

- Next.JS를 처음 적용 해보면서 초기세팅부터 해매면서 데이터 수신부터 이해가 안되고 Next.js의 방식을 이해하지 못한 채 진행한 것이 프로젝트 실패로 이어진 것 같습니다. 최종적으로 다 끝내지 못해서 팀, 개인적으로 너무 아쉽다고 생각하지만 이것을 계기로 삼아 Next.JS와 프로젝트 전체구조를 먼저 생각하는 힘에 대해 더욱 심도 있게 공부해야한다고 느꼈습니다.

<br/><br/>

## 설치 및 시작하는 법

- 파일 클론 받기
- git clone https://github.com/dududweb/Pre_Wanted_Duble_C.git
- yarn
- yarn dev
  </br>
