<template>
  <div class="swiper-role">
    <div class="b">
      <!-- 角色详情轮播图 -->
      <swiper :options="swiperOptions" class="swiper">
        <swiper-slide
          v-for="(item, index) in swiperdetailsL"
          :key="index"
          class="swiper__slide swiper-no-swiping"
        >
          <!-- 角色图片 -->
          <img :src="item.src" class="character" />
          <!-- 角色属性图标 -->
          <img :src="item.character__icon" class="character__icon" />
          <!-- 角色介绍详情 -->
          <div class="character__content">
            <img :src="item.character__name" class="character__name" />
            <!-- 角色cv介绍 -->
            <div class="character__cv">
              <!-- cv名称 -->
              <div class="character__cv__name">
                <p v-show="isYes">CV:{{ item.Chinacv }}</p>
                <p v-show="!isYes">CV:{{ item.Japancv }}</p>
              </div>
              <!-- 角色语音关 -->
              <div class="character__voice" @click="audioopen(index)"></div>
              <!-- 角色语音开 -->
              <div
                class="character__voice__open"
                v-show="audiorelated"
                @click="audioopen(index)"
              ></div>
              <!-- 中日cv切换按钮 -->
              <div
                class="character__switch--wrap"
                @click="activelanguage(index)"
              >
                <p :class="{ class1: isYes, class2: !isYes }">中</p>
                <p :class="{ class1: !isYes, class2: isYes }">日</p>
              </div>
            </div>
            <!-- 角色背景介绍 -->
            <div class="character__intro">
              <p>
                {{ item.rloequotations1 }}
                <br />
                {{ item.rloequotations2 }}
                <br />
                {{ item.rloequotations3 }}
                <br />
                {{ item.rloequotations4 }}
              </p>
            </div>
            <!-- 角色中文语音 -->
            <div :ref="`yuyin${index}0`" :class="`yuyin${index}0`">
              <audio
                v-for="(item1, index1) in item.chinaaudio"
                :key="index1"
                @ended="ended"
                :src="item1"
              ></audio>
            </div>
            <!-- 角色日文语音 -->
            <div :ref="`yuyin${index}1`" :class="`yuyin${index}1`">
              <audio
                :src="item2"
                v-for="(item2, index2) in item.japanaudio"
                :key="index2"
                @ended="ended"
              ></audio>
            </div>
          </div>
          <!-- 角色座右铭 -->
          <img :src="item.rloemotto" class="character__sen" />
        </swiper-slide>
      </swiper>
      <div class="character__page">
        <div class="swiper-pagination">
          <ul ref="bullet" :style="{ marginLeft: ul_left + 'px' }">
            <li
              v-for="(n, nindex3) in roleicon"
              :key="nindex3"
              class="my-bullet"
              :class="{ active: currentIndex == nindex3 }"
              @click="clikicon(nindex3)"
            >
              <img :src="n.rloeicon" />
              <p>{{ n.rloename }}</p>
            </li>
          </ul>
        </div>
        <div class="swiper-button-prev" @click="prev"></div>
        <div class="swiper-button-next" @click="next"></div>
      </div>
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
      // 轮播图的配置属性
      swiperOptions: {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: 1000,
        paginationClickable: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          bulletElement: "li",
          clickable: true,
          bulletClass: "my-bullet",
          dynamicBullets: true,
          dynamicMainBullets: 6,
        },
      },
      // 角色图标轮播属性
      swiperOptions1: {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        loop: true,
        effect: "",
        slidesPerView: "auto",
        loopedSlides: 5,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // controller: {
        //   control: Swiper1,
        // },
      },
      // 实现轮播图遍历
      swiperdetailsL: [
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718113218873.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620142687125.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620142281505.png",
          Chinacv: " 林籁",
          Japancv: " 斋藤千和",
          rloequotations1:
            "身为西风骑士团的代理团长，琴一直忠于职守，为人们带来安宁。虽然并非天赋异禀，但通过刻苦训练，如今的她已然能够独当一面。",
          rloequotations2:
            "当风魔龙的威胁开始临近，这位可靠的代理团长早已做好了准备，誓要守护蒙德。",
          chinaaudio: [
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/209a68a166b14b27e11a8b64c466ea7c_7021182076965695539.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/806fad7c524efcebd55abc2ce4f8ce6a_5745385847854898057.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/74c81976dc6f3868ecc264bbd143e571_4077467239236738470.mp3",
          ],
          japanaudio: [
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620145220378.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620145562610.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620145849323.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620144979413.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718135119594.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620153999417.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620153436780.png",
          rloequotations1: "活泼率直的少女，是蒙德城中唯一的侦察骑士。",
          rloequotations2:
            "擅长使用风之翼的安柏，连续三年蝉联蒙德城的「飞行冠军」。",
          rloequotations3: "作为西风骑士团的新星，今天的安柏依然活跃在第一线。",
          Chinacv: " 蔡书瑾",
          Japancv: " 石见舞菜香",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/04/02/d97330fd3081686b800fd6edee83040e_6685284990602076505.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/04/02/8046338f56206a7c543b2b8162d43544_8645357328015327246.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/04/02/f64b73144cdac331d407e28906252f2e_6420285054895646235.mp3",
          ],
          japanaudio: [
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620180054376.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620180344916.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620180750893.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620175786767.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620183491239.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620184031492.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620183862811.png",
          rloequotations1: "她是钟情于睡眠的知性魔女。",
          rloequotations2:
            "作为西风骑士团图书馆的管理员，聪明的丽莎总能以最有效的方式将遇到的问题统统解决。",
          rloequotations3:
            "虽然看似慵懒，但处变不惊的她似乎早已将一切尽数掌控。",
          Chinacv: " 钟可",
          Japancv: " 田中理惠",
          chinaaudio: [
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/d017d4608057339f5cb81ffad3c7930a_1302892689242225251.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/a5ad5794b640166f5492de8bf5a5ad1a_2303225662045183124.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/06999cc08da32d411a46768533ac247f_7094895583427204560.mp3",
          ],
          japanaudio: [
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620190991206.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620191379691.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620191662258.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200119/2020011915082946935.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620194519600.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620195334987.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620194979094.png",
          rloequotations1:
            "在西风骑士团里，凯亚是代理团长最信任的副手。凡是交托于他的任务，总能得到解决。",
          rloequotations2:
            "在蒙德城中，风趣幽默的他同样深受人们的喜爱，然而这位谈吐不凡的骑士隐约有着什么不为人知的秘密。",
          Chinacv: " 孙哗",
          Japancv: " 鸟海浩辅",
          chinaaudio: [
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/bc954bcc4f0e3aa17c3a04c9272487a6_2445140716618685045.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/e5d8c42572ba9bcf2d1720c2ae405f2c_1593432168946625084.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/e6ea0f9780270524a8b5170641e46996_1739447643517442668.mp3",
          ],
          japanaudio: [
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620201674738.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620202166396.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620202419142.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620201283479.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200611/2020061121102532076.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620221929362.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620221565877.png",
          rloequotations1: "既是西风教会的祈礼牧师，又是蒙德城的闪耀偶像。",
          rloequotations2:
            "对于习惯了传统吟游诗人的蒙德来说，「偶像」是还不习惯的新生事物。但在蒙德，人人都爱芭芭拉。",
          rloequotations3:
            "这就是自由之都的自由精神——对大家投来的喜爱，芭芭拉是这样满怀感激地总结的。",
          Chinacv: " 宋媛媛",
          Japancv: " 鬼头明里",
          chinaaudio: [
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/e8a240dfffd4f6e51a1be41ad4a60e4d_3859827480638107212.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/9ec201059b712951d6f754ca3bb62f40_611052190494215001.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/83df09c96de357b28c6ad69d697507dc_8544684148920334390.mp3",
          ],
          japanaudio: [
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620225781449.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620230098599.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620230871311.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20191009/2019100911552684340.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200611/2020061121140891147.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620243999665.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620243557115.png",
          rloequotations1:
            "身为蒙德城第一富豪，风度翩翩的迪卢克总是以完美的贵公子形象示人。",
          rloequotations2:
            "然而他真实的一面，是秉承坚定信念的战士，他那「不惜一切守护蒙德」的意志犹如火焰般炽热，令他能以恐怖的攻势，毫不留情地将一切敌人击溃。",
          Chinacv: " 马洋",
          Japancv: " 小野贤章",
          chinaaudio: [
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/c06a840db1dbf82c01849fe5aaee66ba_8110869643458776644.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/e870628bb595083009ff79c2148f1a88_9220000630447755416.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/1bd0dc281b0582c3ae63b5c14b296336_832459251722927068.mp3",
          ],
          japanaudio: [
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620244350504.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620244687129.mp3",
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620244974479.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20191009/2019100911542271463.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20191122/2019112214335095633.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20191018/2019101817210884585.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20191018/2019101817251653573.png",
          rloequotations1:
            "在蒙德坊间的传闻里，有人说他是被狼收养的弃婴，有人说他是狼灵的化身…",
          rloequotations2: "利爪与苍雷在飞驰，狼永远与荒野为伴。",
          rloequotations3:
            "时至今日，狼少年仍凭借他野兽般的直觉，在林间与狼群一起奔猎。",
          Chinacv: " 周帅",
          Japancv: " 内山昂辉",
          chinaaudio: [
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/faf9f1f83d06983c405ae84ac01bf916_7951761457966497135.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/82443ea6201dc63e281aceedd9ef8898_7815088720511398881.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/acd3fe31d5e72859852d4f8eeb0d4376_5835382878076619844.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/12/301313ae07b1a393eb482dd9789b8eb3_3356710339563693772.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/12/62cc474c8c8f231636d30b9547fca0fc_3304821986856444250.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/12/b88e07a49ced90a2991380b27134b605_8621332269696275485.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20191018/2019101817242498597.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20191122/2019112214234192544.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620142687125.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20191122/2019112214234923416.png",
          rloequotations1:
            "来路不明的吟游诗人，有时唱一些老掉牙的旧诗，有时又会唱出谁也没听过的新歌。",
          rloequotations2: "喜欢苹果和热闹的气氛，讨厌奶酪和一切黏糊糊的物质。",
          rloequotations3:
            "在引导「风」的元素力时，元素的塑形往往外显为羽毛，因为他很中意看上去轻飘飘的东西。",
          Chinacv: " 喵☆酱",
          Japancv: " 村濑步",
          chinaaudio: [
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/9e45798a78ea662b212ffeb32f2569db_8229552455250694864.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/c52a223b86bc1affb8f5939deb1befdb_1721773053430046940.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/12/11/6c19f3550bec0bbbda228f5e369e9e1a_8695572332069796370.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihayo.com/upload/op-public/2019/11/22/664f288815a1c683c30da078534b5cac_7703624176068595657.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/11/22/33ffdf96a8a953d67feda2e4f0fa932a_4638140912760184746.mp3",
            "https://webstatic.mihayo.com/upload/op-public/2019/11/22/15e945937b3fc78a9cc369906b152052_5060696813674185948.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20191122/2019112214273791710.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200103/2020010311083818450.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20200103/2020010311085611631.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20200103/2020010311085148050.png",
          rloequotations1: "西风骑士团，火花骑士！永远伴随闪光与爆炸出现！",
          rloequotations2: "——然后在琴团长严厉的目光注视下默默消失。",
          rloequotations3:
            "虽然新炸药的配方，很多都是在被关禁闭的时候想出来的……",
          rloequotations4: "但如果不被关禁闭的话，就更好了。",
          Chinacv: " 花玲",
          Japancv: " 九野美咲",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/01/03/da921ddf8f7f2b4d28996d7d3a40ac62_6677622781932050673.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/01/03/76d6d42ce5cb2b7a663ba39375b4185d_627144378676179161.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/01/03/ef02fecac24035758149be07b1b6a881_8457372498299050153.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/03/5c23edd1addc595091696af98f1fa9b5_6675494562753753921.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/03/c67adfbeb0f367da7a5471b293205e81_2663209436832683976.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/03/f27db40f62ac3cccfa43db03b032aa0f_1796333735167639676.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200119/2020011915033031100.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200312/2020031219451784892.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20200103/2020010311085611631.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20200312/2020031219111556279.png",
          rloequotations1:
            "蒙德城冒险家协会为数不多的年轻冒险家，一直被莫名的「不幸」所纠缠。",
          rloequotations2:
            "他所创立的「班尼冒险团」，在「不幸」的影响下不断有成员长期告假，目前仅有团长一人在队活动，已处于解散边缘。",
          rloequotations3:
            "但在班尼特诚恳的请求下，蒙德城冒险家协会接待员凯瑟琳小姐为他保留了「班尼冒险团」的编制，同时，也向他隐瞒了其他成员早已跳槽的事实。",
          Chinacv: " 穆雪婷",
          Japancv: " 逢坂良太",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/12/e32cae6caa2b2e6c729dd5e8fc7a17bd_1464444249620308772.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/12/ef3aa7c01b45824bd2cc924bbdb9d2bd_5851379031964729466.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/12/a5f2d059d31b97445de590767bbbe28a_2341106485356738801.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/03/a12cbe45f81125f7dbf470f9bbe88abf_7850887127768074207.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/03/3affba419c0a6a8989b3a375d09dd495_5566795789820814175.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/03/0c7629b548a3cecd3b0040052a8357bb_3123930586508290370.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200312/2020031219122424808.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200315/2020031516093066687.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20200315/2020031516143099421.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20200315/2020031516094018231.png",
          rloequotations1:
            "和蒙德城大多数普通年轻人一样，诺艾尔梦想着成为一名光荣的西风骑士。",
          rloequotations2:
            "尽管还没有获得骑士资格，她仍以女仆的身份在骑士团里工作，努力学习着骑士的言行礼仪。",
          rloequotations3:
            "她始终相信，只要坚持努力，总有一天能穿上那副象征荣耀的甲胄。",
          Chinacv: " 宴宁",
          Japancv: " 高尾奏音",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/15/4dbd2e42805f8d04a692fec15de9137a_136589580932516706.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/15/f1bd52d117546c6931f9271ff93d8ed8_4798565783480730343.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/15/00381e81c9c6f494722af4c81589b53b_5360410859607658618.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/11/eeb8ed57db8e559959926c6fda18f9f7_6963440754739299640.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/11/1c807b063ecfd74d419266e1c0612966_1654648969263362155.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/11/45cca7124c450ee5dd8b8effc3a95ed4_1510562545368067380.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200315/2020031516291945513.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200402/2020040210433197373.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20200330/2020033019515967824.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20200330/2020033019083321421.png",
          rloequotations1:
            "自称「断罪之皇女」，与名为奥兹的漆黑夜鸦同行的神秘少女。",
          rloequotations2: "目前正以调查员身份供职于冒险家协会。",
          rloequotations3:
            "通过自己的特殊能力加上奇妙的个性，还有本人不愿意承认的努力，菲谢尔成为了冒险家协会调查员中的新星，且成功赢得了大家的认可。",
          Chinacv: " Mace&赵悦程",
          Japancv: " 内田真礼&增谷康纪",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2022/02/17/ed76ebd822d8f6cf8b71776559314530_453612434047505076.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/02/18/a8cdfac753f9255cf7adcf55d1d68597_6455894188446943398.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/02/17/37a1c12657eb288789571beed9ae3ce1_8213142316890395850.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/11/2c536bd063a9f14c752c211704bfe6ae_7714445915709642179.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/11/c6faf2cc5dac742be4a5146e7fa78703_3706833675888309930.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/11/cad11986cece2c3f814c41a5cf50618c_6724486818603617621.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200330/2020033019093719409.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200724/2020072414341528227.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20200724/2020072414342739132.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20200724/2020072414341918570.png",
          rloequotations1:
            "对世间万物抱有强烈好奇心的炼金术士，隶属于西风骑士团，是阿贝多的助手。研究方向为「生物炼金」。",
          rloequotations2:
            "她希望用炼金术改造既有的生命形态，让这个世界更加丰富多彩。",
          rloequotations3:
            "虽说改造过程中偶尔会出现一些过于奇异的产物，但总体而言，砂糖在「生物炼金」方面成就斐然。",
          Chinacv: " 小敢",
          Japancv: " 藤田茜",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/07/24/266035bf7f95ea5265f35a958805ab33_8410907754917379286.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/07/24/8927931747b983c7dfb1624548425c4b_2042954091570922218.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/07/24/8650bd7e9464295a5b82456247198c69_8899766217330793979.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/8781de64928cfff0f355426b70eaf740_5024324190041915365.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/67d14dfcd461f694971c39424c849ada_5633168741302407648.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/98935ea97efc200f9adc54260f0599a6_7690987693718976337.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200724/2020072414344986148.png",
        },
        {
          src: "	https://webstatic.mihoyo.com/upload/contentweb/2022/03/04/50a8abf4f443098f1196a6d6a5e8f049_1428522642031281646.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814334425258.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814334080742.png",
          rloequotations1:
            "神秘的少女占星术士，声称自己是「伟大的占星术士莫娜」，拥有与名号相符的不俗实力，博学而高傲。",
          rloequotations2:
            "尽管过着拮据、清贫的生活，但她坚决不用占卜来牟利…正是这种坚持，导致莫娜总是在为生计发愁。",
          Chinacv: " 陈婷婷",
          Japancv: " 小原好美",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/2b60565b8136daff32a479315bf88caf_9090687259956335188.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/8d876111805a87b648306e27aa2e61ad_2429109815979730925.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/cc4cb3eb7880909f95a45db8a81a0464_3115239802138656824.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/4d4f19f968d322b315fb9ec38879431e_3855772259319999081.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/2c8169362511329da179dd8517e57d91_3178448486295206162.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/f7719671e9e097e81280058ef422291d_6579174173817727750.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814361198272.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20201106/2020110614165336314.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20201106/2020110614341398595.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20201106/2020110614182351716.png",
          rloequotations1:
            "「猫尾酒馆」的超人气调酒师，蒙德酒业的超新星，传统势力的最大挑战者。",
          rloequotations2:
            "出身于清泉镇的猫耳猫尾少女，只要经迪奥娜之手调制过的酒类，都会变成难以想象的美味佳酿。",
          rloequotations3:
            "然而对于极度厌恶酒类的她来说，这到底是一种「祝福」还是「诅咒」呢？",
          Chinacv: " 诺亚",
          Japancv: " 井泽诗织",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/06/e2a695adb4dfac93b9ad56bd803d6e76_1954055051968847150.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/06/7f809f8019ca29fb7903c98eb1fd4819_5842573941200877654.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/06/16070a6690931ce9e6635a62043724b2_9149732500554636861.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/06/6381be8e893518d91e818219a31027b9_4718331557389615432.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/06/3a5c5999afcd14fe105677a5830722d9_5843041189104576971.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/06/5d701c35b43997b6a2fd513311dff9f9_3894250633395692581.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20201106/2020110614361391256.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20201216/2020121617552612199.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20201216/2020121617553582444.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20201216/2020121617553166600.png",
          rloequotations1: "阿贝多——现定居蒙德的炼金术士，效力于西风骑士团。",
          rloequotations2:
            "「天才」、「白垩之子」或「调查队长」…他不怎么在意称号和名望，只专注于研究课题。",
          rloequotations3:
            "财富和人脉不是他的目标。他渴望驾驭的，是从古到今深藏于人类头脑中的无上知识。",
          Chinacv: " Mace",
          Japancv: " 野岛健儿",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/12/16/75ea97fd7d51d88e66d839e309c9e7b8_4577901381782418160.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/12/16/4506fe1c5dda466467f7382c59f4554f_2425177956268651081.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/12/16/176f01eeaebc38bd44bd5f65880babf3_8419699181231065764.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/12/16/ccf7f7adf04d69fbe51eb88ecf4438a4_5530248899147755072.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/12/16/a5b07d3df1f3d57ff078d970ea12b673_942781106193094232.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/12/16/5006edd84818c10243d07790f1b6a1c5_1282876322155446405.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20201216/2020121618002223690.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718284773624.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20210324/2021032418480255041.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20220128/2022012817502831365.png",
          rloequotations1: "罗莎莉亚——蒙德城西风教会下属修女。",
          rloequotations2:
            "除了打扮哪里都不像神职人员的怪异修女。冷淡、锋利，如刀锋般锐利的女人。",
          rloequotations3:
            "行踪叵测，时常不告而别。身负着某种使命，但人们似乎并不明白她究竟代表着什么…",
          Chinacv: " 张安琪",
          Japancv: " 加隈亚衣",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/03/25/163d3e9f3ac44f65d52d5be8dbd489fa_710652689207352362.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/03/25/17c1b4c8db51474e22f3210579df7de4_741570736396781162.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/03/25/7c59941a53e155157e4ec9a1717283ba_6220188662990869494.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/03/25/8daa524fbd49244f59be004b557e3568_7645151543252125092.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/03/25/5c38602ec87214286f8050cc4f988b63_4115309960552777540.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/03/25/cf593045d0ecbac876e1e253e6d2a012_3303364742888162271.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210324/2021032418512999618.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20210508/2021050818340141562.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20210324/2021032418480255041.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20210508/2021050817102294597.png",
          rloequotations1:
            "优菈——常年在外作战的「浪花骑士」，反叛的旧贵族末裔。",
          rloequotations2:
            "生于旧日宗室，身负罪恶血脉之人，的确需要独特的处世技巧，才能在偏见的高墙下安然行走。当然，这并不妨碍她与家族决裂，作为卓越的「浪花骑士」，在外游猎蒙德的敌人，完成她那意义独特的「复仇」。",
          Chinacv: " 子音",
          Japancv: " 佐藤利奈",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/05/08/2f191fab4aee0365fa2f189b3f893071_7677211794554646864.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/05/08/f36d68950fc2c67a6ca546aff33bdf12_8244583680916228431.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/05/08/4c944ea411205f171bbd5c2885144ced_5509723630362481120.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/05/08/3503e7a30c9eeb9ecab07bb8a606fae6_164720276836434091.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/05/08/7ea74269d3a578999b5bb242d5ed7866_8767778951475849079.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/05/08/d4de9dca1f6622b2812a909d9a83fa02_6218799208592374120.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210508/2021050817102798548.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20210825/2021082511163623393.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20210324/2021032418480255041.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20210825/2021082511164241801.png",
          rloequotations1: "来自诺拉的机敏猎手。随时能为正当之事挽弓放箭。",
          Chinacv: " 沐霏",
          Japancv: " 高垣彩阳",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/25/0933c673a15f0335af179a92befd00ca_6196767716555499515.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/25/34b9a16c590959d6297b2147793643e8_3665280148259172212.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/25/08722655c4e01b393c701c651c23e85b_610223232988083101.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/25/daf11bad870c0ed20855aa74d2c49791_6905038516526786309.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/25/55fa99ed29829bad75d41497e198fd40_470882889862342194.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/25/73be2fc01010fba4d03697dedda740fe_6032599503377676997.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210825/2021082511235418739.png",
        },
      ],
      // 角色分页器图标遍历
      roleicon: [
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718344593599.png",
          rloename: "琴",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718350213870.png",
          rloename: "安柏",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617000181697.png",
          rloename: "丽莎",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617001674227.png",
          rloename: "凯亚",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617005720579.png",
          rloename: "芭芭拉",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617015669833.png",
          rloename: "迪卢克",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617025961375.png",
          rloename: "雷泽",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617031747812.png",
          rloename: "温迪",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617033181769.png",
          rloename: "可莉",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200312/2020031219222320482.png",
          rloename: "班尼特",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200315/2020031516092797889.png",
          rloename: "艾诺尔",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200330/2020033019074664412.png",
          rloename: "谢菲尔",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200724/2020072414340926231.png",
          rloename: "砂糖",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718352334387.png",
          rloename: "莫娜",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20201106/2020110614164694989.png",
          rloename: "迪奥娜",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20201216/2020121617552012082.png",
          rloename: "阿贝多",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718290075546.png",
          rloename: "罗莎莉亚",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210508/2021050817091079399.png",
          rloename: "优菈",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210825/2021082511163174110.png",
          rloename: "埃洛伊",
        },
      ],
      // 语音播放图标的切换属性
      audiorelated: false,
      // 中日按钮的切换属性
      isYes: true,
      // 三条cv的索引值
      a: 0,
      b: 0,
      // 角色图标点谁谁高亮效果的变量
      currentIndex: 0,
      iconindex: 0,
      ul_left: 0,
      ul_left2: -3744,
      iconnegativeindex: 0,
    };
  },
  methods: {
    // 三条cv轮流播放
    audioopen(index) {
      this.audiorelated = !this.audiorelated;
      // 第一层if代表语音图标状态。如果开启则进入播放语音循环
      if (this.audiorelated == true) {
        // 提前新建一个变量储存角标，关闭语音时需要用到，事件从上往下走，走完if就不会在考虑else了，所以会直接a++，这时需要将开启语音的a角标存给b供关闭时使用
        this.b = this.a;
        // 第二层if判断中日按钮状态
        if (this.isYes == true) {
          console.log(this.a);
          this.$refs[`yuyin${index}0`][0].children[this.b].play();
        } else {
          console.log(this.a);
          this.$refs[`yuyin${index}1`][0].children[this.b].play();
        }
      } else {
        // 判断中日按钮状态来决定停中文还是日文语音
        if (this.isYes == false) {
          console.log(this.a);
          this.$refs[`yuyin${index}1`][0].children[this.b].load();
        } else {
          console.log(this.a);
          this.$refs[`yuyin${index}0`][0].children[this.b].load();
        }
      }
      // 如果索引值与第三个cv相同，则重置索引
      if (this.a == 2) {
        this.a = 0;
      } else {
        // 实现三条语音按顺序播放
        this.a++;
      }
    },
    // 语音结束时触发，让语音播放图标变成关闭状态
    ended() {
      this.audiorelated = false;
    },
    // 实现切换中日文cv状态并且点击切换停止当前cv语音播放
    activelanguage(index) {
      this.isYes = !this.isYes;
      this.audiorelated = false;
      if (this.isYes == false) {
        console.log(this.$refs);
        console.log(index);
        this.$refs[`yuyin${index}0`][0].children[this.b].load();
      } else {
        console.log(this.b);
        this.$refs[`yuyin${index}1`][0].children[this.b].load();
      }
    },
    // 实现点击上一个图标
    prev() {
      if (this.ul_left == 0) {
        console.log(this.ul_left);
        this.ul_left = -3744;
      } else {
        this.ul_left = this.ul_left + 288;
      }
    },
    // 点击往下滚动
    next() {
      if (this.ul_left === this.ul_left2) {
        this.ul_left = 0;
      } else {
        this.ul_left = this.ul_left - 288;
      }
      console.log(this.$refs.bullet.children);
      console.log(
        (this.$refs.bullet.children[this.iconnegativeindex++].classList.push =
          "active")
      );
    },
    clikicon(nindex3) {
      console.log(this.$refs);
      this.currentIndex = nindex3;
      // this.activelanguage(index)
    },
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.swiper-role {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: url("~@/imge/rolebackground/蒙德.jpg");
  display: block;
  min-width: 1300px;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  .b {
    background: url("~@/imge/rolepicture/黑色背景.png") no-repeat;
    width: 100%;
    height: 100%;
    background-position: center top;
    background-size: auto 100vh;
    overflow: hidden;
    .swiper {
      width: 100%;
      height: 100%;
      overflow: hidden;
      .character {
        position: absolute;
        width: auto;
        height: 100vh;
        transform: translateX(0);
        left: calc(50% - 63vh);
        overflow: hidden;
        display: inline-block;
        min-height: 800px;
        z-index: 2;
        opacity: 1;
      }
      .character__icon {
        opacity: 0.1;
        position: relative;
        height: 370px;
        top: 10vh;
        left: 322px;
      }
      .swiper__slide {
        width: 100%;
        height: 100%;
        .character__content {
          position: absolute;
          z-index: 4;
          top: 18vh;
          left: 385px;
          width: 550px;
          transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
          .character__intro {
            position: absolute;
            background: rgba(1, 1, 1, 0.5);
            width: 100%;
            display: flex;
            padding: 10px 0 10px 15px;
            margin-top: 17px;
            line-height: 26px;
            color: #fff;
            p {
              margin: 0;
              width: 455px;
              text-align: justify;
            }
          }
          .character__intro::before {
            content: "";
            width: 40px;
            height: 20px;
            background: url("~@/imge/cv/介绍.png") no-repeat;
            display: block;
          }
        }
        .character__name {
          width: 50vh;
          height: auto;
          margin-top: 20px;
        }
        .character__cv {
          position: relative;
          display: flex;
          background: #cca574 url("~@/imge/cv/cv背景.jpg") no-repeat;
          width: 270px;
          height: 54px;
          font-size: 24px;
          color: #24333c;
          line-height: 54px;
          padding-left: 60px;
          .character__voice__open {
            position: absolute;
            background-position: center;
            width: 60px;
            height: 60px;
            background-size: 64px;
            top: -3px;
            right: -5px;
            background: url("~@/imge/cv/播放语音.gif") no-repeat center;
            cursor: pointer;
          }
          .character__switch--wrap {
            display: flex;
            position: absolute;
            top: 11px;
            right: -120px;
            width: 80px;
            height: 32px;
            background: rgba(18, 18, 18, 0.6);
            border-radius: 16px;
            align-items: center;
            justify-content: space-between;
            padding: 2px;
            color: #dbb17d;
            cursor: pointer;
            .class2 {
              width: 26px;
              height: 26px;
              border-radius: 50%;
              background: #dbb17d;
              color: #dbb17d;
              font-size: 0;
              text-align: center;
              line-height: 26px;
            }
          }
          p {
            margin: 0;
          }
          .character__voice {
            position: absolute;
            background: url("~@/imge/cv/语音.png") no-repeat;
            background-position: center;
            width: 60px;
            height: 60px;
            background-size: 64px;
            top: -3px;
            right: -5px;
          }
          .character__voice:hover {
            opacity: 0.9;
            cursor: pointer;
          }
        }
        .character__content::before {
          opacity: 1;
          display: block;
          content: "";
          width: 180px;
          height: 4px;
          background: #e3bc8c;
          left: 0;
        }
        .character__cv__name {
          display: flex;
        }
        .character__sen {
          position: absolute;
          top: 62vh;
          left: calc(50% - 26vh);
          z-index: 2;
        }
      }
    }
    // 整个下半场图标的大小样式和背景颜色
    .character__page {
      display: flex;
      justify-content: center;
      position: absolute;
      z-index: 9;
      left: 0;
      bottom: 0;
      padding-top: 22px;
      width: 100%;
      height: 190px;
      background: rgba(204, 204, 204, 0.2);
      // 整体图标的位置居中
      .swiper-pagination {
        display: flex;
        width: 830px;
        height: 150px;
        align-items: center;
        position: absolute;
        bottom: 0;
        z-index: 100;
        overflow: hidden;
        justify-content: center;
        left: 50%;
        margin-left: -415px;
        // 第二层图标外层大小
        ul {
          display: flex;
          width: 830px;
          height: 150px;
          transition-duration: 300ms;
        }
        // 图标背景,各个图标之间距离,图标大小
        .my-bullet {
          width: 100%;
          height: 132px;
          margin-right: 34px;
          align-items: center;
          background: url("~@/imge/rloeicon/图标背景.png") no-repeat 0 0;
          // 图标样式大小
          img {
            width: 106px;
            height: 106px;
            display: block;
            margin: 2px 2px 0px 2px;
          }
          // 图标里角色名称的样式
          p {
            text-align: center;
            font-size: 16px;
            line-height: 22px;
            color: #fff;
          }
        }
        // 点击或移入图标样式改变
        .my-bullet:hover,
        .active {
          background-position: 0 -132px;
          cursor: pointer;
          z-index: 5;
          p {
            color: #121212;
          }
        }
        // 图标最外层盒子限制大小
        .character__swiper--page {
          width: 830px;
          height: 100%;
          display: flex;
          overflow: hidden;
        }
      }
    }
    // 角色图标背景
    .character__page::before {
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      content: "";
      width: 100%;
      height: 156px;
      background: url("~@/imge/rloeicon/背景.png") center repeat no-repeat;
    }
    // 角色图标背景
    .character__page::after {
      background: url("~@/imge/rloeicon/羽毛.png") center no-repeat;
      position: absolute;
      bottom: 0;
      left: calc(50% - 79vh);
      display: block;
      content: "";
      width: 154vh;
      height: 52vh;
      background-size: 154vh 52vh;
    }
    // 分页器前进后退共同样式
    .swiper-button-prev,
    .swiper-button-next {
      background: url("~@/imge/rloeicon/上一个.png") center no-repeat;
      width: 45px;
      height: 64px;
      position: absolute;
      top: 90px;
      left: 50%;
      transform: translateX(-520px);
      cursor: pointer;
    }
    // 覆盖分页器后退样式
    .swiper-button-prev {
      background: url("~@/imge/rloeicon/上一个.png") center no-repeat;
      transform: translateX(-520px);
    }
    // 覆盖分页器前进样式
    .swiper-button-next {
      background: url("~@/imge/rloeicon/下一个.png") center no-repeat;
      transform: translateX(476px);
    }
    // 清除分页器前进后退默认样式
    .swiper-button-next::after {
      content: "";
    }
    // 清除分页器前进后退默认样式
    .swiper-button-prev::after {
      content: "";
    }
  }
}
li {
  list-style-type: none;
}
p {
  margin: 0;
}
.active {
  background-position: 0 -132px;
}
</style>