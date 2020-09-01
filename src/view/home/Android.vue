<template>
  <div id="me-tip" class="tip">
    <div v-if="WIOS" class="tipm">
      <img src="../../assets/android.png" alt />
    </div>
    <div v-if="WADR" class="tipm">
      <img src="../../assets/android.png" alt />
    </div>
    <!-- <div v-if="browserFlag">333</div> -->
  </div>
</template>
<script>
  // import MeTitle from "@/components/MeTitle";
  // import Detail from "@/components/Detail";
  // import img from "@/assets/culture.jpg";
  export default {
    // name: "me-tip",
    components: {
      // MeTitle,
      // Detail
    },
    data() {
      return {
        browserFlag: false, //是否在浏览器中
        WIOS: false, //ios的微信中
        WADR: false, //Android的微信中
      };
    },

    methods: {},
    created() {
      const ua = navigator.userAgent.toLowerCase();

      if (/micromessenger/.test(ua)) {
        //在微信中
        this.browserFlag = false;
        if (/android/.test(ua)) {
          //在安卓中
          this.WADR = true;
          this.WIOS = false;
        } else {
          //在IOS中
          this.WADR = false;
          this.WIOS = true;
        }
      } else {
        //在浏览器中
        this.browserFlag = true;
        this.WIOS = false;
        this.WADR = false;
      }
    },
  };
</script>
<style lang="less" scoped>
  .tipm {
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
