<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>다트</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu03.jpeg" alt="" />
        </div>
      </article>
      <article class="detGame__flex">
        <div class="infoBox">
          <p>인원수 : 2인 ~ 4인</p>
        </div>
        <div class="infoBox">
          <p>
            난이도 :
            <span class="starYw"></span>
            <span class="starWh"></span>
            <span class="starWh"></span>
            <span class="starWh"></span>
            <span class="starWh"></span>
          </p>
        </div>
        <div class="infoBox">
          <p>유형 : 순발력</p>
        </div>
      </article>
      <article class="infoBox detGame__info active">
        <div class="infoBox__tit">
          <h3>게임 설명</h3>
        </div>
        <div class="infoBox__con">
          <ol class="infoBox__con--list">
            <li>
              게임을 먼저 시작할 순서를 정하는 것을 코크(Cork) 또는 디들(Diddle)이라고 합니다. 서로
              한 개씩 다트를 던져 불(중앙)에 가깝게 간 사람이 먼저 시작합니다.
            </li>
            <li>한 선수당 순서대로 3개의 다트를 던집니다. 이를 1스로우(Throw)라고 합니다.</li>
            <li>
              1스로우를 마치면 다트 보드에서 자신의 다트를 회수하고, 다음 차례 선수가 던집니다.
            </li>
            <li>이렇게 양 선수가 1스로우를 마치면 이를 1라운드(Round)라고 합니다.</li>
            <li>총 10라운드를 하고 더 높은 점수를 얻은 플레이어가 우승합니다.</li>
            <li>
              다음 선수의 스로우가 남았어도 경기의 승패가 결정되면 다음 선수의 스로우 기회 없이
              경기가 종료됩니다.
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
