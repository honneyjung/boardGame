<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>스플렌더</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu09.jpeg" alt="" />
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
              <img src="@/assets/img/img_splendor08.png" alt="" />
              스플렌더에서는 점수를 가장 많이 모은 사람이 승리합니다. 해당 점수는 각 개발 카드와
              귀족 타일에 표시되어 있습니다.
            </li>
            <li>
              <img src="@/assets/img/img_splendor01.png" alt="" />
              각 보석 토큰을 종류별로 한쪽에 잘 놓습니다. 세 종류의 발전 카드 더미를 나누어 가운데
              놓고, 더미별로 4장씩 펼쳐 앞면이 공개된 채로 놓습니다. 4명이서 게임할 경우 귀족 카드
              더미에서 5장을 뺴어 앞면이 공개된 채로 맨 위에 놓습니다. 이제 게임을 시작할 준비가
              되었습니다.
            </li>
            <li>
              <img src="@/assets/img/img_splendor02.png" alt="" />
              시작 플레이어부터 차례를 시작힙니다. 자신의 차례에는 3가지 행동 중 하나를 할 수
              있습니다.
            </li>
            <li>
              <img src="@/assets/img/img_splendor03.png" alt="" />
              자신의 차례에는 보석을 선택해서 가져갈 수 있습니다. 각각 다른 종류의 보석을 3개
              가져가거나, 공동창고에 4개 이상 남아있는 한 종류의 보석을 2개 가져갈 수 있습니다.
              보석은 최대 10개까지만 가질 수 있기 때문에 가지고 있는 보석이 10개가 넘는 경우,
              선택해서 다시 공동창고에 돌려놓습니다.
            </li>
            <li>
              <img src="@/assets/img/img_splendor04.png" alt="" />
              자신의 차례에는 보석을 지불하고 테이블 또는 손에 있는 개발 카드를 구입할 수 있습니다.
              개발 카드의 비용은 왼쪽 아래에 표시되어 있습니다. 해당하는 보석을 공동창고에 돌려놓고
              카드를 가져와 자신의 앞에 놓습니다. 자신이 이미 가지고 있는 개발 카드가 있다면 그에
              그려져 있는 보석만큼 추가 할인을 받을 수 있습니다.
            </li>
            <li>
              <img src="@/assets/img/img_splendor05.png" alt="" />
              자신의 차례에는 자신이 미래에 구입하고 싶은 개발 카드를 손으로 들고 와서 보관 할 수
              있습니다. 이 행동을 할 때, 황금 토큰이 공동창고에 있다면 하나를 가져올 수 있습니다.
              황금 토큰은 어떤 보석으로도 쓰일 수 있습니다. 손에 보관할 수 있는 개발 카드는 최대
              3장입니다.
            </li>
            <li>
              <img src="@/assets/img/img_splendor06.png" alt="" />
              자신의 차례가 끝나고 귀족 카드에 쓰여있는 개발 카드 조건을 만족시켰다면, 즉시 귀족
              타일을 들고와서 자신의 앞에 놓습니다. 귀족 타일을 가져오는 것은 행동에 포함되지
              않습니다. 귀족 타일에 그려진 색상의 개발카드를 해당 숫자 만큼 가지고 있다면 귀족
              타일을 한 차례에 한장씩 가져올 수 있습니다. 귀족 타일은 3점을 줍니다.
            </li>
            <li>
              <img src="@/assets/img/img_splendor07.png" alt="" />
              차례가 끝난 후, 플레이어 중 한 명이 개발 카드와 귀족 타일의 점수를 모두 합하여 15점을
              충족했다면 마지막 순서인 플레이어까지 행동을 하고 게임이 종료됩니다. 게임이 종료된 후
              점수가 가장 높은 플레이어가 승리합니다.
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
