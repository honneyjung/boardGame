<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>다빈치코드</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu01.jpeg" alt="" />
        </div>
      </article>
      <article class="detGame__flex">
        <div class="infoBox">
          <p>인원수 : 2인 ~ 5인이상</p>
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
              모든 블록을 뒤집어 섞어둔 후 2/3인 플레이는 4개, 4인 플레이는 3개의 패를 가져간다.
              시작패에는 조커가 있으면 안 된다. 단, 다른 플레이어들과 상의하여 시작패에 넣을 수
              있도록 규칙을 변형할 수 있다. 조커를 집은 사람은 조커를 돌려놓고 다른 패를 뽑은 후
              다시 잘 섞어둔다. 자신의 패를 규칙대로, 그러나 다른 사람에게 숫자가 보이지 않게
              세워둔다. 자신을 기준으로 왼쪽이 작은 수, 오른쪽이 큰 수가 되도록 배열해야 한다.
              검은색과 흰색이 같은 숫자일 경우 검은색을 왼쪽에 놓으나, 경우에 따라흰 것을 왼쪽에
              두기도 하고 각자 좋을 대로 하기도 한다.
            </li>
            <li>가위바위보 등 임의의 방법으로 차례를 정한다.</li>
            <li>
              자신의 차례에는 뒤집어 둔 블록을 하나 가져와 규칙대로 자기 패에 끼워넣는다. 이때
              가져온 것이 조커블록이라면 자신이 원하는 위치에 집어 넣을 수 있다
            </li>
            <li>
              다른 플레이어 중 아무의 것이나 블록 하나를 지목해 숫자를 맞혀야 한다. 말한 숫자가
              맞다면 상대는 그 블럭을 보이도록 눕혀 공개해야 한다. 틀렸다면, 숫자를 말한 사람이 그
              차례에 가져갔던 블록을 눕혀 공개해야 한다. 숫자를 맞히지 못하고 자신의 블록을
              공개했다면 차례가 끝나고 다음 사람에게 넘어간다. 그러나 맞혔다면 두가지 선택을 할 수
              있다.
            </li>
            <li>
              선택지는 다른 블록을 맞히는 데 더 도전하느냐, 아니면 차례를 넘기느냐이다. 재도전하려면
              아직 공개되지 않은 다른 사람의 블록을 또 하나 추리해 숫자를 말하면 된다. 이 기회는
              틀리지 않고 맞힌다면 끝없이 계속 이어진다. 틀릴 경우에는 4번과 같다. 또는 맞히는 것을
              중단하고 차례를 그냥 넘길 수 있다. 자신이 가져온 패를 공개하는 위험을 피하는 것이다.
              하나 이상의 패를 맞힌 승자의 권리인 셈. 연속해서 맞히던 도중이라면 아무 때나 차례를
              중단하고 넘길 수 있다.
            </li>
            <li>숫자가 모두 드러난 사람은 패한다. 마지막까지 살아남은 사람이 승자.</li>
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
