<template>
  <div class="bigbox">
    <div class="rolebackground">
      <ul class="character__sidebar">
        <li
          v-for="(item, index) in city"
          :key="index"
          @click="btnClick(index)"
          :class="{ active: currentIndex == index }"
          class="character__city"
        >
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
        <li
          style="
            line-height: 54px;
            font-size: 18px;
            display: inline-block;
            width: 40%;
            height: 100%;
            color: #fff;
          "
          class="character__city"
        >
          敬请期待
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: [
        {
          name: "蒙德城",
          path: "/rloe/mondstadt",
        },
        {
          name: "璃月港",
          path: "/rloe/liyue",
        },
        {
          name: "稻妻城",
          path: "/rloe/daoqi",
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    // 角色导航高亮效果
    btnClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
.bigbox {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.rolebackground {
  height: 100%;
  width: 370px;
  top: 0;
  // 角色导航页面条形样式

  // 角色页面具体样式
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding-left: 52px;
      a {
        display: inline-block;
        width: 40%;
        height: 100%;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .character__sidebar {
    position: relative;
    z-index: 2;
    top: 0;
    left: 0;
    width: 370px;
    height: 100%;
    box-sizing: border-box;
    padding-top: 187px;
    display: inline-block;
    background: no-repeat;
    a:hover,
    a:link,
    a:visited,
    a:active,
    a:focus {
      text-decoration: none;
    }
    a {
      line-height: 54px;
      font-size: 18px;
      cursor: pointer;
    }
  }
  // 角色导航页面高亮样式
  .character__city {
    background-image: url("~@/imge/rolebackground/导航白色标.png");
    background-repeat: no-repeat;
    margin-left: 18px;
  }
  // 角色页面默认样式
  .active {
    background-image: url("~@/imge/rolebackground/导航背景.png");
    margin-left: 0px;
    a {
      padding-left: 40px;
    }
  }
  .character__sidebar::before {
    position: absolute;
    top: 0;
    left: 37px;
    display: block;
    content: "";
    width: 2px;
    height: 1280px;
    background: rgba(255, 255, 255, 0.14);
    opacity: 1;
  }
}
</style>