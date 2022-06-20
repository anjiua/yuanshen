<template>
  <div class="a">
    <!-- 视频主页板块 -->
    <div class="main">
      <div class="pv_head">
        <video
          :loop="loop"
          :autoplay="autoplay"
          ref="pv"
          muted
          style="min-width: 1920px"
        >
          <source src="@/audio/原神pv.mp4" type="audio/mp4" />
        </video>
      </div>
      <!-- 主页下载内容 -->
      <div class="poster__sign">
        <!-- 播放宣传片 -->
        <div class="poster__video--entry">
          <button class="poster__video" @click="play_video"></button>
        </div>
        <!-- 中部下载详情 -->
        <div class="ys-download-pc">
          <!-- 二维码 -->
          <div class="ys-download-pc__box--download">
            <img
              src="@/audio/二维码图标.jpg"
              class="ys-download-pc__qr__icon"
            />
            <img
              src="@/audio/二维码.png"
              class="ys-download-pc__qr__code"
              style="padding-bottom: 4px"
            />
          </div>
          <!-- ps4and苹果下载 -->
          <div class="ys-download-pc__group">
            <a
              style="height: 55px"
              href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/ps4_default"
            >
              <img src="@/audio/ps4下载.png" />
            </a>
            <a
              href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/ios_default"
            >
              <img src="@/audio/苹果下载.png" alt="" />
            </a>
          </div>
          <!-- tap和安卓下载 -->
          <div class="ys-download-pc__group">
            <a
              style="height: 55px"
              href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/taptappc_default"
            >
              <img src="@/audio/tap下载.png" />
            </a>
            <a
              href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/android_default"
            >
              <img src="@/audio/安卓下载.png" />
            </a>
          </div>
          <!-- pc下载 -->
          <a
            style="width: 111px; height: 111px; padding-bottom: 3px"
            href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/pc_default"
          >
            <img src="@/audio/pc下载.png" alt="" />
          </a>
        </div>
        <!--适龄提示图标 -->
        <div class="poster__badge" @click="age_close">
          <img src="@/audio/适龄提示.png" />
        </div>
        <!-- 下拉提示 -->
        <div class="poster__arrows">
          <div class="poster__arrow poster__arrow-1"></div>
          <div class="poster__arrow poster__arrow-2"></div>
          <div class="poster__arrow poster__arrow-3"></div>
        </div>
      </div>
      <!-- 适龄提示详情 -->
      <div
        class="v--modal-overlay"
        v-show="age__close_show"
        @click.self="age_close"
      >
        <div class="v--modal-box">
          <img src="@/audio/适龄提示.jpg" />
          <div class="age__close" @click="age_close"></div>
        </div>
      </div>
      <!-- 主页宣传视频 -->
      <div
        class="v--modal-background-click"
        v-if="Promotional_video"
        @click.self="stop_play"
      >
        <div class="pv__video--modal">
          <div class="pv__video--close" @click="stop_play"></div>
          <video
            ref="pv_play"
            width="896px"
            height="504px"
            controls="controls"
            :autoplay="autoplay"
            src="https://webstatic.mihoyo.com/upload/op-public/2020/09/27/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4"
          ></video>
        </div>
      </div>
    </div>
    <!-- 新闻资讯板块 -->
    <div class="news">
      <h3>新闻资讯</h3>
      <div class="news_main">
        <div class="news__swiper">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="(item, index) in slideList" :key="index">
              <a :href="item.nues_src">
                <img width="640" height="400" :src="item.news_figure" />
              </a>
            </swiper-slide>
          </swiper>
          <div class="news__pager"></div>
        </div>
        <div class="news__content">
          <ul class="news__tab__list">
            <li
              class="news__tab__item"
              ref="news__tab__item"
              v-for="(item, index) in nwesList"
              :key="index"
              @click="tab(index)"
            >
              {{ item.name }}
            </li>
          </ul>
          <ul
            class="news__list"
            v-for="(item, index) in nwesList"
            :key="index"
            v-show="item.show"
          >
            <li>
              <a
                :href="item.href"
                class="news__item"
                v-for="(item, index) in item.title"
                :key="index"
                ><span>{{ item.content }}</span>
                <p class="news__date">2022/3/31</p></a
              >
            </li>
          </ul>
          <a href="https://ys.mihoyo.com/main/news" class="news__more"
            >查看全部资讯</a
          >
        </div>
      </div>
    </div>
    <!-- 城市详情 -->
    <div class="city">
      <ul class="city__list">
        <router-link to="rloe/Mondstadt">
          <li class="city__list-item">
            <div
              class="city__list-bg"
              style="
                height: 260px;
                background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200211/2020021114213984258.jpg);
              "
            ></div>
            <a>
              <p>蒙德城</p>
            </a>
            <div
              class="city__list-char"
              style="
                background-image: url(https://uploadstatic.mihoyo.com/contentweb/20220121/2022012117380353873.png)
                  center no-repeat;
              "
            ></div>
          </li>
        </router-link >
        <router-link to="rloe/liyue">
          <li class="city__list-item">
            <div
              class="city__list-bg"
              style="
                height: 260px;
                background-image: url(https://uploadstatic.mihoyo.com/contentweb/20200515/2020051511071844630.jpg);
              "
            ></div>
            <a href="">
              <p>璃月港</p>
            </a>
            <div
              class="city__list-char"
              style="
                background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210624/2021062410110987203.png)
                  center no-repeat;
                width: 100%;
                height: 100%;
              "
            ></div>
          </li>
        </router-link>
        <router-link to="rloe/daoqi">
          <li class="city__list-item">
            <div
              class="city__list-bg"
              style="
                height: 260px;
                background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011394586258.jpg);
              "
            ></div>
            <a href="">
              <p>稻妻城</p>
            </a>
            <div
              class="city__list-char"
              style="
                background-image: url(https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917013922761.png)
                  center no-repeat;
                width: 100%;
                height: 100%;
              "
            ></div>
          </li>
        </router-link>
        <li class="city__list-item city__list-item3" style="height: 260px">
          <span>敬请期待</span>
        </li>
      </ul>
    </div>
    <BottomLnstructions />
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
import BottomLnstructions from "@/components/BottomLnstructions.vue";
export default {
  components: {
    swiper,
    swiperSlide,
    BottomLnstructions,
  },
  data() {
    return {
      autoplay: true,
      loop: true,
      age__close_show: false,
      Promotional_video: false,
      className: "swiper-pagination-bullet",
      nwesshow: false,
      slideList: [
        {
          news_figure: require("@/audio/news1.jpg"),
          nues_src: "https://ys.mihoyo.com/main/news/detail/20154",
        },
        {
          news_figure: require("@/audio/news2.jpg"),
          nues_src: "https://ys.mihoyo.com/main/news/detail/20562",
        },
        {
          news_figure: require("@/audio/news3.jpg"),
          nues_src: "https://ys.mihoyo.com/main/news/detail/20508",
        },
        {
          news_figure: require("@/audio/news4.jpg"),
          nues_src: "https://ys.mihoyo.com/main/news/detail/20422",
        },
      ],
      swiperOptions: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        loop: true,
        effect: "",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".news__pager",
          type: "bullets",
          bulletElement: "li",
          clickable: true,
          renderBullet: function (index, className) {
            return '<li class="' + className + '">' + "</li>";
          },
          progressbarOpposite: true,
        },
      },
      nwesList: [
        {
          name: "最新",
          show: true,
          title: [
            {
              content: "《原神》「流风眷堇庭」2.6版本更新说明",
              href: "https://ys.mihoyo.com/main/news/detail/20624",
            },
            {
              content: "《原神》小红书2.6版本创作者激励计划即将开启",
              href: "https://ys.mihoyo.com/main/news/detail/20621",
            },
            {
              content: "《原神》快手2.6版本视频征集&直播招募活动即将开启",
              href: "https://ys.mihoyo.com/main/news/detail/20620",
            },
            {
              content: "《原神》抖音2.6版本创作者激励计划&直播季即将开启",
              href: "https://ys.mihoyo.com/main/news/detail/20619",
            },
            {
              content: "《原神》斗鱼直播2.6版本直播季活动即将开启",
              href: "https://ys.mihoyo.com/main/news/detail/20618",
            },
          ],
        },
        {
          name: "新闻",
          show: false,
          title: [
            {
              content: "八重神子索敌机制修复回退说明",
              href: "https://ys.mihoyo.com/main/news/detail/20650",
            },
            {
              content: "《原神》「层峦千壑」璃月主题摄影活动今日开启",
              href: "https://ys.mihoyo.com/main/news/detail/20637",
            },
            {
              content: "关于八重神子索敌机制的部分说明",
              href: "https://ys.mihoyo.com/main/news/detail/20636",
            },
            {
              content: "《原神》「画外旅照」玩法说明",
              href: "https://ys.mihoyo.com/main/news/detail/20635",
            },
            {
              content: "《原神》「画外旅照」活动即将开启",
              href: "https://ys.mihoyo.com/main/news/detail/20632",
            },
          ],
        },
        {
          name: "公告",
          show: false,
          title: [
            {
              content: "《原神》祈愿概率公示",
              href: "https://ys.mihoyo.com/main/news/public",
            },
            {
              content: "《原神》2.5版本「薄樱初绽时」更新通知",
              href: "https://ys.mihoyo.com/main/news/detail/20165",
            },
            {
              content: "《原神》2.5版本「薄樱初绽时」更新通知",
              href: "https://ys.mihoyo.com/main/news/detail/20020",
            },
            {
              content: "「流光飞彩」海灯节答谢邮件发放问题处理说明",
              href: "https://ys.mihoyo.com/main/news/detail/19990",
            },
            {
              content: "《原神》2.4版本「飞彩镌流年」更新说明",
              href: "https://ys.mihoyo.com/main/news/detail/19560",
            },
          ],
        },
        {
          name: "活动",
          show: false,
          title: [
            {
              content: "《原神》「神工天巧」活动即将开启",
              href: "https://ys.mihoyo.com/main/news/detail/20307",
            },
            {
              content: "「岩港奇珍行记」网页活动说明",
              href: "https://ys.mihoyo.com/main/news/detail/11472",
            },
            {
              content: "《原神》月夕祝颂-万份空月祝福相赠",
              href: "https://ys.mihoyo.com/main/news/detail/10203",
            },
            {
              content: "“在尘世的相逢”抖音《原神》公测主播招募",
              href: "https://ys.mihoyo.com/main/news/detail/10078",
            },
            {
              content: "“在尘世的相逢”快手直播《原神》主播招募活动开启",
              href: "https://ys.mihoyo.com/main/news/detail/8512",
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 点击播放背景音乐
    play() {
      this.$refs.pv.play();
    },
    // 点击弹出适龄提示
    age_close() {
      this.age__close_show = !this.age__close_show;
    },
    // 点击播放宣传片
    play_video() {
      this.Promotional_video = true;
      this.$refs.pv_play.play();
      this.$refs.pv.pause();
    },
    // 暂停播放宣传片
    stop_play() {
      this.$refs.pv_play.pause();
      this.Promotional_video = false;
    },
    //点击新闻列表标题高亮
    tab(index) {
      for (var i = 0; i < this.nwesList.length; i++) {
        this.$refs.news__tab__item[i].style = "none";
        this.$refs.news__tab__item[index].style = "color: #ffd49f;";
        this.nwesList[i].show = false;
        if (i == index) {
          this.nwesList[index].show = true;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.a {
  position: relative;
  width: 100%;
  height: 100%;
}
.main {
  height: 100%;
  position: relative;
  .poster__sign {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    z-index: 5000;
    bottom: 0;
    left: 0;
    right: 0;
    .poster__video--entry {
      width: 356px;
      height: 76px;
      height: 76px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAABMCAYAAABak83PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYThkMDRiYy1jNTZkLTJkNDMtOGY5Yy02OGY3YWNhYzQ5ZjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkEzQzM2QkY4MEY2MTFFOTgyNzFEQjQ0QkUyMDlFMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkEzQzM2QkU4MEY2MTFFOTgyNzFEQjQ0QkUyMDlFMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFFMEEwQUZBN0QwMjExRTk5RjVBRjA0QkIxQTU2MjBGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFMEEwQUZCN0QwMjExRTk5RjVBRjA0QkIxQTU2MjBGIi8+IDwvcmRmOkRlc2Ny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);
      margin-bottom: 20px;
      .poster__video:hover {
        background: none;
        transition: background 0.2s linear;
      }
      .poster__video {
        position: relative;
        width: 48px;
        height: 48px;
        background: #fff;
        border-radius: 50%;
        margin: 14px auto 0;
        display: block;
        cursor: pointer;
      }
    }
    .ys-download-pc a img:hover {
      opacity: 0.8;
    }
    .ys-download-pc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      width: 540px;
      height: 100%;
      margin-bottom: 20px;
      object-fit: cover;
      .ys-download-pc__group a img:hover {
        opacity: 0.8;
      }
      .ys-download-pc__group {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
    }
    .poster__badge {
      position: absolute;
      bottom: 20px;
      left: 20px;
      cursor: pointer;
      img {
        width: 100px;
      }
    }
    .ys-download-pc__box--download {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 102px;
      height: 102px;
      position: relative;
      .ys-download-pc__qr__code {
        width: 102px;
        height: 102px;
      }
      .ys-download-pc__qr__icon {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 35%;
        top: 33px;
      }
    }
    .poster__arrows {
      width: 25px;
      position: relative;
      margin-bottom: 12px;
      .poster__arrow {
        background-image: url("~@/audio/下标.png");
        width: 25px;
        height: 15px;
        caret-color: transparent;
        @keyframes poster__arrow {
          50% {
            opacity: 0;
          }
        }
        animation-iteration-count: infinite;
      }
      .poster__arrow-1 {
        animation-delay: 0s;
      }
      .poster__arrow-2 {
        animation-delay: 0.5s;
      }
      .poster__arrow-3 {
        animation-delay: 1s;
      }
    }
  }
  .v--modal-background-click {
    background: rgba(0, 0, 0, 0.7) !important;
    z-index: 5000;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    .pv__video--modal {
      width: 896px;
      height: 504px;
      position: relative;
      left: 27%;
      top: 23%;
      .pv__video--close {
        opacity: 0.75;
        background: url("~@/audio/关闭宣传视频.png");
        width: 32px;
        height: 32px;
        right: -62px;
        top: 10px;
        cursor: pointer;
        position: absolute;
      }
    }
  }
}
.pv_head {
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  height: 100vh;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
body,
div,
a,
p {
  margin: 0;
  padding: 0;
}
video {
  object-fit: cover;
}
button {
  /* 清除默认边框 */
  border: 0;
  outline: none;
  /*清除默认背景 */
  background-color: transparent;
}
.poster__video::before {
  content: "";
  background: url("~@/audio/播放图标.png");
  display: block;
  width: 28px;
  height: 28px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
}
.poster__video:hover::before {
  background-position: 0 -29px;
}
.v--modal-overlay {
  background: rgba(0, 0, 0, 0.7) !important;
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 5001;
  .v--modal-box {
    position: relative;
    top: 16%;
    left: 27%;
    width: 854px;
    height: 642px;
    .age__close {
      background-image: url("~@/audio/年龄提示关闭.png");
      cursor: pointer;
      width: 57px;
      height: 57px;
      position: absolute;
      top: 0;
      right: -57px;
    }
  }
}
// 新闻页面样式
.news {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 910px;
  background: url("~@/audio/news.jpg");
  h3 {
    margin: 183px auto 60px;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    color: #fff;
    position: relative;
  }

  .news_main {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    .news__swiper {
      width: 640px;
    }
    .news__content {
      width: 640px;
      background: rgba(38, 18, 12, 0.62);
      position: relative;
      .news__tab__list {
        display: flex;
        margin: 35px auto 0 35px;
        border-bottom: 3px solid rgba(255, 255, 255, 0.1);
        .news__tab__item--active::after {
          position: absolute;
          left: 0;
          bottom: -3px;
          display: block;
          content: "";
          width: 100%;
          height: 3px;
          background: #ffd49f;
        }
        .news__tab__item {
          padding: 0 19px 12px;
          font-size: 18px;
          text-align: center;
          cursor: pointer;
          color: #fff;
          -moz-user-select: none;
          -ms-user-select: none;
          -webkit-user-select: none;
          user-select: none;
        }
      }
      .news__item {
        border-bottom: 2px solid rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        font-size: 16px;
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        color: #fff;
        position: relative;
        .news__date {
          position: absolute;
          right: 11px;
          opacity: 0.3;
        }
      }
      .news__list {
        width: 592px;
        margin: 0 auto;
        height: 260px;
        overflow: hidden;
      }
      a:hover {
        opacity: 0.8;
      }
    }
    .news__more {
      background: url("~@/audio/更多资讯.png") no-repeat left center/22px;
      color: rgba(255, 255, 255, 0.75);
      text-decoration: none;
      position: absolute;
      right: 33px;
      bottom: 30px;
      height: 22px;
      padding-left: 35px;
    }
    a {
      img {
        width: 640px;
        height: 400px;
      }
    }
    .news__swiper {
      background: rgba(38, 18, 12, 0.62);
      overflow: hidden;
      position: relative;
      display: flex;
      .news__pager {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 10px;
        margin: auto;
        width: 100%;
        z-index: 2;

        .ubolt-white {
          background-color: #fff;
        }
      }
      .swiper-wrapper {
        display: flex;

        width: 640px;
        height: 400px;
      }
      .swiper-slide {
        flex-shrink: 0;
        .news__banner {
          object-fit: cover;
        }
      }
    }
  }
}
// 新闻资讯图标
.news h3::before {
  content: "";
  position: absolute;
  width: 350px;
  height: 14px;
  top: 50%;
  background: url("~@/audio/左.png");
  left: 0;
  transform: translate(calc(-110% + 0px), -50%);
}
// 新闻资讯图标
.news h3::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 385px;
  height: 14px;
  background: url("~@/audio/右.png");
  transform: translate(calc(-10% + 32px), -50%) rotateY(180deg);
}
// 轮播图分页器样式
/deep/ .swiper-pagination-bullet {
  width: 18px;
  height: 18px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border: solid 2px rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0 0 12px 0 rgb(17 17 17 / 30%);
  opacity: 1;
  margin: 0 4px;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
/deep/.swiper-pagination-bullet-active {
  background-color: #fff;
  border: solid 2px #fff;
}
// 城市详解
.city {
  width: 100%;
  .city__list {
    width: 100%;
    // 城市父级样式
    .city__list-item {
      position: relative;
      overflow: hidden;
      cursor: pointer;
      a {
        z-index: 4;
        background: url("~@/imge/城市背景.png") center no-repeat;
        height: 260px;
        width: 100%;
        display: inline-block;
        position: absolute;
        top: 0px;
        p::after {
          background: url("~@/imge/城市背景1.png");
          content: "";
          display: block;
          z-index: 6;
          width: 210px;
          height: 10px;
          position: absolute;
          bottom: 91px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
        }
        p {
          width: 100%;
          height: 100%;
          font-size: 36px;
          color: #fff;
          position: absolute;
          text-align: center;
          line-height: 260px;
        }
      }
      .city__list-char:hover {
        opacity: 1;
        transition: all 0.2s 0s ease-in;
      }
      .city__list-char {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        border: #fff solid 6px;
        opacity: 0;
        box-sizing: border-box;
        background-position: calc(50% + 360px) 50%;
        background-repeat: no-repeat;
      }
      // 每个城市的样式
      .city__list-bg {
        background: center no-repeat;
        transition: transform 0.4s 0s ease-out;
      }
    }
    // 滑过时需要放大的倍数
    .city__list-item:hover {
      .city__list-bg {
        transform: scale(1.06);
      }
    }
    // 滑过时遮罩
    .city__list-item:hover::before {
      background: rgba(0, 0, 0, 0.2);
    }
    // 城市详情遮罩
    .city__list-item::before {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
    // 敬请期待
    .city__list-item3 {
      background-image: url("~@/imge/敬请期待.jpg");
      font-size: 36px;
      color: #fff;
      line-height: 260px;
      width: 100%;
      height: 100%;
      text-align: center;
    }
    // 滑过时出现城市背景样式
    .city__list-item:hover {
      a {
        p::after {
          opacity: 1;
        }
      }
    }
  }
}
</style>