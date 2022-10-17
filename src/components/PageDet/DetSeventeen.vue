<template>
  <main class="mainBg">
    <div class="basicWrap detGame">
      <article class="infoBox">
        <div class="infoBox__tit">
          <h2>젠가</h2>
        </div>
        <div class="infoBox__con">
          <img src="@/assets/img/thu05.jpeg" alt="" />
        </div>
      </article>
      <article class="detGame__flex">
        <div class="infoBox">
          <p>인원수 : 2인 ~ 5인 이상</p>
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
          <p>유형 : 운</p>
        </div>
      </article>
      <article class="infoBox detGame__info active">
        <div class="infoBox__tit">
          <h3>게임 설명</h3>
        </div>
        <div class="infoBox__con">
          <ol class="infoBox__con--list">
            <li>
              <img src="@/assets/img/img_jenga01.png" alt="" />
              순서를 정하고 자기 차례가 되면 자신이 꺼내고자 하는 나무 블록을 선택하여 한 손만을
              이용해 나무 블록을 꺼냅니다. 단, 한 번 손이 닿은 블록은 원래 위치에 돌려 놓아야
              합니다.
            </li>
            <li>
              <div class="infoBox__con--flex center">
                <img src="@/assets/img/img_jenga02.png" alt="" />
                <img src="@/assets/img/img_jenga03.png" alt="" />
              </div>
              꺼낸 블록은 위 사진처럼 나무 블록위 맨 위에 쌓아 올립니다. 사진에 표시한 모양으로만
              가능하며, 세로로 쌓을 수 없으먀, 밑의 층과 엇갈려 쌓아야 합니다.
            </li>
            <li>
              <img src="@/assets/img/img_jenga04.png" alt="" />
              같은 방법으로 계속 게임을 진행한 후 나무탑을 쓰러트리는 사람이 지게 됩니다.
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
