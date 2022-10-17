<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>탁구</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu21.jpeg" alt="" />
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
          <img src="@/assets/img/img_pingpong.png" alt="" />
          <ol class="infoBox__con--list">
            <li>
              득점은 1점씩이며 먼저 11점에 이른 사람이 1게임을 얻습니다.보통 5판 3선승제로
              진행됩니다. 10:10 일 경우 듀스가 되어 먼저 2점을 따는 쪽이 이기게 됩니다.
            </li>
            <li>
              단식은 서브를 어느 위치에서 하든지 상관이 없습니다. 하지만 복식의 경우에는 테이블의
              오른쪽에서 왼쪽 대각선 방향으로 해야합니다.
            </li>
            <li>복식은 자신의 팀원과 번갈아가며 한번씩 쳐야합니다.</li>
            <li>
              서브를 할때 네트를 걸쳐서 서브를 하게되면 '네트'가되며 점수로 인정되지않고 서브를 다시
              시도해야하며 네트의 횟수는 제한이 없습니다.
            </li>
            <li>
              서브는 번갈아가며 2번씩 합니다.점수가 10대 10이 되었을경우에는 서브를 1번씩 번갈아가며
              2점차이로 먼저 이긴쪽이 해당 세트를 승리하게됩니다.
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
