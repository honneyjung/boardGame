<template>
  <main class="mainBg">
    <section class="search">
      <h2>어떤 게임을 찾으세요?</h2>
      <form>
        <fieldset class="search__form">
          <input
            type="search"
            placeholder="게임명을 입력해주세요"
            v-model="userTxt"
            @keydown.enter.prevent="searchGo"
          />
          <button type="button" @click="searchGo">
            <span class="a11y-hidden">검색</span><i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </fieldset>
        <fieldset class="search__fil">
          <i class="fa-solid fa-arrow-rotate-right" @click="filterReset"></i>
          <select v-model="selectP" @change="filterGo">
            <option value="" selected disabled>인원</option>
            <option value="2">2인</option>
            <option value="3">3인</option>
            <option value="4">4인</option>
            <option value="5">5인이상</option>
          </select>
          <select v-model="selectG" @change="filterGo">
            <option value="" selected disabled>장르</option>
            <option value="1">순발력</option>
            <option value="2">전략</option>
            <option value="3">두뇌</option>
            <option value="4">운</option>
          </select>
          <select v-model="selectL" @change="filterGo">
            <option value="" selected disabled>난이도</option>
            <option value="1">1단계</option>
            <option value="2">2단계</option>
            <option value="3">3단계</option>
            <option value="4">4단계</option>
            <option value="5">5단계</option>
          </select>
          <button type="button">
            <span class="a11y-hidden">목록형</span
            ><i class="fa-solid fa-list" @click="listSwitchOff" v-if="listSwitch == ''"></i>
            <span class="a11y-hidden">앨범형</span>
            <i class="fa-solid fa-border-all" @click="listSwitchOn" v-if="listSwitch == 'list'"></i>
          </button>
        </fieldset>
      </form>

      <div class="searchRel">
        <h3 class="a11y-hidden">검색 결과</h3>
        <div class="noneList" v-if="noneSwitch == 'none'">
          <i class="fa-solid fa-circle-exclamation"></i>
          <p>검색 결과가 없습니다.</p>
        </div>
        <ul class="search__list" :class="listSwitch">
          <li v-for="(gameRe, i) in gameDataCopy" :key="i">
            <div>
              <router-link :to="{ name: 'PageThree', params: { id: `${gameRe.title}` } }">
                <figure>
                  <img :src="require(`@/assets/img/${gameRe.img}`)" />
                </figure>
                <p>{{ gameRe.title }}</p>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      userTxt: "",
      selectP: "",
      selectG: "",
      selectL: "",
    };
  },
  props: {
    gameData: Object,
    gameDataCopy: Object,
    listSwitch: String,
    noneSwitch: String,
    pageTit: String,
  },
  methods: {
    listSwitchOn() {
      this.$emit("listSwitchOn");
    },
    listSwitchOff() {
      this.$emit("listSwitchOff");
    },
    searchGo() {
      this.$emit("searchTxt", this.userTxt);
    },
    filterGo() {
      this.$emit("pickList", [this.selectP, this.selectG, this.selectL]);
    },
    filterReset() {
      this.$emit("filReset");
    },
  },
};
</script>

<style></style>
