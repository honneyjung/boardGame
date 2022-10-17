<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>모두의 마블</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu16.jpeg" alt="" />
        </div>
      </article>
      <article class="detGame__flex">
        <div class="infoBox">
          <p>2인 ~ 4인</p>
        </div>
        <div class="infoBox">
          <p>
            난이도 :
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starYw"></span>
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
              <p>게임 순서를 정하고, 각작 캐릭터 말을 골라 출발지에 둡니다.</p>
            </li>
            <li>
              <p>
                차례가 되면 주사위 2개를 동시에 던져서 나온 숫자의 합만큼 자신의 말을 이동시킵니다.
              </p>
            </li>
            <li>
              <p>
                도착한 도시에 주인이 없으면 도시를 구매하고 건물을 세웁니다. (토지 증서를
                획득합니다.)
              </p>
            </li>
            <li>
              <p>
                도착한 도시에 주인이 있으면 도시 주인에게 통행료를 지불합니다. 도시에 건물이
                지어져있으면 건물 종류에 따라 통행료를 다르게 계산해야 합니다.
              </p>
            </li>
            <li>
              <p>게임판 한 바퀴를 돌아 출발지를 지날 때는 은행에서 월급 30만 마블을 받습니다.</p>
            </li>
            <li>
              <p>
                단 한사람을 남겨두고 모두 파산하면 게임이 종료됩니다. 또는 한 사람이 승리독점 규칙을
                달성하여도 게임이 종료됩니다.
              </p>
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
