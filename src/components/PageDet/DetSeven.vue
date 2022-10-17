<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>루빅스 레이스</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu04.jpeg" alt="" />
        </div>
      </article>
      <article class="detGame__flex">
        <div class="infoBox">
          <p>인원수 : 2인</p>
        </div>
        <div class="infoBox">
          <p>
            난이도 :
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starWh"></span>
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
          <img src="@/assets/img/img_rubiks.png" alt="" />
          <ol class="infoBox__con--list">
            <li>
              두사람이 마주보고 앉아 여섯가지 색깔 타일을 각각 4개씩 나눠가진 후, 자기 앞에 놓인
              '밑판'에 꽂습니다. 빈칸이 딱 1칸 남으면 준비가 완료됩니다.
            </li>
            <li>
              색깔 큐브가 들어있는 뒤죽박죽 문제 생성기를 마구 흔들어줍니다. 아무도 보지 못하게
              손으로 가립니다.
            </li>
            <li>가리고 있던 손을 치워서 패턴을 동시에 공개합니다.</li>
            <li>
              두 도전자는 자기 앞에 높인 타일 24개를 움직여서 자기 앞에 놓인 '밑판'의 중앙 9칸을
              뒤죽박죽 문제 생성기와 똑같은 모양이 되게 만들어야 합니다. 바깥 테두리는 신경쓰지
              않습니다.
            </li>
            <li>
              먼저 패턴을 완성한 도전자는 게임판 가운데에 세워진 액자형 틀을 자기 쪽으로 당겨서
              내려놓습니다. 액자형 틀 사이로 보이는 타일 9개의 모양이 뒤죽박죽 문제 생성기의 패턴과
              똑같으면 승리합니다! 승리한 도전자가 뒤죽박죽 문제 생성기를 다시 흔들어서 다음
              플레이를 합니다.
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
