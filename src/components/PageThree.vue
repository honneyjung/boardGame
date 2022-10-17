<template>
  <HeaderWrap :pageTit="pageTit" />
  <DetOne v-if="this.pageTit == '할리갈리'" />
  <DetTwo v-if="this.pageTit == '할리갈리컵스'" />
  <DetThree v-if="this.pageTit == '숲속의음악대'" />
  <DetFour v-if="this.pageTit == '다트'" />
  <DetFive v-if="this.pageTit == '탁구'" />
  <DetSix v-if="this.pageTit == '북치기 게임'" />
  <DetSeven v-if="this.pageTit == '루빅스 레이스'" />
  <DetEight v-if="this.pageTit == '다빈치코드'" />
  <DetNine v-if="this.pageTit == '스플렌더'" />
  <DetTen v-if="this.pageTit == '버블버블'" />
  <DetEleven v-if="this.pageTit == '뱅'" />
  <DetTwelve v-if="this.pageTit == '마피아'" />
  <DetThirteen v-if="this.pageTit == '루미큐브'" />
  <DetFourteen v-if="this.pageTit == '바둑(오목)'" />
  <DetFifteen v-if="this.pageTit == '체스'" />
  <DetSixteen v-if="this.pageTit == '장기'" />
  <DetSeventeen v-if="this.pageTit == '젠가'" />
  <DetEighteen v-if="this.pageTit == '펭귄 얼음 깨기'" />
  <DetNineteen v-if="this.pageTit == '원카드'" />
  <DetTwenty v-if="this.pageTit == '모두의마블'" />
  <DetTwentyOne v-if="this.pageTit == '달무티'" />
</template>

<script>
import HeaderWrap from "@/components/HeaderWrap.vue";
import DetOne from "@/components/PageDet/DetOne.vue";
import DetTwo from "@/components/PageDet/DetTwo.vue";
import DetThree from "@/components/PageDet/DetThree.vue";
import DetFour from "@/components/PageDet/DetFour.vue";
import DetFive from "@/components/PageDet/DetFive.vue";
import DetSix from "@/components/PageDet/DetSix.vue";
import DetSeven from "@/components/PageDet/DetSeven.vue";
import DetEight from "@/components/PageDet/DetEight.vue";
import DetNine from "@/components/PageDet/DetNine.vue";
import DetTen from "@/components/PageDet/DetTen.vue";
import DetEleven from "@/components/PageDet/DetEleven.vue";
import DetTwelve from "@/components/PageDet/DetTwelve.vue";
import DetThirteen from "@/components/PageDet/DetThirteen.vue";
import DetFourteen from "@/components/PageDet/DetFourteen.vue";
import DetFifteen from "@/components/PageDet/DetFifteen.vue";
import DetSixteen from "@/components/PageDet/DetSixteen.vue";
import DetSeventeen from "@/components/PageDet/DetSeventeen.vue";
import DetEighteen from "@/components/PageDet/DetEighteen.vue";
import DetNineteen from "@/components/PageDet/DetNineteen.vue";
import DetTwenty from "@/components/PageDet/DetTwenty.vue";
import DetTwentyOne from "@/components/PageDet/DetTwentyOne.vue";
export default {
  name: "PageThree",
  data() {
    return {
      pageTit: "",
    };
  },
  components: {
    HeaderWrap,
    DetOne,
    DetTwo,
    DetThree,
    DetFour,
    DetFive,
    DetSix,
    DetSeven,
    DetEight,
    DetNine,
    DetTen,
    DetEleven,
    DetTwelve,
    DetThirteen,
    DetFourteen,
    DetFifteen,
    DetSixteen,
    DetSeventeen,
    DetEighteen,
    DetNineteen,
    DetTwenty,
    DetTwentyOne,
  },
  created() {
    this.pageTit = this.$route.params.id;
  },
};
</script>

<style></style>
