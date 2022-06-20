<template>
  <div class="top_navigation" style="min-width: 1300px">
    <!-- 左上方图标与音乐 -->
    <div>
      <div style="" @click="paly_music">
        <img
          v-show="plays"
          src="@/imge/播放开.png"
          style="
            width: 30px;
            height: 30px;
            cursor: pointer;
            position: fixed;
            z-index: 6;
            top: 18px;
            left: 70px;
            -moz-user-select: none;
            -ms-user-select: none;
            -webkit-user-select: none;
            user-select: none;
          "
        />
        <img
          src="@/imge/播放关.png"
          v-show="!plays"
          style="
            width: 30px;
            height: 30px;
            cursor: pointer;
            position: fixed;
            z-index: 6;
            top: 18px;
            left: 70px;
            -moz-user-select: none;
            -ms-user-select: none;
            -webkit-user-select: none;
            user-select: none;
          "
        />
        <audio
          src="@/audio/原神背景音频.mp3"
          :loop="loop"
          ref="myVideo"
          autoplay="autoplay"
        />
      </div>

      <a class="header_logo" style="width: 317px; height: 100%"></a>
    </div>
    <!-- 顶部导航区 -->
    <div>
      <div style="margin-left: -34px; width: auto" class="top_nav">
        <router-link
          @click="btnClick(index)"
          v-for="(item, index) in topname"
          :key="index"
          :to="item.path"
          :class="{ a: currentIndex == index }"
          class="jump"
          >{{ item.name }}</router-link
        >
        <a href="https://bbs.mihoyo.com/ys/" class="jump">社 区</a>
      </div>
    </div>

    <div class="Login_related">
      <div>
        <a
          href="https://jiazhang.mihoyo.com"
          style="display: flex; align-items: center; margin-right: 20px"
        >
          <span>成长关爱系统</span>
          <img
            style="margin-left: 18px; width: 27px; height: 27px; opacity: 0.6"
            src="@/imge/下载.png"
          />
        </a>
      </div>
      <div style="display: flex; align-items: center; padding: 0 10px">
        <span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">登 录</span>
        <img
          src="@/imge/用户头像隐.png"
          style="margin-left: 18px; opacity: 0.6"
        />
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      plays: false,
      loop: true,
      currentIndex: 0,
      topname: [
        {
          name: "首 页",
          path: "/",
        },
        {
          name: "新 闻",
          path: "/news",
        },
        {
          name: "角 色",
          path: "/rloe/mondstadt",
        },
        {
          name: "世 界",
          path: "/map",
        },
        {
          name: "漫 画",
          path: "/manga",
        },
      ],
    };
  },
  methods: {
    paly_music() {
      this.plays = !this.plays;
      if (this.plays == true) {
        this.$refs.myVideo.play();
      } else {
        this.$refs.myVideo.pause();
      }
    },
    btnClick(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    this.$refs.myVideo.play();
  },
};
</script>
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  min-width: 1300px;
}
.top_navigation {
  background-color: rgba(17, 17, 17, 0.75);
  display: flex;
  width: 100%;
  height: 66px;
  position: fixed;
  z-index: 6000;
  top: 0;
}
.header_logo {
  margin-left: 8px;
  margin-right: 0px;
  width: 317px;
  height: 100%;
  background: url(https://ys.mihoyo.com/main/_nuxt/img/f78aabc.png) no-repeat 0
    0;
  cursor: pointer;
  opacity: 1;
  display: block;
}
.jump {
  height: 66px;
  line-height: 66px;
  position: relative;
  float: left;
  width: auto;
  height: 66px;
  margin: 0 30px !important;
  line-height: 66px;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ccc;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-decoration: none;
}
.jump:hover {
  text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
  color: #fff;
}
.a {
  text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
  color: #fff;
}
.Login_related {
  position: absolute;
  right: 30px;
  height: 100%;
  top: 0;
  align-items: center;
  display: flex;
}
a {
  text-decoration: none;
}
.Login_related span {
  font-size: 17px;
  color: #ccc;
}
.Login_related :hover {
  opacity: 1;
}
</style>
