<template>
  <header>
    <div class="headerWrap">
      <div class="headerTit between">
        <button class="backBtn" type="button" @click="$router.go(-1)">뒤로가기</button>
        <h1>{{ pageTit }}</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderWrap",
  data() {
    return {};
  },
  props: {
    pageTit: String,
  },
};
</script>

<style></style>
