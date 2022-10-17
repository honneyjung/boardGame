<template>
  <router-link :to="{ name: 'PageTwo', params: { id: twoName } }">
    <div class="mainHome">
      <div class="mainHome__tit">
        <div class="mainHome__tit--bgBox">
          <span>HMCNETWORKS</span>
        </div>
        <h1>
          <span class="icon bling"></span>

          LUNCH GAME CLUB
          <span class="icon bling"></span>
        </h1>
        <a style="display: block">Touch on the screen</a>
        <div class="key"></div>
        <ul class="mainHome__tit--icon">
          <li class="txt">
            <span class="icon txtL"></span>
            <span class="icon txtR"></span>
          </li>
          <li class="weapon">
            <span class="icon hammer"></span>
            <span class="icon sword"></span>
          </li>
        </ul>
      </div>
      <div class="mainHome__top">
        <div class="mainHome__top--sword">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="mainHome__top--potion">
          <div class="blue"></div>
          <div class="red"></div>
        </div>
        <ul class="mainHome__top--arrow">
          <li class="arrow up"></li>
          <li class="arrow down"></li>
          <li class="medal"></li>
          <li class="arrow left"></li>
          <li class="arrow right"></li>
        </ul>
      </div>
      <div class="mainHome__bottom">
        <div class="mainHome__bottom--etc">
          <ul class="questBox">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="mainHome__bottom--tree">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      twoName: "게임 리스트",
    };
  },
};
</script>

<style></style>
