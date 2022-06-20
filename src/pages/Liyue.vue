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
          src: "https://uploadstatic.mihoyo.com/contentweb/20210122/2021012211421070422.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20200220/2020022016441018411.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20200220/2020022016332869699.png",
          Chinacv: " kinsen",
          Japancv: " 松冈祯丞",
          rloequotations1:
            "守护璃月港的「三眼五显仙人」之一，妙称「护法夜叉大将」。",
          rloequotations2:
            "虽然外表看起来是一个少年人，但一些有关他的传说，已在古卷中流传千年。",
          rloequotations3: "对望舒客栈中一道名为「杏仁豆腐」的菜颇为喜爱。",
          rloequotations4:
            "究其原因，是因为「杏仁豆腐」的味道，与他曾经吞噬过的「美梦」十分相似。",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/20/987e7000667c567a29f9abc3d14bb0d5_2911413560906889269.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/20/5da4d36bbe53fe5fcd3ce14782cc84ab_5501045953849136389.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/20/5a7100c2fbc68452006afa4dbd7f757a_4139067739853698717.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/20/402c89fffc5886be0ecf3e5200b3f999_2355186733651359703.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/20/9eacc534d687e3f7f26a470b5145783f_38915976500974336.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/20/b2ecb0debf8954bb35925e6bacc06e6c_4187366727687115513.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200220/2020022016340661411.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200227/2020022719264331835.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20200227/2020022718433296200.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20200227/2020022718432810701.png",
          rloequotations1: "「南十字」船队头领，在璃月有着相当的声望。",
          rloequotations2:
            "有人说她能开山劈海，有人说她善举剑引雷，还有人说，连可怖的冥海巨兽都不是北斗的一合之敌。",
          rloequotations3: "外人也许会把这些话当做夸张的玩笑，但那些曾与北斗同航的人却会说——",
          rloequotations4:"「世上若真有什么冥海巨兽，那北斗一定能将它劈作两截。」",
          Chinacv: " 唐雅菁",
          Japancv: " 小清水亚美",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/27/c3b2d92f225d8c9cd9004b194b0335e2_1126202425186451515.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/27/6b350631c4b7c103206e9d370f09ca63_1970141097526196358.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/27/3fa5d49b2ca0d8c05481e8fa8bcd0c4e_5610526902264312821.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/27/8147fa13c0dcfb6e402967c55c2b9ecc_2195266630814862175.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/27/59635d21d46f8e3f298683ed6ee49e46_3314343057873463234.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/02/27/8d94fe27eca0b6c90b3a807f2b9749fd_4128533521969035256.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200227/2020022718443769599.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200305/2020030517194492538.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20200305/2020030517195293816.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20200306/2020030616151224513.png",
          rloequotations1: "坐拥空中宫殿，有着大量传言的璃月权贵，脸上总是挂着优雅神秘的笑容。",
          rloequotations2:
            "作为「璃月七星」中的天权星，她不仅象征着权力与律法，也代表着财富与才智。",
          rloequotations3:
            "",
          Chinacv: " 杜冥鸦",
          Japancv: " 大原沙耶香",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/05/fe4cdbf8bcd56b1666612b92d8ab40a3_4686789150651811510.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/05/0777083b3e09f8d45728234601391e5c_8606974591030070916.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/05/2ae442ea5f825ae8301d76871c21d0a1_7443896139171107759.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/05/17f08f78af0f2ea2684de750ad6cba0b_4090721778843762361.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/05/f682bb8dc51a736614ac56d5d33ecf5e_9013135215794103386.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/05/9d01d8dad6f6b0780dc3f7bc6403b38d_2422058934574947497.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200305/2020030517202481315.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200315/2020031516372312969.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20200315/2020031516374761741.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20200315/2020031516373339548.png",
          rloequotations1:
            "「万民堂」的新任大厨兼跑堂，对料理之道极具热情，最拿手的是麻辣菜肴。",
          rloequotations2:
            "年纪尚轻，但厨艺精湛，在吃虎岩的老饕之中颇有名气。",
            rloequotations3:"如果她要请你进行新品试吃，大可放心品尝，绝不会辜负你的期待，真的。",
          Chinacv: " 小N",
          Japancv: " 小泽亚李",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/17/a7c703809b5bae1eddbff7490911edbc_8949369817292105034.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/15/f01163abba990fcd161e745bf7e35f4e_5786988202303918853.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/15/10da25f05cfd2a645ee1c6732f0b0e63_5534532061475154596.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/17/394996dd7a5dc2dff4e1db07515da098_1947358713880446855.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/15/f3b1e45f42cbd59a13c7adf308464830_5596429378448765345.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/15/186e5bd101460d42da24f72aca43a5fc_9150648584011121301.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200315/2020031516384085655.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200324/2020032419030915606.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20200324/2020032419033772019.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20200324/2020032419032328739.png",
          rloequotations1: "璃月港飞云商会的二少爷，自幼便以勤奋好学、待人礼貌闻名。",
          rloequotations2:
            "不过，即使是如此文雅的少年人，也有着动若脱兔的一面。",
          Chinacv: " 唐雅菁",
          Japancv: " 皆川纯子",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/24/ad55ed0f3ec4d1afb8c2b62cfebd7251_5422947237856253193.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/24/a76077d3d9863c7544f8a38cecab2505_3906125848103747786.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/03/24/3c0aa1c122abb432a714ca2650242e14_5851962150951938185.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/11/60b6242087e561f887131b6f31bc53b7_1966527343178730212.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/11/02155f06d3a897d34a21d69981932a92_5672117485658265836.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/11/da1531253e9ee1bcada491fc01b46132_1012574561460468138.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200324/2020032419052628612.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200602/2020060218491281684.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20200602/2020060218325741942.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20200602/2020060218325160619.png",
          rloequotations1:
            "以璃月为中心，四处进行驱邪活动的云游方士。作为驱邪世家继承人，他自幼便有过人的绝技。然而，这种绝技并非学自师门，而是与生俱来的异能——「纯阳之体」。",
          Chinacv: " kinsen",
          Japancv: " 齐藤壮马",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/02/24c1c46b6c9c120b0d673544b87b9f92_7884570162570397301.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/02/8be23db824df8e819340f4eace895974_5133815488544998107.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/02/8be23db824df8e819340f4eace895974_5133815488544998107.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/02/14c2057ee63420243b481d030ffd3745_2995341615997993576.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/02/26ff49a1f6fbda3f935e7ffb8aeaab88_2756851555815712728.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/06/02/da356e5abfdeb816ba2a223918370b35_2104262205821774975.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200602/2020060219243468834.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200828/2020082815550918957.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20191018/2019101817210884585.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814023090007.png",
          rloequotations1:
            "璃月七星之一，玉衡星。对「帝君一言而决的璃月」颇有微词——但实际上，神挺欣赏她这样的人。",
          rloequotations2: "她坚信与人类命运相关的事，应当由人类去做，而且人类一定可以做得更好。为了证明这一点，她比任何人都要努力。",
          Chinacv: " 谢莹",
          Japancv: " 喜多村英梨",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/547787fe315555ae4f23a0976a68354e_3764080277326225670.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/9f91d02b4638a9ba96c5f3d8277111db_2301368732650414422.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/4096455e0e039db6a0a3131a6fda9e8b_2791077959173480361.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/6249fb7c2adb4919b3098f147a624e3f_1910256524164409288.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/5133623714d0f93c15511dbad5f57f90_4661918793998011245.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/e31fb95a7f281f14e2e67a141790ddea_5142635537330394862.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814101895181.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814270362598.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814271020706.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814270793436.png",
          rloequotations1:
            "药庐「不卜庐」的采药姑娘兼学徒。",
          rloequotations2: "因「仙缘」而拥有不死之身，行动时需要自己给自己下敕令。",
          rloequotations3:
            "七七的记忆力非常差，为了保证日常生活的顺利，她随身携带着一本笔记，写有各种各样的注意事项。",
            rloequotations4:"但在最不巧的那些日子里，她连「要看笔记」这件事都会忘记……",
          Chinacv: " 宴宁",
          Japancv: " 田村由香里",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/622b40593c66c744bd25db0996224403_3821489039266228102.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/bfa5cbf42d09de97a75aa33de1e9b5e0_7710311997874240326.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/4a6e4553f5209fb9468d2019b347b771_732938881613551042.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/18652c4c750bb68ca1ac3f211eccc003_7659749229034114604.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/f2b18d125c575bbef11a9fba5a00d779_7687676181698699151.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/08/28/8343a00f4af5a00875f02bdabe259746_4472408160447119381.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814275863512.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20201103/2020110317320323980.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20201103/2020110314211545553.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20201103/2020110314191828910.png",
          rloequotations1: "达达利亚——来自寒冰之国，心思变幻莫测的客人。",
          rloequotations2: "不必猜测他的想法，也无需质疑他的来意。只要记住：这副稚气未脱的外表下暗藏的，是锤炼到极致的战士之躯。",
          Chinacv: " 鱼冻",
          Japancv: " 木村良平",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/03/55ccf5d42301112332a2eb387574b699_1342588995099177312.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/03/683306292ec289c7b9476603d641213f_4367432244170673101.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/03/0b5f0c9d749142f42ca60ce958093276_706646194280330237.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/03/91bc09085253406f6ea032853f83afae_450336190482677972.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/03/141274b7600ea6b20429cde5efd8ee7e_3495855788202215148.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/03/74b95a47887e9b27e6b14b5ee4efc9b4_5804028328900767047.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20201103/2020110314471196381.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20201126/2020112619441917813.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20201120/2020112010401114547.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20201120/2020112010401695507.png",
          rloequotations1:
            "应「往生堂」邀请而来的神秘客卿。样貌俊美，举止高雅，拥有远超常人的学识。",
          rloequotations2:
            "虽说来历不明，却知礼数、晓规矩。坐镇「往生堂」，能行天地万物之典仪。",
          Chinacv: " 彭博",
          Japancv: " 前野智昭",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/20/f38106e585fd05bfd720d41084a1c6ec_5555375464173958376.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/20/32ce42576ba7ce6236788cd92aaf2ab5_5172810609987891881.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/20/106401fd1b77bd33cd3b230750a79576_157939065097770566.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/20/177fd76054a08aa2d82b10497f45fba8_63573377966555146.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/20/7cd956c25a12efd49b1501606767a2a0_323534033331391923.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/20/323e90247f16bee161ad63825147f05f_1824081744372514922.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20201120/2020112010402393092.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20201125/2020112516075769591.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20201125/2020112515343317524.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20201125/2020112515345033442.png",
          rloequotations1:
            "在璃月港，摇滚属于新兴艺术，辛焱则是这门艺术身先士卒的践行者。",
          rloequotations2:
            "她用音乐和热情歌颂着对「成见」的反抗，想要唤醒劳于世间昏昏沉沉的灵魂。",
          rloequotations3:
            "如果有机会，请千万不要错过她的演出。",
          Chinacv: " 王雅欣",
          Japancv: " 高桥智秋",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/25/4782108f209dd0a7eba496def7be33cc_1204037907172443045.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/25/4a402b94c2c9fd967ff7f094af1fa606_3242418520104185882.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/25/77f08d3cb4109c02da4d5e6a55946a3d_482654850660101227.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/25/f5ebdc3aa2852da587147600ddf6fa57_5808611694818299100.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/25/3a443d837b1c5437f0804fa33bc3d529_7331553057523388553.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2020/11/25/9cd02801fe0e3ec1abf119a79706772d_3160576879411720392.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20201125/2020112515443710114.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20210105/2021010519112015673.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20210105/2021010512063814668.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20210105/2021010512052311851.png",
          rloequotations1:
            "璃月七星的秘书，体内流淌着人类与仙兽的血脉。",
          rloequotations2: "天性优雅娴静，但仙兽「麒麟」温柔的性情与坚定毅重的工作态度毫无冲突。",
          rloequotations3:
            "毕竟，甘雨坚信自己所做的一切工作都是为了践行与帝君的契约，谋求璃月众生的最大福祉。",
          Chinacv: " 林簌",
          Japancv: " 上田丽奈",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/01/05/7aa09841654203777afd492a7eac1e89_2280084462206356061.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/01/05/c264f16a6f3b033573877bd985047b5d_3954647306113332838.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/01/05/7a7b61994f666ec1f4f58c62a5547dca_7514246459786984903.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/01/05/fd8387398e9452647bba88f82e1adf02_3040254413934564240.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/01/05/230d24d3335ea6d9d416a5f254bb03b6_7766239729601179376.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/01/05/77ea46ead5cd3c2c40ae96210f9e62df_8144127062944391429.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210105/2021010512204965250.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20210222/2021022210584936766.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20210222/2021022211000571711.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20210222/2021022210585593425.png",
          rloequotations1:
            "胡桃——「往生堂」第七十七代堂主，掌控着璃月葬仪事务的重要人物。",
          rloequotations2:
            "尽心尽力地为人们完成送别之仪，维护着世间阴阳平衡之道。",
          rloequotations3:
            "除此以外还是个神奇打油诗人，诸多「杰作」被璃月人口口相传。",
          Chinacv: " 陶典",
          Japancv: " 高桥李依",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/02/23/45f25ef9265ded7ddf81fe4800cec0b7_3597188309984331541.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/02/23/8dd40f6171861eb79b21f6fc20c223aa_4449193690528734841.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/02/23/683c1e1b19414b4b18eed09dcbba9dd1_1076901006776818405.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/02/23/bd45d102d9eb49032c125d8d90c50e35_6067164904881687183.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/02/23/fc9b62fcfc2c62ca7d96bf20c078863f_6087453370725344419.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/02/23/a2a3e54ea695acc899ee16fcd50dcee7_6397390686389743106.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210223/2021022314115139379.png",
        },
        {
          src: "	https://uploadstatic.mihoyo.com/contentweb/20210420/2021042014110084649.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20210420/2021042014111241198.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20210420/2021042014110687352.png",
          rloequotations1:
            "烟绯——身负半仙之血，能力一流的律法咨询师。",
          rloequotations2:
            "她在循途守辙与通权达变之间寻得了只属于自己的完美平衡点，凭借律法咨询师的独特身份和自成一派的经验手段，悉心守护着璃月的契约天平。",
          Chinacv: " 苏子芜",
          Japancv: " 花守由美里",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/04/20/283915dccc5fbfc22b776bdf88307a03_6037378129114458836.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/04/20/7cce39637c589d8fbc5a50a89cd778e1_8367031283833822683.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/04/20/a50a56853e4281114de81a5b1ee0dfde_1424666819744474935.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/04/20/7fb28c19ee8ae8ed2ec570dc4e2f4ffd_4050115473979887046.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/04/20/42450d31da99d3b0c9ee4b606c288c10_1985155174831796184.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/04/20/002bce2c0411481314a382ed58e26346_5739880026141706662.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210420/2021042014122760534.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20211221/2021122118122432763.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20201106/2020110614341398595.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20211221/2021122118123081661.png",
          rloequotations1:
            "虽为人类之身，却是仙家弟子。过去曾生活在远离璃月港的山野之间，以红绳缚魂，修身养性。",
          rloequotations2:
            "气质淡雅如仙人，身上似乎藏有某些秘密。",
          Chinacv: " 秦紫翼",
          Japancv: " 川澄绫子",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/df033e1ae757cc48ceec51baef9ee2a3_2444583593259884268.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/a677b462fc8c8cb8b4b3e075afcb04a3_5734756296517795814.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/29d9af42d0579db2b8ba64bcfbb383b8_4382474914180681768.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/3573f9b7bf997f9615ee9a10f9cea242_2538463066252583246.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/4c13eced7b748724d1a5ab3616ca741b_3781833730410865742.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/9d9e891c1816279cafe148bd004bb038_9165383381840549685.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20211221/2021122118133854510.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20211223/2021122310351318819.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20211221/2021122118001779515.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20211223/2021122310352246337.png",
          rloequotations1: "「云翰社」现任当家，集剧作与演唱能力于一身的璃月戏曲名角。风格自成一派，雅致柔美，恰如其人。",
          Chinacv: " 贺文潇&杨扬",
          Japancv: " 小岩井小鸟&杨扬",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/c11c71cbe35edc8f8ff86d73e912c061_6825572009083891284.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/b94d1cfb4c0058bc1f33cc5a2e74ca5e_3791058502778509437.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/aee01786ba484492d7501feae4aaa82a_7192508526353233306.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/8a0ec90a07df7a61d1a479c17a5622b0_7377793048641958898.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/536aca1bf834b1f2456627e8a470ad0d_5055810704360412721.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/29/6d2fb1eb4b1abe9a251d47bc56a57d96_4484253815445891493.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20211221/2021122118005470256.png",
        },
        {
          src: "https://webstatic.mihoyo.com/upload/contentweb/2022/05/18/f120e977480400eedcd44e05def8383e_6188548435833063608.png",
          character__icon:
            "https://webstatic.mihoyo.com/upload/contentweb/2022/05/18/b6b52488f3e37681298dceb2a928e271_5270286606701646042.png",
          character__name:
            "	https://webstatic.mihoyo.com/upload/contentweb/2022/05/18/b3b3cd2732ed303a07ffe8b552ee8e55_5014866926012877940.png",
          rloequotations1: "自称供职于总务司的神秘人士，却又是总务司名录里的「不存在之人」。",
          rloequotations2:
            "神出鬼没，行踪飘忽，变幻无常，这些都是她的标志。",
          Chinacv: " 徐慧",
          Japancv: " 远藤绫",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2022/05/18/cfbc4a7571fcfbce3a38befb5e40465e_2407065933696355588.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/05/18/f7b6fb0a4a8272c38129ed698ac698d1_59066994197650444.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/05/18/da6108521ec021758b45bdd0c3e17a24_8011951864057771165.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2022/05/18/9e3978b8bada690b81889c8ee76724c2_343629830649180188.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/05/18/eecfec23a9bb36af94f3852958d364b5_527612632204339926.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/05/18/6a14ac11f29c65b99d12c0956392be76_1538973623994675073.mp3",
          ],
          rloemotto:
            "https://webstatic.mihoyo.com/upload/contentweb/2022/05/18/30e336d03343f2c34fb0854d5cc35c28_7312368089955044179.png",
        },
      ],
      // 角色分页器图标遍历
      roleicon: [
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617035787693.png",
          rloename: "魈",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617043374251.png",
          rloename: "北斗",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617042023125.png",
          rloename: "凝光",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200316/2020031618192613355.png",
          rloename: "香菱",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200324/2020032419030350146.png",
          rloename: "行秋",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200602/2020060218324180299.png",
          rloename: "重云",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814015644368.png",
          rloename: "刻晴",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814265912018.png",
          rloename: "七七",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20201103/2020110314190784136.png",
          rloename: "达达利亚",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20201120/2020112010371210769.png",
          rloename: "钟离",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20201125/2020112515344362241.png",
          rloename: "辛焱",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210105/2021010518424084444.png",
          rloename: "甘雨",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210222/2021022210584218038.png",
          rloename: "胡桃",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210420/2021042014093440786.png",
          rloename: "烟绯",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20211221/2021122118121612158.png",
          rloename: "申鹤",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20211221/2021122117591771295.png",
          rloename: "云堇",
        },
        {
          rloeicon:
            "https://webstatic.mihoyo.com/upload/contentweb/2022/05/18/76cfc9a21e196fd316070196c1396950_2919759828280177295.png",
          rloename: "夜兰",
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
      ul_left2: -3168,
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
        this.ul_left = -3168;
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
      this.currentIndex = nindex3;
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
  height: 100vh;
  background: url("~@/imge/rolebackground/璃月.jpg");
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
    .swiper {
      width: 100%;
      height: 100%;
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