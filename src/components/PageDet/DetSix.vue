<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>PS4 태고의 달인 모두 함께 쿵딱쿵!</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu20.jpeg" alt="" />
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
          <p>유형 : 순발력</p>
        </div>
      </article>
      <article class="infoBox detGame__info active">
        <div class="infoBox__tit">
          <h3>게임 설명</h3>
        </div>
        <div class="infoBox__con">
          <ol class="infoBox__con--list">
            <img src="@/assets/img/img_taegoplay.jpg" alt="" />
            <li>
              노래에 맞춰 흘러나오는 음표를 타이밍에 맞춰 타격하는 게임입니다. 음표를 치면 혼
              게이지와 콤보가 늘어나고, 놓치면 콤보를 잃게 되고 혼 게이지가 줄어듭니다.
            </li>
            <li>
              <img src="@/assets/img/img_taegobook.jpg" alt="" />
              PS4 태고의 달인 전용 북 컨트롤러 '타타콘'입니다.
            </li>
            <li>
              <div class="infoBox__con--flex">
                <img src="@/assets/img/img_taego01.gif" alt="" />
                <p>쿵</p>
              </div>
              타타콘의 경우 북의 면을 두드려서 칩니다.<br />
              컨트롤러의 경우 오른쪽 / 아래 방향키, 혹은 엑스 / 네모 버튼을 눌러서 칩니다.
            </li>
            <li>
              <div class="infoBox__con--flex">
                <img src="@/assets/img/img_taego02.gif" alt="" />
                <p>딱</p>
              </div>
              타타콘의 경우 테를 두드려서 칩니다.<br />
              컨트롤러의 경우 왼쪽 / 위 방향키, 동그라미 / 세모 버튼, 혹은 L1 / R1 버튼을 눌러서
              칩니다.
            </li>
            <li>
              <div class="infoBox__con--flex">
                <img src="@/assets/img/img_taego03.gif" alt="" />
                <img src="@/assets/img/img_taego04.gif" alt="" />
                <p>쿵(대)</p>
                <p>딱(대)</p>
              </div>
              타타콘의 좌우 혹은 좌우 버튼을 동시에 두드리거나 누르면 두배의 점수를 얻을 수
              있습니다. 기본 음표와 똑같이 한쪽만 눌러도 칠 수 있으나, 점수는 두배로 받을 수
              없습니다.
            </li>
            <li>
              <div class="infoBox__con--flex">
                <img src="@/assets/img/img_taego05.gif" alt="" />
                <img src="@/assets/img/img_taego06.gif" alt="" />
                <p>연타</p>
              </div>
              연타 음표 중 하나로, 정해진 시간동안 북의 면이나 테를 얼마나 많이 두드리냐에 따라
              점수를 줍니다.<br />
              연타 음표는 타수당 100점, 큰 연타 음표는 200점을 줍니다.<br />
              큰 연타 음표의 경우, 모습만 클 뿐 굳이 동시에 치지 않아도 타수당 200점을 줍니다.
            </li>
            <li>
              <div class="infoBox__con--flex">
                <img src="@/assets/img/img_taego07.gif" alt="" />
                <p>풍선</p>
              </div>
              연타 음표 중 하나로, 타수당 300점을 줍니다.<br />
              일정 시간 안에 동이의 말풍선 안에 있는 숫자만큼 두드리면 풍선이 터지며 5000점을 얻게
              됩니다.<br />
              단, 테가 아닌 북면을 칠 때만 두드린 것으로 인정이 됩니다.
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
