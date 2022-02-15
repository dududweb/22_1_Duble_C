# Team5 응급코딩과 🚑

### 로그인 기능

![Swit - Chrome 1](https://user-images.githubusercontent.com/84889602/153701527-df004d81-fda4-41da-b302-bf4ff2d56fef.gif)

### 채팅방 기능

![Swit - Chrome 2](https://user-images.githubusercontent.com/84889602/153701532-bc9ecfee-8be9-46ab-bb04-1fd6ded4d441.gif)

## 프로젝트 소개

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

## 배포 링크

<a href="https://22-1-duble-c-h949sf0ji-dududweb.vercel.app/">배포 링크</a>

## 개발 인원 및 기간

### 개발기간: 2022/2/14 ~ 2022/2/16

### 개발 인원: 프론트 2명

- <a href="https://github.com/Moro-yong">김태영</a>
- <a href="https://github.com/dududweb">황주영</a>
  <br/><br/>

## 적용 기술 및 협업 툴

### 적용 기술

- Front-End: Next.js, Sass

### 소통 툴

- Git, Github, Slack, Discord

<br/><br/>

## 역할

- [`김태영`]

  - 레이아웃: 좌측 네비게이션 레이아웃 작성
  - 입력창
    - input value를 엔터키로 전송
    - state에 저장된 데이터가 없을 경우 컨텐츠를 입력하지 않으면 전송 불가능 하도록 작성
  - 메시지
    - 내가 전송한 메시지 \* 표시
    - confirm() 함수를 사용하여 삭제버튼 클릭 시 메시지 출력
  - redux:
    - message 추가, 삭제 reducer, action, store

- [`황주영`]

  - 로그인 페이지 레이아웃 구현, 유효성 검사처리.
  - 이미지업로드 기능 및 이미지 redux 전역상태관리 구현.
  - 체팅 작성 일자 표시 기능 추가 및 redux 전역상태관리 구현.

## 프로젝트 회고

- [`김태영`]

  - porps를 여러번 내려줄 때마다 전역상태 관리의 필요성을 느꼈고 이번 프로젝트에서 redux를 사용했습니다. 처음 사용하는 것이라 팀원 모두가 미숙하지만 한번 만들고 사용하게 되니 뎁스가 깊어도 쉽게 불러올 수 있고 컴포넌트 리렌더링이 적어서 redux를 알아갈수록 선녀처럼 보입니다. 새로운 기술을 배우는 것이 어렵지만 왜 이러한 기술이 생기고 사용되는지를 알아갈 수 있는 경험이었습니다.

- [`황주영`]

  - 리덕스를 처음 적용해보면서 다소 어려웠지만 적용하게 된 이후로 전역상태의 편리함을 몸소 느꼈습니다. 이번 리덕스를 적용시킬 때 팀원 모두가 모르는 상태였는데 팀원이 하나되어 같이 공부하고 공유하였기 때문에 리덕스를 적용할 수 있었던 것 같습니다. 또한 앞으로 더욱 공부해야할 부분도 파악하게 되어 뜻 깊었던 프로젝트였습니다.

<br/><br/>

## 설치 및 시작하는 법

- 파일 클론 받기
- git clone
- yarn
- yarn dev
  </br>
