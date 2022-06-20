<template>
  <div>
    <div class="content-wrap">
      <!-- 头部新闻 -->
      <ul class="recommend">
        <li>
          <a href="https://ys.mihoyo.com/main/news/detail/20820">
            <div class="recommend__imgwrap">
              <img src="@/newsimge/地脉.png" width="100%" height="100%" />
            </div>
            <div class="recommend__title">《原神》「地脉移涌」活动即将开启</div>
            <span style="width: 100%; height: 100%"></span>
            <div class="recommend__meta">
              <span class="recommend__date">2022/04/26</span>
              <span class="recommend__category">新闻</span>
            </div>
          </a>
        </li>
        <li>
          <a href="https://ys.mihoyo.com/main/news/detail/20814">
            <div class="recommend__imgwrap">
              <img src="@/newsimge/神里.jpg" width="100%" height="100%" />
            </div>
            <div class="recommend__title">《原神》「地脉移涌」活动即将开启</div>
            <div class="recommend__meta">
              <span class="recommend__date">2022/04/22</span>
              <span class="recommend__category">新闻</span>
            </div>
          </a>
        </li>
        <li>
          <a href="https://ys.mihoyo.com/main/news/detail/20813">
            <div class="recommend__imgwrap">
              <img src="@/newsimge/网页活动.jpg" width="100%" height="100%" />
            </div>
            <div class="recommend__title">《原神》「地脉移涌」活动即将开启</div>
            <div class="recommend__meta">
              <span class="recommend__date">2022/04/22</span>
              <span class="recommend__category">新闻</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 也是v-for循环遍历标题 -->
    <ul class="category">
      <li
        :class="{ active: currentIndex == index }"
        @click="btnClick(index)"
        v-for="(item, index) in message"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
    <!-- 对新闻列表进行v-for循环，工作当中需要请求后台数据返回 -->
    <ul class="news">
      <a
        :href="item.href"
        v-for="(item, index) in newslist"
        :key="index"
        style="text-decoration: none; color: #000"
      >
        <li class="news__item">
          <a>
            <img :src="item.img" width="265px;" height="140px;" />
          </a>
          <h3 class="ellipsis">{{ item.title }}</h3>
          <div class="news__date">2022/05/04</div>
        </li>
      </a>
    </ul>
    <BottomLnstructions />
  </div>
</template>

<script>
import BottomLnstructions from "@/components/BottomLnstructions.vue";
export default {
  components: {
    BottomLnstructions,
  },
  data() {
    return {
      currentIndex: 0,
      message: ["最新", "新闻", "公告", "活动"],
      // 遍历新闻列表
      newslist: [
        {
          img: "https://webstatic.mihoyo.com/upload/contentweb/2022/05/04/c155f9717f77ec9070d64416320e46ed_229696108275487147.png",
          href: "https://ys.mihoyo.com/main/news/detail/21063",
          title: "《原神》「百货奇货」活动即将开启",
        },
        {
          img: "https://webstatic.mihoyo.com/upload/contentweb/2022/05/02/3e904c5050c210a9e5416768c401eefb_673240696505998650.jpg",
          href: "https://ys.mihoyo.com/main/news/detail/20931",
          title: "《原神》「裁景入画」旅照札记摄影征集活动今日开启",
        },
        {
          img: "https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg",
          href: "https://ys.mihoyo.com/main/news/detail/20917",
          title: `提瓦特美食札记 | "晚餐…"——迪卢克生日快乐！`,
        },
        {
          img: "https://webstatic.mihoyo.com/upload/contentweb/2022/04/30/e2ef77d65c16498aefc410f785a96eb8_250283170101727079.jpg",
          href: "https://ys.mihoyo.com/main/news/detail/20909",
          title: "迪卢克生日快乐｜对我而言，你的意见向来重要。",
        },
        {
          img: "https://webstatic.mihoyo.com/upload/contentweb/2022/04/29/c7bde6285d472c4da00c7cd035a04edd_745470627277105836.jpg",
          href: "https://ys.mihoyo.com/main/news/detail/20888",
          title: "《原神》「假日冒险？出发！」网页活动现已开启",
        },
      ],
    };
  },
  methods: {
    btnClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
ul {
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
  margin-block-end: 0;
}
a {
  text-decoration: none;
}
// 头部新闻样式
.content-wrap {
  background: url("~@/newsimge/上层背景.jpg");
  width: 100%;
  height: 700px;
  display: flex;
  .recommend {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding-top: 146px;
    margin: 0 auto;
    width: 1280px;
    img {
      transition: all 0.5s 0s ease;
    }
    .recommend__imgwrap:hover {
      img {
        transform: scale(1.2);
        transition: all 0.5s 0s ease;
      }
    }
    li {
      width: 420px;
      height: 450px;
      background-color: rgba(18, 18, 18, 0.8);
      opacity: 0.9;
      border-radius: 4px;
      position: relative;
      a {
        width: 100%;
        height: 100%;
        z-index: 1;
        .recommend__imgwrap {
          width: 380px;
          height: 190px;
          margin: 20px auto;
          overflow: hidden;
        }
        .recommend__title {
          font-size: 24px;
          color: #fefefe;
          line-height: 34px;
          margin: 10px 0;
          padding: 0 17px;
        }
        .recommend__meta {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          position: absolute;
          bottom: 15px;
          box-sizing: border-box;
          .recommend__date {
            color: #808080;
          }
          .recommend__category {
            color: #ffc000;
          }
        }
      }
    }
  }
}
// 新闻标题样式
.category {
  width: 1280px;
  margin: 38px auto 0 auto;
  li {
    width: 155px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    border-radius: 4px;
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.2s 0s ease;
  }
  li:hover {
    background-color: #393b40;
  }
  .active {
    background-color: #393b40;
    color: #f4d8a8;
  }
  .category:hover {
    background-color: #393b40;
    color: #f4d8a8;
  }
}
// 新闻列表样式
.news {
  list-style-type: none;
  width: 1286px;
  margin: 38px auto 0 auto;
  .news__item:hover::before {
    display: block;
    content: "";
    position: absolute;
    z-index: 1;
    top: -3px;
    bottom: -3px;
    left: -3px;
    right: -3px;
    border: 3px solid rgba(57, 59, 64, 0.15);
    border-radius: 4px;
    opacity: 1;
    transition: opacity 0.2s linear;
    cursor: pointer;
  }
  .news__item {
    min-height: 170px;
    background-color: #fafafa;
    padding: 15px 20px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-sizing: border-box;
    position: relative;
    a {
      img {
        margin-right: 20px;
      }
    }
    .news__date {
      color: #999;
      position: absolute;
      right: 0;
      bottom: 20px;
    }
  }
  .ellipsis {
    font-size: 24px;
    font-weight: 400;
    display: inline-block;
    position: absolute;
    top: 0px;
    margin: 15px;
  }
  a:hover {
    z-index: 5;
  }
}
</style>