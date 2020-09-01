<template>
  <div>
    <div class="header">
      千名“驻县进乡”地质队员全员培训资料下载
    </div>
    <div class="content">
      <div class="item" v-for="item in VideoList" :key="item.Id">
        <!-- <img class="img" v-if="item.Type==='ppt'||item.Type==='pptx'" src="../assets/ppt.png" alt /> -->
        <video
          v-if="item.Type !== 'ppt' || item.Type !== 'pptx'"
          class="video"
          controls="controls"
          controlsList="nodownload"
        >
          <!-- 开发 -->
          <!-- <source :src="'http://192.168.21.39:89' + item.FilePath" type="video/mp4" /> -->
          <!-- 发布 -->
          <source :src="item.FilePath" type="video/mp4" />
        </video>
        <div class="title">{{ item.Name }}</div>
        <!-- <div @click="download(item.FilePath)" class="download">下载</div> -->
        <div class="download">
          <van-button
            @click="download(item.FilePath)"
            class="downbtn"
            type="info"
            size="small"
            >下载视频</van-button
          >
          <van-button
            @click="download(item.PPTPath)"
            class="downbtn"
            type="info"
            size="small"
            :disabled="item.PPTPath ? false : true"
            >下载PPT</van-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getListReq } from "../api/user";
// import { downloadVideo } from "../api/user";
export default {
  data() {
    return {
      Name: "",
      VideoList: [],
    };
  },
  created() {
    this.getVideoList();
  },
  methods: {
    getVideoList() {
      getListReq({ Name: this.Name }).then((res) => {
        // console.log(res.data.data);
        this.VideoList = res.data.data;
        console.log(this.VideoList);
        if (!res.data.success) {
          return this.$Message.error(res.data.errmsg);
        }
      });
    },
    download(path) {
      if (path) {
        window.open(
          // "http://192.168.21.39:89/VideoInfo/Download?FilePath=" + path //开发
          "/VideoInfo/Download?FilePath=" + path //发布
        );
      } else {
        this.$notify("改文件不存在");
      }
      // downloadVideo({ FilePath: path }).then((res) => {
      // console.log(res);

      // });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
  background-color: #4377f0;
}
.content {
  // width: 100%;
  margin: 10px 20px 0 20px;
  .title {
    padding: 5px 0;
    font-size: 12px;
    text-align: center;
  }
  .download {
    display: flex;
    justify-content: space-between;
    margin: 5px auto;
    width: 70%;
    color: #ffffff;

    .downbtn {
      font-size: 14px;
      // background-color: #4377f0;
      // text-align: center;
      text-align: center;
      padding: 3px 13px;
      border-radius: 15px;
      // padding: 5px;
    }
  }
  .item {
    padding: 10px;
    .img {
      width: 100%;
    }
    .video {
      width: 100%;
    }
  }
}
</style>
