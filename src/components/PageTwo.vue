<template>
  <HeaderWrap :pageTit="pageTit" />
  <SearchList
    :gameData="gameData"
    :gameDataCopy="gameDataCopy"
    :listSwitch="listSwitch"
    :noneSwitch="noneSwitch"
    @listSwitchOn="listSwitchOn"
    @listSwitchOff="listSwitchOff"
    @searchTxt="userSearch"
    @pickList="filterGo"
    @filReset="filReset"
  />
</template>

<script>
import HeaderWrap from "@/components/HeaderWrap.vue";
import SearchList from "@/components/SearchList.vue";
import gameData from "@/assets/game.js";
export default {
  name: "App",
  data() {
    return {
      gameData: gameData,
      gameDataCopy: [...gameData],
      searchTxt: "",
      listSwitch: "",
      noneSwitch: "",
      pageTit: "",
    };
  },
  components: {
    HeaderWrap,
    SearchList,
  },
  props: {
    name: String,
  },
  methods: {
    listSwitchOn() {
      this.listSwitch = "";
    },
    listSwitchOff() {
      this.listSwitch = "list";
    },
    userSearch(userTxt) {
      this.searchTxt = userTxt;
      this.gameDataCopy = this.gameData.filter((data) => {
        return data.title.includes(this.searchTxt);
      });
    },
    filterGo(pickList) {
      this.gameDataCopy = this.gameData.filter((data) => {
        return (
          data.people.includes(pickList[0]) &&
          data.ganre.includes(pickList[1]) &&
          data.level.includes(pickList[2])
        );
      });
    },
    filReset() {
      this.gameDataCopy = this.gameData;
    },
  },
  created() {
    this.pageTit = this.$route.params.id;
  },
  updated() {
    if (this.gameDataCopy.length == 0) {
      this.noneSwitch = "none";
    } else {
      this.noneSwitch = "";
    }
  },
};
</script>

<style>
@import url(@/assets/reset.css);
@import url(@/assets/style.css);
</style>
