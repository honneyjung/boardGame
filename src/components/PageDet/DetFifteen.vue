<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>체스</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu14.jpeg" alt="" />
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
              <img src="@/assets/img/img_chess01.png" alt="" />
              경기를 시작하기 전에, 기물들을 위의 그림에 나온대로 배치하여야 합니다. 각 선수는 킹과
              퀸을 각각 1개씩, 룩, 나이트, 비숍을 각각 2개씩, 폰은 8개씩 가지고 시작합니다.
            </li>
            <li>
              기물은 상대의 기물을 공격하는데 사용되고 상대의 킹을 체크메이트하면 게임에서
              승리합니다.
            </li>
            <li>
              흰색 기물을 사용하는 선수를 "백"이라고 하며 검은색 기물을 사용하는 선수를 "흑"이라고
              부릅니다. 언제나 백이 첫수를 두게 되며 이후에는 흑과 백이 번갈아가며 한 수씩 둡니다.
              자신의 차례가 되면 반드시 기물을 움직여야 합니다.
            </li>
            <li>
              <img src="@/assets/img/img_chess02.png" alt="" />
              비숍은 대각선 방향으로 칸 수의 제한 없이 움직일 수 있습니다. 어두운 칸 비숍, 밝은 칸
              비숍은 자기의 색의 칸에서만 이동이 가능합니다.
            </li>
            <li>
              <img src="@/assets/img/img_chess03.png" alt="" />
              킹은 후좌우, 대각선 방향으로 한 칸씩 움직일 수 있습니다. 룩하고 캐슬링이 가능합니다.
            </li>
            <li>
              <img src="@/assets/img/img_chess04.png" alt="" />
              나이트는 두 칸 전진한 상태에서 좌우로 한 칸 움직일 수 있다(한국식 장기의 마(馬)와
              유사). 기물들 중에서 유일하게 다른 기물을 뛰어넘을 수 있습니다.
            </li>
            <li>
              <img src="@/assets/img/img_chess05.png" alt="" />
              폰은 초기상태에서 한 칸 혹은 두 칸 전진이 가능합니다. 그 이후로는 한 칸씩만 전진이
              가능하며, 후퇴가 불가능합니다(한국식 장기의 졸(卒) 혹은 병(兵)과 유사). 상대방의
              기물은 대각선 한 칸으로만 잡을 수 있습니다. 특별한 움직임으로 프로모션과 앙파상이
              있습니다.
            </li>
            <li>
              <img src="@/assets/img/img_chess06.png" alt="" />
              룩은 전후와 좌우로 칸 수의 제한 없이 움직일 수 있습니다(한국식 장기의 차(車)와 유사).
              룩은 킹이 캐슬링을 할 때 필요합니다.
            </li>
            <li>
              <img src="@/assets/img/img_chess07.png" alt="" />
              퀸은 전후좌우, 대각선으로 칸수 제한 없이 움직일 수 있습니다. 룩과 비숍을 합쳐 놓은
              것으로 다방면으로 칸수 제한 없이 움직일 수 있어 기물 중 가장 강력하다고 할 수
              있습니다.
            </li>
            <li>
              <img src="@/assets/img/img_chess08.png" alt="" />
              킹 이외의 기물로 적의 킹을 공격하는 수를 체크라고 합니다. 위의 그림은 백색 킹이 흑색
              비숍과 흑색 킹으로부터 탈출할 수 없기 때문에 백색이 체크메이트를 당해 게임이 끝나게
              됩니다.
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
