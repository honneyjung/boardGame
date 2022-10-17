<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>뱅!</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu07.jpeg" alt="" />
        </div>
      </article>
      <article class="detGame__flex">
        <div class="infoBox">
          <p>2인 ~ 4인</p>
        </div>
        <div class="infoBox">
          <p>
            난이도 :
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starYw"></span>
            <span class="starYw"></span>
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
              <img src="@/assets/img/img_bang01.png" alt="" />
              <p>
                각자 인물 카드를 뽑고, 역할 카드를 뽑아 자신만 확인합니다. <br />
                보안관만 즉시 역할을 공개하고, 다른 사람은 카드판위에 뒤집어 놓습니다.<br />각자
                인물 카드에 그려진 총알 개수만큼 총알 카드로 생명을 표시합니다.(보안관은 생명 1개가
                추가로 부여됩니다.)
              </p>
            </li>
            <li>
              <img src="@/assets/img/img_bang02.png" alt="" />
              <p>차례가 되면 먼저 가운데 카드 더미에서 두 장을 뽑습니다.</p>
              <p>뱅! 카드를 내면 바로 옆에 있는 사람을 공격할 수 있습니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_bang03.png" alt="" />
              <p>뱅! 카드는 차례마다 한 번만 낼 수 있습니다.</p>
              <p>공격을 받은 사람은 빗맞음 카드를 내서 피할 수 있습니다.</p>
              <p>피하지 못했다면 생명점을 즉시 1점 잃습니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_bang04.png" alt="" />
              <p>바로 옆보다 멀리 있는 사람을 쏘려면 좋은 총이 필요합니다.</p>
              <p>총 카드를 내려놓으면 사정거리가 바뀝니다.</p>
              <p>총은 단 한장만 내려놓을 수 있습니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_bang05.png" alt="" />
              <p>그 외에도 맥주, 감옥, 역마차, 다이너마이트 등 다양한 특수 카드들이 있습니다.</p>
              <p>특수 카드는 자기 차례에 자유롭게 사용할 수 있습니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_bang06.png" alt="" />
              <p>
                게임 중 생명을 모두 잃은 사람은 즉시 게임에서 빠집니다. 게임에서 빠질 때 역할을
                공개합니다.<br />
                <b>보안관과 부관</b>은, <b>무법자와 배신자가 모두 사망하면 승리</b>합니다.
                <b>무법자</b>는 <b>보안관이 사망하면 승리</b>합니다.
              </p>
            </li>
          </ol>
        </div>
      </article>
      <article class="infoBox detGame__info active">
        <div class="infoBox__tit">
          <h3>역할 카드</h3>
        </div>
        <div class="infoBox__con">
          <ol class="infoBox__con--list">
            <li>
              <img src="@/assets/img/img_bang07.jpg" alt="" />
              <h4>배신자</h4>
              <p>배신자의 목표는 새로운 보안관이 되기 위해 끝까지 혼자만 살아남는 것입니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_bang08.jpg" alt="" />
              <h4>보안관</h4>
              <p>법과 질서를 수호하기 위해 무법자 전원과 배신자를 제거해야 합니다.</p>
            </li>
            <li>
              <img src="@/assets/img/img_bang09.jpg" alt="" />
              <h4>무법자</h4>
              <p>
                보안관을 제거하는 것이 목표이지만, 현상금에 눈이 멀어 거리낌 없이 다른 무법자를
                제거하기도 합니다.
              </p>
            </li>
            <li>
              <img src="@/assets/img/img_bang10.jpg" alt="" />
              <h4>부관</h4>
              <p>보안관이 목표를 이룰 수 있도록 모든 것을 걸고 보안관을 돕고 보호해야 합니다.</p>
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
