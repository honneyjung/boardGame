<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>루미큐브</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu11.jpeg" alt="" />
        </div>
      </article>
      <article class="detGame__flex">
        <div class="infoBox">
          <p>인원수 : 2인 ~ 4명</p>
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
              <img src="@/assets/img/img_rummi01.png" alt="" />
              각자 받침대를 하나씩 가져갑니다. 숫자 타일을 잘 섞은 다음, 뒷면으로 몇 개의 더미를
              만듭니다. <br />
              그 후, 각자 14개씩 타일을 뽑아 받침대에 올려놓습니다. 다른 플레이어가 보지 못하도록
              해주세요.
            </li>
            <li>
              <img src="@/assets/img/img_rummi02.png" alt="" />
              총 합이 30 이상인 타일을 등록합니다.<br />
              자신의 차례가 되면, 타일 중 조건이 되는 타일을 바닥에 내려놓을 수 있습니다. 타일을
              내려놓으려면, 같은 색깔의 연속되는 숫자 3개 이상이 되도록 내려놓거나 다른 색깔의 같은
              숫자 3개 이상이 되도록 내려놓아야 합니다.<br />

              게임을 시작하고 처음으로 내려놓는 타일은 반드시 그 숫자의 합이 30 이상이어야 합니다.
              이를 '등록'이라고 합니다. 동시에 여러 조합을 내리면서 그 총합이 30이 넘어도 됩니다.
            </li>
            <li>
              <img src="@/assets/img/img_rummi03.png" alt="" />
              첫 타일을 내려놓아 이미 등록을 마친 상황이라면, 타일을 내려놓을 때 바닥에 이미 있는
              조합에 타일을 추가하거나 바닥에 있는 타일을 사용하여 새로운 조합을 구성해서 내려놓아도
              됩니다. (이 경우 타일을 1개 또는 2개만 내려놓을 수도 있습니다.)<br />
              다만, 조합이 끝나고 나서 바닥에 놓여진 타일은 모두 규칙에 맞게 놓여져 있어야
              합니다.(다른 색깔의 같은 숫자 3개이상 / 같은 색깔의 연속되는 숫자 3개 이상) 조커
              타일은 색깔, 숫자 상관없이 조합에서 타일 하나를 대신할 수 있습니다.
            </li>
            <li>
              <img src="@/assets/img/img_rummi04.png" alt="" />
              만약 차례가 되었을 때 내려놓을 수 있는 타일이 없다면, 숫자 타일더미에서 타일 1개를
              가져와 자신의 받침대에 놓고 차례를 마칩니다.
            </li>
            <li>
              <img src="@/assets/img/img_rummi05.png" alt="" />
              한 플레이어가 자신의 받침대에 있는 타일을 모두 사용했다면, 받침대를 넘어뜨려
              공개합니다.<br />그 플레이어가 즉시 승리합니다!
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
