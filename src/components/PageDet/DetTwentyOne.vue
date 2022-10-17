<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>달무티</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu17.jpeg" alt="" />
        </div>
      </article>
      <article class="detGame__flex">
        <div class="infoBox">
          <p>4인 ~ 5인 이상</p>
        </div>
        <div class="infoBox">
          <p>
            난이도 :
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starWh"></span>
            <span class="starWh"></span>
          </p>
        </div>
        <div class="infoBox">
          <p>유형 : 전략</p>
        </div>
      </article>
      <article class="infoBox detGame__info active">
        <div class="infoBox__tit">
          <h3>게임 설명</h3>
        </div>
        <div class="infoBox__con">
          <ol class="infoBox__con--list">
            <li>
              <img src="@/assets/img/img_dalmuti01.png" alt="" />
              게임을 시작하기 전에 시작 계급과 자리를 정합니다. 각자 카드를 한장 씩 가져오세요.
              카드에는 1(달무티)부터 13(어릿광대)까지 숫자가 적혀 있습니다.<br />
              카드에 적혀 있는 숫자가 작을수록 높은 계급입니다. 가장 높은 계급의 카드를 뽑은 사람이
              위대한 달무티가 되어 원하는 자리에 앉고, 달무티 왼쪽에 그 다음 높은 계급 순으로
              차례대로 앉습니다.
            </li>
            <li>
              <img src="@/assets/img/img_dalmuti02.png" alt="" />
              농노는 카드를 잘 섞고, 높은 계급순으로 한 장씩 카드가 다 떨어질 때까지 나누어 줍니다.
              카드를 모두 나누어 줬다면, 세금을 주고받을 시간입니다.<br />
              달무티는 원하는 카드 2장을 농노에게, 농노는 가장 높은 계급의 카드 2장을 달무티에게
              줍니다.<br />
              총리대신도 원하는 카드 1장을 소작농에게, 소작농은 가장 높은 계급의 카드 1장을
              총리대신에게 줍니다. 이때, 어릿광대는 세금으로 주고받을 수 없습니다.
            </li>
            <li>
              <img src="@/assets/img/img_dalmuti03.png" alt="" />
              이제 카드를 손에서 내려볼까요?<br />
              물론, 이때도 위대한 달무티부터 시작합니다. 달무티는 같은 숫자의 카드를 원하는 장수만큼
              낼 수 있습니다.<br />
              그 다음 사람은, 더 낮은 숫자(더 높은 계급)의 카드를 같은 장수만큼 내야 합니다. 낼 수
              있는 카드가 없다면 패스합니다. 한 사람이 낸 카드에 대해 다시 그 사람 차례가 돌아올
              때까지 모든 사람이 패스를 외치면 그 라운드가 끝납니다. 여태까지 낸 카드를 모두 치우고,
              이전 라운드에 카드를 마지막으로 낸 사람이 첫 번째 순서가 되어 같은 숫자의 카드를
              원하는 장수만큼 내려놓습니다.
            </li>
            <li>
              <img src="@/assets/img/img_dalmuti04.png" alt="" />
              카드를 먼저 모두 내려놓은 사람은 새로운 달무티가 됩니다. 두번째로 카드를 모두 내려놓은
              사람은 총리대신이 됩니다. 이후에도 카드를 다 사용한 순서로 지위가 정해지고, 마지막까지
              남은 사람은 자동으로 농노가 됩니다. 지위에 따라 자리를 바꿔 앉은 뒤 '2번 세금
              주고받기'부터 다시 시작하세요.
            </li>
            <li>
              <img src="@/assets/img/img_dalmuti05.png" alt="" />
              어릿광대(13)은 조금 특이합니다. 자신의 숫자가 곧 장수인 다른 계급과 달리, 어릿광대는
              딱 두 장 있습니다. 단독으로 내려놓으면 가장 낮은 계급(13)이지만, 다른 카드와 같이 내면
              그 카드와 같은 계급으로 간주합니다.
            </li>
            <li>
              <img src="@/assets/img/img_dalmuti06.png" alt="" />
              달무티에게 높은 계급의 카드를 뺏기는 농노는 평생 낮은 신분으로 살아야할까요? 그렇지
              않습니다! 농노를 포함한 누구나 어릿광대 2장을 가지고 있다면 혁명을 일으킬 수 있습니다.
              혁명이 일어나면 세금을 내지 않아도 됩니다. 농노가 어릿광대 2장을 가지고 있다면
              대혁명이 일어납니다. 농노는 달무티가, 달무티는 농노가, 그리고 모든 사람의 신분이
              뒤바뀌는 신분 역전이 일어납니다! 대혁명이 일어나면 자리만 바꾼 뒤, 새 달무티부터 '3번
              카드를 손에서 내려놓기'를 시작하세요.
            </li>
          </ol>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
