<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>할리갈리</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu08.jpeg" alt="" />
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
          <img src="@/assets/img/img_halliplay.jpg" alt="" />
          <ol class="infoBox__con--list">
            <li>
              시작하기 전에, 75장의 카드를 나누어 각자의 앞에 놓고 종을 중앙에 놓는다. 단, 카드는
              본인도 뭘 가지고 있는지 모르게 뒤집어 놓는다.
            </li>
            <li>
              정해진 방향으로 돌아가면서, 각자 카드를 한 장씩 뒤집어서 놓으며 공개합니다. 핵심 룰은
              다른사람이 먼저 카드를 볼 수 있도록 카드를 바깥쪽(종에 가까운 쪽)부터 뒤집는 것입니다.
              한바퀴가 돌아서 다시 본인의 차례가 돌아오면 본인이 놓았던 카드 위에 새 카드를 뒤집어서
              놓습니다.
            </li>
            <li>
              바닥에 놓인 펼쳐진 카드들 중에서 같은 과일의 개수가 가장 먼저 5개가 될 때 앞에
              세팅해놓은 종을 최대한 빨리 칩니다. 이 때 '한 바퀴'를 기준으로 5개이며, 누적으로 5개가
              아닙니다. 즉, 새로운 카드에 의해 가려진 카드는 효력이 없어지게 됩니다. 5개가 되어 가장
              빨리 종을 친 사람이 이번 게임의 승자가 되어서 바닥에 놓인 모든 카드를 가져갑니다.
            </li>
            <li>
              같은 과일의 개수가 5개가 되지 않았는데 종을 치면 벌칙으로 카드 한 장 씩을 다른
              사람에게 줍니다. 그리고 그동안 낸 카드를 종 밑에 엎어놓습니다. 그 다음판에 종을
              올바르게 친 사람이 종 밑의 카드도 전부 가져갑니다.
            </li>
            <li>
              게임은 카드를 모으는 식으로 진행되며, 카드를 모두 잃으면 탈락하고 마지막까지 카드가
              남아있는 사람이 승리하게 됩니다.
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
