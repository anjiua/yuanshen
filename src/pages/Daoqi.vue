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
          src: "https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011090118454.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011091174753.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011090831883.png",
          Chinacv: " 小N",
          Japancv: " 早见沙织",
          rloequotations1:
            "稻妻「社奉行」神里家的大小姐。端庄文雅，聪慧坚韧。",
          rloequotations2:
            "待人接物真诚又得体，深受稻妻民众爱戴，贵有「白鹭公主」之名。",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/07/20/7f472a7275f4b55993b5ff5763e13b30_8377129136967639266.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/07/20/af1954dc86733488c0798e049d0e786e_4737018221285601842.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/07/20/8dec8410364362a6eeb4b964db78956d_1084401291376436793.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/07/20/29c6c364057459fd04d583dccaae4063_6198033798163726561.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/07/20/c39ad798cb0e7c82eaeedb58023b7561_3985192032190994705.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/07/20/d7b40126b41db4ac8318aea07e4f9d1e_4934865499911976723.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011115413785.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20210618/2021061816182269106.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20210617/2021061716255560601.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20210617/2021061716243457405.png",
          rloequotations1: "稻妻出身的浪人武士。为人谦和，个性温顺。",
          rloequotations2:
            "年轻潇洒的外表下埋藏着许多往事。看似随性，心中却有独属于自己的行事准则。",
          Chinacv: " 斑马",
          Japancv: " 岛崎信长",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/06/21/6ecea9416bba2b0e4247e73bbb7be042_4460764697464754974.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/06/21/51f35c8b0562e8778f3d28748262e164_4010539822759918447.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/06/21/0aacd305523d7e3eb002f9ad61bb4ef6_1987714923965169614.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/06/21/11877005dcf32e6ede0983f64ead22cc_4450574475721433246.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/06/21/58f5bff0fb31d0a81fa0c9ff74a91f45_6156953449938336535.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/06/21/af533a20306045ff73a3e08e6dea41e1_2372287598186753587.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210618/2021061815474660436.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20210802/2021080218445394104.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20210802/2021080210203077277.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20210802/2021080210200225791.png",
          rloequotations1: "才华横溢的烟花工匠，「长野原烟花店」的现任店主，被誉为「夏祭的女王」。",
          rloequotations2:
            "热情似火的少女。未泯的童心与匠人的执着在她身上交织出了奇妙的焰色反应。",
          Chinacv: " 金娜",
          Japancv: " 植田佳奈",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/aa2ee25ae38d15c220f82ff9537ba7fc_3776663113235335928.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/77a2e248a305c53fd4ed5d312b83284b_8036286503795698203.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/ec97f9a962ea8c3aa05ba25df20de13f_2760322511978007859.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/cb80d952e0869475d43b13399cee8628_7156654510363824737.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/4a866a3b819e0ad470624b29196778cb_5528160998536916081.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/b15f411d95bed6a7284c14f127f6edbc_7550581952254436559.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210802/2021080210194512627.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20210802/2021080211352421154.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20210802/2021080211382144344.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20210802/2021080211353240707.png",
          rloequotations1:
            "早柚——隶属于秘密组织「终末番」的特别忍者，对睡眠和长高有着异乎常人的追求。",
          rloequotations2:
            "掌握一切可用于逃跑、隐蔽的忍术，以此为自己创造偷懒睡觉的机会。",
            rloequotations3:"如此神奇的手段，或许会有意想不到的用途。",
          Chinacv: " Sakula小舞",
          Japancv: " 洲崎绫",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/f49b6fb4f737cdb0bbad354d2185fd63_2599111236268169746.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/384896610a44df979023679743127b78_1102300545554899352.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/abd9c4ef800c8ebcadaf54f9352ddd99_4772646027450001660.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/c9e543da91e42f5ea3eaf6b01bba87a5_5104033391491107683.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/dc35dd9226756c6276ca758c18bcf103_71898983486647420.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/02/2e4966770425467641cb44ebeb7b4113_2453379177830856836.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210802/2021080218412042278.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714114771170.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714133446589.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20210817/2021081716214073881.png",
          rloequotations1: "雷电将军——此世最殊胜威怖的雷霆化身，稻妻幕府的最高主宰。",
          rloequotations2:
            "挟威权之鸣雷，逐永恒之孤道的寂灭者。",
          Chinacv: " 菊花花",
          Japancv: " 泽城美雪",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/39b66a2986d98e11598dcea85f424a33_2577387483605596756.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/4dfec4400542c180e221bd66412df16b_8990190346333983947.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/1af56739b893c213833c2b40ca69ade4_6864348449325050947.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/481c376746e60e35a6bbee67be417a43_2181641070533377222.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/cbbefc411dced002a737c54fef29fefb_8733330326377566442.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/da1e8ca058c33987ba5e549729b6f5d8_2557063618416435832.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714412863291.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20210817/2021081717485217991.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714513181361.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714515924405.png",
          rloequotations1:
            "天领奉行的将领。行如风，言如誓，是位魄力过人的女性。",
          rloequotations2:
            "她有着「神的笃信者」之名，将全部忠心都奉献给了雷电将军。",
            rloequotations3:"将军所追求的「永恒」，也是她愿意为之而战的信念。",
          Chinacv: " 杨梦露",
          Japancv: " 濑户麻沙美",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/99adb2c6bd019e2015754e923f78dd99_4515795647579977996.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/3919d3e9a3d684da5c665b7ea5c82622_4479875775907783314.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/0af3d02ebabec73a94ab5eba23cc28a2_1057539507298170602.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/f2bb0bbc812c9443e5d2a13fbcef9072_2484630271497494946.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/b001d15da3c5710011483c18acc709da_4727314824531318751.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/08/17/6cd8efea2b7fa5188d416b002a1cd8a1_603725215041855263.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714523998137.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414025226225.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414033856414.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414025755510.png",
          rloequotations1:
            "心海是海祇岛的「现人神巫女」，也就是现任海祇岛最高领袖。",
          rloequotations2: "她通读兵法、擅长谋略，在军事上有着独特见解，也能将内政、外交等工作处理得井井有条。",
          rloequotations3:
            "不过，这位人们眼中深不可测的领导者，似乎也有不为人知的一面…",
          Chinacv: " 龟娘",
          Japancv: " 三森铃子",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/09/14/066ccfe8a8b4c3cb074d98dea8a40f04_8640216587851804808.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/09/14/9fe044600f58bd5f09ea1c0a8a728a3b_218945200811610109.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/09/14/51bfa182ed62e4c27dd649a5fbae5fb5_4000193014965995717.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/09/14/f51c572dd1ab948adacecc0f6e7a8314_6274151618502414156.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/09/14/05a2c7db137d2afe80de5d05ca187159_39721878391676626.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/09/14/b111af84b9e5d33da496fc8719ff8b0a_7024743108045391062.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414100513442.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20211021/2021102110373238959.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20211021/2021102110380215637.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20211021/2021102110373773947.png",
          rloequotations1:
            "社奉行神里家的家政官，同时也是活跃在稻妻的「地头蛇」。",
          rloequotations2: "为人友善又富有亲和力，不论身处何处都能轻易融入人群。",
          rloequotations3:
            "乍看似乎是个非常随性的人，实际上却很有责任感。无论对待工作或人际都有着格外认真的一面。",
          Chinacv: " 张沛",
          Japancv: " 森田成一",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/10/21/475cb16246c86ecb649c846d11008813_258601325323128040.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/10/21/1fd2992b61185e0d8cfe29a94969707b_6664088418355226550.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/10/21/c8f5d9a815428a0355989dd0ae48411b_6798234750508380395.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/10/21/39e4df2f4483cb0620176dad19ea9c15_5342213997887086389.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/10/21/b1a6a3e701387021f1dc42cb9ac61728_1734662056391568229.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/10/21/b05520d57bf03aba739c002a6d613db1_6647267639651315829.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20211021/2021102110403853608.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011275854973.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011290767842.png",
          character__name:
            "https://uploadstatic.mihoyo.com/contentweb/20220211/2022021110515085827.png",
          rloequotations1: "鬼族后裔，性格豪爽热血的快意男儿。",
          rloequotations2: "如风一般迅猛，也如雷一般夺目。",
          Chinacv: " 刘照坤",
          Japancv: " 西川贵教",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/5501b11a3d3dcd72fa4bf30fc157c52f_4022739660926838360.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/7fe0df8ac2d9cf97b451473391d4333b_3490942679585447100.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/400e17f56060368659da749e50224631_3519935230986289830.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/81bec0913be048ce15ec16b33d5bbe63_1282921392332148631.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/65cac32c751ed0164f9a83f6db93c7f9_7582285004775772876.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/017305ce74211414f364a94efb511736_6681641593642983836.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011313791472.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011492020608.png",
          character__icon:
            "	https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011493754512.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011492586683.png",
          rloequotations1:
            "海祇军大将。身具领兵者威严的同时，又无高位者的倨傲。 ",
          rloequotations2:
            "无论何时何地都深受部下信赖，能让人毫无负担地寄托后背与心灵。",
          Chinacv: " 杨昕燃",
          Japancv: " 畠中祐",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/81db8dc92f41284b0e76212ece323143_1387016889211558611.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/03a9dd0efbe123074cc096f378f798a5_4362860244312160470.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/73105185603e5b3fa5e713f8a25fb99f_624595191785142815.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/3c1257c11196e86f177fb51fc20c85cd_4312234793306601845.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/b3ea0c9e42571abe5f499527ec326205_6510806456442507606.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2021/12/06/32e0e4a7bab6b36eea32c9452c80cf3f_8273266759743046876.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011494855773.png",
        },
        {
          src: "https://uploadstatic.mihoyo.com/contentweb/20220208/2022020814003845991.png",
          character__icon:
            "https://uploadstatic.mihoyo.com/contentweb/20220208/2022020813482761032.png",
          character__name:
            "	https://uploadstatic.mihoyo.com/contentweb/20220208/2022020813482085195.png",
          rloequotations1:
            "掌管鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人，以及，轻小说出版社「八重堂」的恐怖总编…",
          rloequotations2:
            "有着多重身份的神秘宫司，凡人们或许永远无法了解她的真面目与真心。",
          Chinacv: " 杜冥鸦",
          Japancv: " 佐仓绫音",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2022/02/09/e685260348cb983b2d1f37e65cd0eca2_4157385829643394891.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/02/09/4bdb223002d50c0b5f2ae5fdb208d790_7108046907438191811.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/02/09/05fc4e16bb4849cc386a68a76059d4b7_3124555680028354670.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2022/02/09/1d17f868dcee19beec7edf9cb28b75c5_7551626543960752224.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/02/09/b816c450540de1ffff328a288a8823b7_8713938654662491486.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/02/09/e4f79a4f343b8bc05dc7ae0dd0d54fa7_3502011708712629262.mp3",
          ],
          rloemotto:
            "https://uploadstatic.mihoyo.com/contentweb/20220208/2022020813493064972.png",
        },
        {
          src: "https://webstatic.mihoyo.com/upload/contentweb/2022/03/21/ccfce868ab7a930170b38b51347043a6_7260794820701276078.png",
          character__icon:
            "https://webstatic.mihoyo.com/upload/contentweb/2022/03/14/b6b52488f3e37681298dceb2a928e271_2647146266674788865.png",
          character__name:
            "	https://webstatic.mihoyo.com/upload/contentweb/2022/03/14/a6553a5ca7488a1e503fba7c6e12231e_2756540788796509812.png",
          rloequotations1:
            "社奉行神里家现任家主。总有办法以周全的手段实现自身目的。不过，鲜少有人知道他如今最在意的「目的」是什么。",
          Chinacv: " 赵路",
          Japancv: " 石田彰",
          chinaaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2022/03/23/255b16a3ad9354fb758cdc223ac64701_8118458952098024344.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/03/23/4b587b7508f78fc8b08b939d09235a93_874121027580887003.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/03/23/fe45bee64dd7cb1ee60fbf1c53c52d3f_6920457761698448583.mp3",
          ],
          japanaudio: [
            "https://webstatic.mihoyo.com/upload/op-public/2022/03/23/98d5d77f4ae9bfcf8f5d527d844df313_470688967172406083.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/03/23/8718ac752368d1b371f0dca338428814_2374489126794518039.mp3",
            "https://webstatic.mihoyo.com/upload/op-public/2022/03/23/02ffb99c4db0689b77368d4600180fca_3606446419255903624.mp3",
          ],
          rloemotto:
            "https://webstatic.mihoyo.com/upload/contentweb/2022/03/14/d2f9cae6a83071a33971b0bc082a3b4e_387282153639692788.png",
        },
      ],
      // 角色分页器图标遍历
      roleicon: [
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011085576262.png",
          rloename: "神里绫华",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210617/2021061716564818668.png",
          rloename: "枫原万叶",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210802/2021080210195390130.png",
          rloename: "宵宫",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210802/2021080211352035312.png",
          rloename: "早柚",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714114216212.png",
          rloename: "雷电将军",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714514765929.png",
          rloename: "九条裟罗",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414024724995.png",
          rloename: "珊瑚宫心海",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20211021/2021102110372681510.png",
          rloename: "托马",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011275394620.png",
          rloename: "荒泷一斗",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011485830826.png",
          rloename: "五郎",
        },
        {
          rloeicon:
            "https://uploadstatic.mihoyo.com/contentweb/20220208/2022020813481182336.png",
          rloename: "八重神子",
        },
        {
          rloeicon:
            "https://webstatic.mihoyo.com/upload/contentweb/2022/03/14/6713b70c875d723eb22c9effda407377_2979852309102536594.png",
          rloename: "神里绫人",
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
      ul_left2: -1728,
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
        this.ul_left = -1728;
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
  height: 100%;
  background: url("~@/imge/rolebackground/稻妻.jpg");
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