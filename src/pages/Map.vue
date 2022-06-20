<template>
  <div class="bigbox">
    <swiper
      :options="swiperOptions"
      class="map swiper-no-swiping"
      v-show="reRender"
      ref="mySwiper"
    >
      <swiper-slide
        class="home"
        style="height: 100%; display: flex; justify-content: center"
        ><div
          class="home__content"
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          "
        >
          <img
            src="@/imge/map/标题.png"
            style="width: 41.8vh; margin: 0 auto 2.4vh"
          />
          <img
            src="@/imge/map/分割线.png"
            style="width: 52.9vh; margin: 0 auto 2.4vh"
          />
          <div
            class="home__desc"
            style="
              width: 800px;
              text-align: center;
              font-size: 16px;
              color: #fff;
            "
          >
            <p style="height: 28.7px">
              这里是七种元素交汇的幻想世界「提瓦特」。
            </p>
            <p style="height: 28.7px">
              在遥远的过去，人们藉由对神灵的信仰，获赐了驱动元素的力量，得以在荒野中筑起家园。
            </p>
            <p style="height: 28.7px">五百年前，古国的覆灭却使得天地变异…</p>
            <p style="height: 28.7px">
              如今，席卷大陆的灾难已经停息，和平却仍未如期光临。
            </p>
          </div>
          <a
            href="https://ys.mihoyo.com/main/town"
            class="home__town"
            style="
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAioAAAAnCAYAAAAhMWNEAAAEwElEQVR4nO3dW5LaMBBAUUFlJVljlpU9Mj+hSFFgt9Rv+Z6vKSywx49uWZKt2+8/f8cY4zbOnZX5tvzoe5+WzfyOtuz7Z6vf8/jMs+zs78wsl5YBsKeHQZlvy4++92nZzO9oy3p/pvktz7KzvzOzfIwxHvfhn1QkG1LF7MHx/K7ncaEiAaCj6LiYFf+7501Lt7vRSjomPk1rh7RiId0vmgtkZj0SFudDp4sMgJ1q8WMmNmpuGCNyxy55dlZIi0o06f+jqcVKT8CohJ11YQOAtWo3Xqvr0VR8rPNTZ7e70Q9VuoPWHEzNAe50clQ6XgAg1Sl2WecTTSUni8m2WFVUjlRN4NqBSZJyVSs+3sek6jEH4KtzbLGO19ZjVCpVQP7nHu+txqjswnqHa/at53FZGb0NABGy4lOleM3N3ssjokWl6omlORG6J3MuAgAddY9dO+Ys93y4Y9dPxPq6j8g+OrE6/R8A9nMUgzrdJGblie1ybsX3qGQ9ljuzjk4XyydURgB01D12Rb8za2Udnjl7hdlTP4crcSwfMeBIemJlnYArvPuAu1fkAKzxjh9VY4smJ0TkLM8GgDKDaav2jUUMfs2qlGRVcizWW7WCBsBX5/gREcOzKi+e+9R73I34hW9ZA4DORNSus0aCd6rgAUCEqvmkaqyPWId3Q4bZK/SzWO8gzeuSNeWsv3uGrh8AHjp3/UTE66hpVVbXW9GWkxJWOmGq17I/OdsvVEIAaJzFkKykGhGvq98gr9hiUsLuOy2iUhKtaksPgP1dJf5k5Y5KjQNmkxJasNwx2t/K6g7KVG0bq20PgBjVrv1q2/NJtW6eSvl8jGH3HhXLkyHz8WTrKb2jdGrNAYAombFRkyesb7iz3k9mUr9gMO3aZ9XM7ocO/xMAvJuNXR1aVCJyUYf98M2l5/qR0kytHXVy7HjxAsC7qjdlmu6biHjcOg9HjFHpNC33Jx2f3NHouM0A9tExBkXkiaqDkN3nZrKqqFztDr3roFsJk1HaBr8BoB/vp0g72XGeuFkmxzKiRaVTk5N08BMnIADgiPSGNuLhjKw8XOqpnyPbTTmNUxwD4Jq49vPtlnNDXvgW/crjrHkTuEBfaF0Crolr/+Uq+cl7jKrZK/SzTk7rAUzSz6xPwOj9591UR6UNuCbvfFIpVq58V5o7rB9P7pijny79HhVNv6B1jbVSYq+0LQCup1IMso7rmid8dskxs0Leo1J1B2laT6pODiXl3VXXufILYJ13/OgYU8/KaVpZKnA/JhGDaTvp3qVjgfMBQKaOMSiii+iqSnb9zGwPb6ZdwxgVAB52G6MitdObaavt45Kv0J85aBHPmmtOto5zM1DJAJCpY+zT3KhGdPN45tWQV+hLNuqszNHyqonPerBSpxYVxqgA8MAYlRfrG9VO/7tkmWT5GP+6fiSuMk5Duq07PrL8ZDItt8FvAOinc/zIehTZeluiuee57pMSRtjxqR8AgB3rp346CZmUkMGTL9ZdP51qxQCANdbxn5z68vj1/ENS2GCFAAAAYhFP/QAAACx5tqhkPfkz01/nUTbjs+z/2XPZSjkA+7AYLGq57Ft567Ka+XoiPosuK1kmWT5G0HtUqiKRAgC6uGzO+gGoUEWl4dRInQAAAABJRU5ErkJggg==)
                center no-repeat;
              width: 500px;
              height: 34px;
              text-align: center;
              line-height: 34px;
              font-size: 18px;
              color: #fff;
              margin-top: 1vh;
              cursor: pointer;
            "
          >
            前往游记精选
          </a>
        </div>
        <div class="home__tip" @click="updown">
          <img src="@/imge/map/下拉图标.png" class="home__tran" />
        </div>
      </swiper-slide>
      <swiper-slide class="city mengde" style="height: 100%">
        <div class="city__content">
          <div class="city__name">
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200317/2020031714242066580.png"
              class="city__icon"
            />
            <h1>蒙德</h1>
            <p class="city__desc">
              位于提瓦特大陆东北部的自由城邦。
              <br />
              群山和广袤的平原间，自由之风携着蒲公英的气息吹拂过果酒湖，为坐落于湖心岛上的蒙德城送去风神巴巴托斯的祝福与恩泽。
            </p>
            <div class="city__detail" @click="detail_mengde">
              <p>查看详情</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="city liyue" style="height: 100%">
        <div class="city__content">
          <div class="city__name">
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200317/2020031714245390532.png"
              class="city__icon"
            />
            <h1>璃月</h1>
            <p class="city__desc">
              位于提瓦特大陆东方的富饶港湾。
              <br />
              傲然矗立的山麓与石林、广袤的平原与生机勃勃的河滩共同构成了璃月的丰富地貌，在四季分明的气候下焕发出多彩的风华。山石奇景间，又埋藏了多少岩之魔神的古老馈赠等待着人们发掘呢？
            </p>
            <div class="city__detail" @click="detail_liyue">
              <p>查看详情</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="city daoqi" style="height: 100%">
        <div class="city__content">
          <div class="city__name">
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917401911066.png"
              class="city__icon"
            />
            <h1>稻妻</h1>
            <p class="city__desc">
              位于提瓦特大陆远东的封闭群岛。
              <br />
              越过无尽的雷暴，踏上红枫与绯樱眷顾的诸岛，在环绕的砂堤、高耸的断崖与幽秘的山林之中，见证御建鸣神主尊大御所大人所追寻的永恒。
            </p>
            <div class="city__detail" @click="detail_daoqi">
              <p>查看详情</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide style="height: 400px">
        <BottomLnstructions />
      </swiper-slide>
    </swiper>
    <div
      class="scrollbar"
      style="
        position: absolute;
        right: 0;
        top: 0;
        z-index: 220;
        width: 5px;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
      "
    ></div>
    <!-- 蒙德城市相关资讯 -->
    <div class="detail" v-if="mengde">
      <div class="detail__content">
        <p class="detail__title">蒙德</p>
        <div class="detail__close" @click="detail_mengde"></div>
        <happy-scroll color="rgba(51,51,51,0.2)" size="4" class="detail__wrap">
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            果酒湖
          </h1>
          <p>
            环绕蒙德城的天然淡水湖泊。
            <br />
            宽广的湖面和粼粼的波光历经千百年不变，水澈见底，入口清冽甘甜。正是这样的水源成就了蒙德美酒的盛名，也让果酒湖成为了蒙德的重要标志之一。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200113/2020011311461397057.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            鹰翔海滩
          </h1>
          <p>
            从风起地往东延伸至海边，鹰翔海滩与誓言岬共同围成三面环海的陆地，环绕着蒙德东面的海湾。
            <br />
            鉴于海岸线较长且地处浅海位置，经常有蒙德市民前来游玩。偶尔可见苍鹰翱翔于碧浪白沙之上。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200113/2020011311462187517.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            誓言岬
          </h1>
          <p>
            位于蒙德城东南角、风啸山坡边缘的海岬。
            <br />
            传说曾有一对恋人在此许下誓言，并留下一个感人至深的故事。至今此地仍被认为是恋人的好去处。
            <br />
            除了观看海上日出日落外，由于地势的落差，在这里也可以轻松望到海湾对面的风起地。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200113/2020011311463354982.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            晨曦酒庄
          </h1>
          <p>
            位于蒙德城西南方的晨曦酒庄，代代传承着蒙德传统的酿酒工艺。
            <br />
            这里种植着大面积的葡萄等作物，用它们酿造出的各类酒品风靡整个提瓦特大陆。
            <br />
            每年晨曦酒庄产出的酒品，部分运往蒙德城内销售，另一部分则通过城南的商道销往各地。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200319/2020031910130187113.png"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            清泉镇
          </h1>
          <p>
            蒙德地区南部的悠闲小镇，与蒙德主城隔湖相望。
            <br />
            此地居民多以打猎为生，常年为蒙德城内的各大餐馆提供优质鲜肉。
            <br />
            清泉镇以其小镇情调和乡间野趣，吸引着前来观光的游客。如果在旅途中有幸遇到某位擅长肉类料理的大厨，或许还能体验到一段别样的惊喜。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200113/2020011311473147933.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            千风神殿
          </h1>
          <p>
            地处蒙德东北部的神殿遗址群。
            <br />
            据人们传言，千百年前这里曾是供奉古代风神的神庙，如今被漫长的时光侵蚀，只剩残存的建筑废墟。一些石质立柱上还依稀可辨认出曾经华丽雕刻的精妙曲线。
            <br />
            所纪念的象征早已被遗忘的石雕上雕刻着一句古老的格言，「风带来故事的种子，时间使之发芽。」
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200113/2020011311494677355.jpg"
              height="355"
              width="639"
            />
          </p>
        </happy-scroll>
      </div>
    </div>
    <!-- 璃月城市相关资讯 -->
    <div class="detail" v-if="liyue">
      <div class="detail__content">
        <p class="detail__title">璃月</p>
        <div class="detail__close" @click="detail_liyue"></div>
        <happy-scroll color="rgba(51,51,51,0.2)" size="4" class="detail__wrap">
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            港口
          </h1>
          <p>
            港口的建立为璃月的海上贸易打下了最初的基础。作为提瓦特大陆上最大的集贸港口，其货物吞吐量也绝非一般港口可比拟。
            <br />
            每年海灯节时，在港口处可以看到海上万千宵灯飞入夜幕，是到访璃月不可错过的奇景。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200319/2020031910400027780.png"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            天衡山
          </h1>
          <p>
            璃月港西边的山脉，也是抵御外敌的一道天然保护屏障。
            <br />
            有记载以来，作为璃月的壁垒经历了数不清的大小战争，因此也可以看到不少古城墙、堡垒和防御工事的遗迹。
            <br />
            传说中璃月人最早的采矿作业亦在此处进行。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200329/2020032917002825368.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            荻花洲
          </h1>
          <p>
            荻花洲得名于浅滩中大面积生长的荻花，是璃月北部的一处天然浅滩湿地。
            <br />
            水泽遍布、河网交错纵横，由多样的动植物群落组成了丰富的生态系统，也构成了来往旅客眼中绝佳的景观。
            <br />
            同时，荻花洲也是陆路从蒙德通往璃月的必经要道，因此时常有商队在此歇脚。建在河滩深处的望舒客栈是这里的标志性建筑。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200329/2020032917021529960.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            望舒客栈
          </h1>
          <p>
            荻花洲的地标，修建在一座巨大岩柱上的客栈。
            <br />
            来歇息的大多是途径此处的商贩，客栈也因此提供了直接贸易和摆摊的场所。高层位置视野极佳，天气晴朗时可以直接看到远处的轻策山和绝云间。
            <br />
            坊间有传说道，在高耸的客栈中，传承着某种神秘的使命。但传言止步于此，从未有人能证实它的真伪。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200329/2020032917031027049.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            轻策庄
          </h1>
          <p>
            坐落于璃月最北部，隐藏在山丘与竹林间的村落。
            <br />
            白云缭绕的山谷间点缀着鳞次栉比的半月形梯田，山风吹拂时可以看见一层层多彩的波浪。
            <br />
            在这个宛如世外桃源的地方，轻策庄的村民过着质朴而又充实的生活。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200329/2020032917035368656.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            绝云间
          </h1>
          <p>
            璃月西北部常年云雾缭绕、渺无人烟的峻岭。
            <br />
            山间有奇景，但由于地势复杂、山路陡峭而鲜有人迹，传闻中是守护璃月的仙人们的隐居之处。也因此受到部分求仙祈福之人的追捧。
            <br />
            鉴于其间的凶险不宜外人靠近，最好还是站在望舒客栈远观吧。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20200319/2020031918335144810.jpg"
              height="355"
              width="639"
            />
          </p>
        </happy-scroll>
      </div>
    </div>
    <!-- 稻妻城市相关资讯 -->
    <div class="detail" v-if="daoqi">
      <div class="detail__content">
        <p class="detail__title">稻妻</p>
        <div class="detail__close" @click="detail_daoqi"></div>
        <happy-scroll color="rgba(51,51,51,0.2)" size="4" class="detail__wrap">
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            离岛
          </h1>
          <p>
            在锁国令期间，若想真正踏上鸣神的领土，就必须先通过离岛这道关卡。
            <br />
            离岛由勘定奉行管辖，人们必须持有各类凭证才可出入此地，而这些凭证往往需要复杂的手续和一些特殊的关系才能办下。
            <br />
            如果不能顺利拿到凭证的话，就只能在离岛短暂驻足，与滞留此地的其他外人一起，略观红枫青瓦与萧条渔村的一景了。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917502898893.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            稻妻城
          </h1>
          <p>
            稻妻最为繁华热闹的城区，稻妻人大多居住生活在此。从花见坂到町街，可顺着地势一路向上，游览当地传统的老店，品尝稻妻特色的美食。
            <br />
            天领奉行府也位于城中，管理民众治安与幕府军备等事务。
            <br />
            在稻妻城至高之处，雷电将军高居天守，凌于众生之上。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917513797492.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            镇守之森
          </h1>
          <p>
            位于影向山下，静谧幽玄的森林。
            <br />
            随处可见的狸猫石像、隐于林间的错落鸟居、暗藏深处的遗落神龛…如同涓涓溪流，讲述着流淌在时光中的传说。
            <br />
            听说行走在镇守之森中，还能偶遇对人作怪的神秘生灵…
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917520876381.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            鸣神大社
          </h1>
          <p>
            稻妻最大的神社，位于影向山顶，供奉着御建鸣神主尊大御所大人。
            <br />
            心怀愿望的人，可以一步步脚踏实地地登上山顶；或者若是被雷元素垂怜，还可乘雷极一路向上，直达被巨大的神樱树所笼罩的神社。神樱常开不败，一如鸣神永恒。
            <br />
            穿过重重鸟居，找巫女求上一签，祈求鸣神的保佑吧。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917531190280.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            神无冢·踏鞴砂
          </h1>
          <p>
            传说中，「神无冢」意为「神不在的山丘」，直到现在也是幕府与珊瑚宫之间的争议之地。
            <br />
            神无冢地势险峻，岩壁高悬。在层岩叠嶂之中，坐落着稻妻最大的冶炼设施「御影炉心」，稻妻锻刀铸剑的特殊材料玉钢即产于此地。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917534678902.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            九条阵屋
          </h1>
          <p>
            幕府军营在神无冢的驻扎之处。
            <br />
            信仰雷电将军的鸣神子民，与信仰海祇大御神的珊瑚宫，双方之间存在着永远无法化解的矛盾。而这一矛盾，因眼狩令的施行更加激化。
            <br />
            为迎战珊瑚宫的叛军，天领奉行率幕府军驻扎于此。与珊瑚宫军相比，幕府军人员充足，军备精良，制式统一，似是胜券在握。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917542594823.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            无想刃狭间
          </h1>
          <p>
            八酝岛的东部，被一条狭长壮阔的裂谷笔直切断。
            <br />
            此番壮景并非自然天成，而是雷神斩落巨蛇魔神之时造就的奇观，因雷神武艺极致「无想的一刀」命名。
            <br />
            直至今日，巨蛇的遗骨仍存于八酝岛各处，因魔神残骸而起的「祟神」也依旧隐隐而动…
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917551685361.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            蛇神之首
          </h1>
          <p>
            被雷神「无想的一刀」斩杀的巨蛇魔神，现今只剩下枯白的遗骨。虽然仍在向天昂起不屈的头颅，但魔神已逝，「海祇大御神」的名号也不再响亮。
            <br />
            魔神即使死去也会留下强大的力量。受「祟神」的影响，八酝岛人迹罕至，只有风雨和降雷还在洗刷着历史的残骸。
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917553425149.jpg"
              height="355"
              width="639"
            />
          </p>
          <h1 style="border-bottom: solid 3px rgba(255, 255, 255, 0.1)">
            名椎滩
          </h1>
          <p>
            名椎滩位于八酝岛与神无冢之间，是战事密集之处。浅滩之上，除了偶然落下的堇鹮之外，遍布着残旗、断箭等战争的痕迹，与破败船帆、碎裂甲板等废弃海船的残骸。
            <br />
            因战乱的缘故，海贼与浪人常在此处游荡，甚至连罕见的血斛也妖冶盛开…
          </p>
          <p>
            <img
              src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917561567438.jpg"
              height="355"
              width="639"
            />
          </p>
        </happy-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
import BottomLnstructions from "@/components/BottomLnstructions.vue";
import { HappyScroll } from "vue-happy-scroll";
// 引入css，推荐将css放入main入口中引入一次即可。
import "vue-happy-scroll/docs/happy-scroll.css";
export default {
  components: {
    swiper,
    swiperSlide,
    BottomLnstructions,
    HappyScroll,
  },
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        mousewheel: true,
        progressbarOpposite: true,
        autoHeight: true,
        slidesPerView: "auto",
        speed: 900,
        scrollbar: {
          el: ".scrollbar",
          draggable: true,
          dragSize: 200,
        },
        hashNavigation: {
          watchState: true,
        },
      },
      reRender: true,
      mengde: false,
      liyue: false,
      daoqi: false,
    };
  },
  methods: {
    // swiper轮播图的bug解决方案，第一次加载时轮播图会不可滑动
    activated() {
      this.reRender = false;
      setTimeout(() => {
        this.reRender = true;
      }, 100);
    },
    updown() {
      this.swiper.slideNext();
    },
    // 点击开启关闭蒙德城市详情
    detail_mengde() {
      this.mengde = !this.mengde;
    },
    // 点击开启关闭璃月城市详情
    detail_liyue() {
      this.liyue = !this.liyue;
    },
    // 点击开启关闭稻妻城市详情
    detail_daoqi() {
      this.daoqi = !this.daoqi;
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // this.mySwiper.setTranslate(-10000);
    // this.mySwiper.updateSlides();
    // console.log("当前的swiper实例", this.$refs);
    this.activated();
  },
};
</script >

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.bigbox {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  box-sizing: border-box;
  .swiper-container {
    position: absolute;
    min-width: 1280px;
    position: absolute;
    width: 100%;
    height: auto;
    display: flex;
    .map {
      .home {
        width: 100%;
        .home__content {
          .home__town {
            background: url("~@/imge/map/游记.png") !important;
            width: 500px;
            height: 34px;
            background-size: cover;
            margin-top: 1vh;
            text-align: center;
            line-height: 34px;
            font-size: 18px;
          }
        }
      }
      .maphome {
        background-image: url("https://ys.mihoyo.com/main/_nuxt/img/5c125a1.png");
        width: 100%;
        height: 100vh;
      }
      .city {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-size: cover !important;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
        color: #fff;
        line-height: 28px;
      }
    }
  }
  .map {
    .home {
      background: url("~@/imge/map/提瓦特.png");
      background-size: cover !important;
      background-position: center;
      .home__tip {
        background: url("~@/imge/map/下拉背景.png");
        width: 52px;
        height: 52px;
        bottom: 8vh;
        position: absolute;
        left: 50%;
        margin-left: -26px;
        cursor: pointer;
        .home__tran {
          position: absolute;
          width: 25px;
          height: 13px;
          bottom: 0;
          left: 50%;
          margin-left: -12.5px;
          animation: updown 1.5s ease-in-out infinite;
        }
      }
      .home__tip::before {
        content: "";
        background: url("~@/imge/map/下拉背景动画.png") center;
        position: absolute;
        width: 54px;
        height: 54px;
        left: -1%;
        top: -1px;
        background-size: cover;
        animation: move 1s linear infinite;
      }
    }
    .mengde {
      background: url("https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921550320292.jpg");
    }
    .liyue {
      background: url("https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921552395638.jpg");
    }
    .daoqi {
      background: url("https://uploadstatic.mihoyo.com/contentweb/20210719/2021071918001232800.jpg");
    }
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .city {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      .city__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -20vh;
        .city__name {
          display: flex;
          flex-direction: column;
          align-items: center;
          .city__icon {
            width: 12vh;
          }
          h1 {
            font-weight: 400;
            font-size: 4.6vh;
            line-height: 9vh;
            color: #fff;
          }
          h1::before {
            position: absolute;
            right: 54%;
            content: "";
            background: url("~@/imge/map/城市修饰箭头.png") center no-repeat;
            width: 35.6vh;
            height: 1.3vh;
            top: 38%;
          }
          h1::after {
            position: absolute;
            left: 54%;
            content: "";
            background: url("~@/imge/map/城市修饰箭头.png") center no-repeat;
            width: 35.6vh;
            height: 1.3vh;
            top: 38%;
            transform: rotateY(166deg);
          }
          .city__desc {
            width: 608px;
            text-align: center;
            font-size: 14px;
            margin-top: 20px;
            line-height: 1.8;
            color: #fff;
          }
          .city__detail {
            position: relative;
            background: url("~@/imge/map/城市详情按钮.png") center no-repeat;
            width: 54px;
            height: 54px;
            background-size: 100% auto;
            top: 9vh;
            cursor: pointer;
            p {
              display: block;
              color: #fff;
              font-size: 14px;
              line-height: 31px;
              text-align: center;
              width: 56px;
              position: absolute;
              top: 6vh;
            }
          }
          .city__detail::after {
            position: absolute;
            left: 0;
            top: 0;
            content: "";
            background: url("~@/imge/map/蒙德下拉背景动画.png");
            width: 54px;
            height: 54px;
            animation: move 1s linear infinite;
            background-size: cover;
          }
        }
      }
    }
  }
  .detail {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(18, 18, 18, 0.75);
    padding-top: 106px;
    .detail__content {
      position: relative;
      width: 720px;
      height: 100%;
      margin: 0 auto;
      .detail__title {
        background: rgba(128, 128, 128, 0.1)
          url("~@/imge/map/城市详情标题栏.png") no-repeat left center/auto 100%;
        width: 616px;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
        color: #fff;
        padding-left: 24px;
      }
      .detail__close {
        background: rgba(128, 128, 128, 0.1)
          url("~@/imge/map/城市详情导航关闭按钮.png") no-repeat center;
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
    }
    .detail__wrap {
      position: relative;
      margin-top: 25px;
      padding-bottom: 30px;
      height: 770px;
      h1 {
        position: relative;
        font-weight: 400;
        font-size: 26px;
        line-height: 66px;
        height: 66px;
        width: 640px;
        color: #fff;
        margin-bottom: 20px;
        border-bottom: 3px solidrgba(255, 255, 255, 0.1);
      }
      h1::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 70px;
        height: 3px;
        background: #cca574;
      }
      p {
        color: #fff;
        font-size: 14px;
        line-height: 1.8;
        width: 640px;
        img {
          margin: 20px auto;
        }
      }
    }
  }
  @keyframes move {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      transform: scale(1.6);
      opacity: 0;
    }
  }
  @keyframes updown {
    0% {
      bottom: 6px;
    }
    50% {
      bottom: 13px;
    }
    100% {
      bottom: 6px;
    }
  }
}
</style>