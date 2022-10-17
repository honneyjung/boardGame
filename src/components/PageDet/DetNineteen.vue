<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>원카드</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu15.jpeg" alt="" />
        </div>
      </article>
      <article class="detGame__flex">
        <div class="infoBox">
          <p>2인 ~ 5인 이상</p>
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
          <ol class="infoBox__con--list">
            <li>
              <img src="@/assets/img/img_one01.png" alt="" />
              <p>
                모든 카드를 잘 섞은후 플레이어들은 각각 7장씩 나눠갖고, 남은 카드는 뒷면이
                보이도록하여 테이블 가운데에 쌓아둡니다.
              </p>
            </li>
            <li>
              <img src="@/assets/img/img_one02.png" alt="" />
              <p>가운데 카드 더미에서 한 장을 펼쳐 옆에 두고, 순서를 정해 게임을 진행합니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_one03.png" alt="" />
              <p>
                차례가 되면 카드 더미 옆 펼쳐진 카드와 <b>색깔</b>, <b>숫자</b>,
                <b>능력(특수카드)</b>
                중 한 가지 조건이 같은 카드 1장을 내려놓을 수 있습니다.
              </p>
            </li>
            <li>
              <img src="@/assets/img/img_one04.png" alt="" />
              버릴 수 있는 카드가 없거나, 내고 싶은 카드가 없다면 카드 더미에서 카드를 1장 가져오고
              차례를 마쳐요.
            </li>
            <li>
              <img src="@/assets/img/img_one05.png" alt="" />
              자기 차례에 카드를 버리고 손에 1장의 카드만 남게된다면 그와 동시에 "원카드!" 라고
              외쳐야 합니다. 다음 플레이어가 나보다 먼저 "원카드"를 외치면 벌칙으로 카드를 2장
              가져와야 합니다.
            </li>
            <li>
              <img src="@/assets/img/img_one10.png" alt="" />
              누군가가 손에 든 카드를 모두 내려놓으면 게임이 끝나고, 그 플레이어가 게임에서
              승리합니다.
            </li>
          </ol>
        </div>
      </article>
      <article class="infoBox detGame__info active">
        <div class="infoBox__tit">
          <h3>특수 카드</h3>
        </div>
        <div class="infoBox__con">
          <ol class="infoBox__con--list">
            <li>
              <img src="@/assets/img/img_one06.png" alt="" />
              <h4>+2 공격 (숫자 +2)</h4>
              <p>
                다음 플레이어는 +2 카드를 내지 못하면 카드 더미에서 2장의 카드를 가져간 다음 차례를
                마칩니다.
              </p>
              <p class="dash">공격 카드는 같은 능력의 공격 카드를 내서 막을 수 있습니다.</p>
              <p class="dash">
                공격 카드를 막지 못한 플레이어는 여태까지 모인 공격 카드의 효과를 전부 더해 카드를
                가져와야 합니다.
              </p>
            </li>
            <li>
              <img src="@/assets/img/img_one07.png" alt="" />
              <h4>점프 (자물쇠)</h4>
              <p>다음 플레이어를 건너 뛰고, 두 번째 차례의 플레이어부터 차례를 시작합니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_one08.png" alt="" />
              <h4>유턴 (종이비행기)</h4>
              <p>진행 방향을 반대로 바꿉니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_one09.png" alt="" />
              <h4>무지개 (바람개비)</h4>
              <p>이 카드는 모든 카드 위에 내려놓을 수 있습니다.</p>
              <p>이 카드를 내려놓은 플레이어는 이후부터 내려놓을 카드의 색깔을 정할 수 있습니다.</p>
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
