<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>바둑</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu19.jpeg" alt="" />
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
            <span class="starYw"></span>
            <span class="starWh"></span>
            <span class="starWh"></span>
          </p>
        </div>
        <div class="infoBox">
          <p>유형 : 두뇌</p>
        </div>
      </article>
      <article class="infoBox detGame__info active">
        <div class="infoBox__tit">
          <h3>게임 설명</h3>
        </div>
        <div class="infoBox__con">
          <ol class="infoBox__con--list">
            <li>
              흑과 백을 쥔 사람이 한 수씩 번갈아 가며 둡니다. 이때 선공은 무조건 흑을 쥔 사람이
              합니다.
            </li>
            <li>돌이 놓이는 위치는 선과 선이 교차하는 지점입니다.</li>
            <li>
              선과 선이 교차하고 돌이 놓이지 않은 지점이라면 어디든지 돌을 놓을 수 있습니다. 단,
              아래의 8~9와 같은 예외가 존재합니다.
            </li>
            <li>
              <img src="@/assets/img/img_baduk01.png" alt="" />
              한번 놓인 돌은 바둑판 위에서 움직이거나 들어낼 수 없지만 예외로 상대방의 돌을 빈 칸
              없이 자신의 돌로 둘러싸면 위의 백처럼 상대방의 돌을 들어낼 수 있습니다. 이를 돌을
              '따낸다'고 합니다. 같은 색의 돌과 바둑판의 경계선으로 둘러싸인 영역이 자신의 집이며
              경기가 끝난 후 집의 숫자를 세어 더 많은 집을 얻은 쪽이 승리합니다.
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
