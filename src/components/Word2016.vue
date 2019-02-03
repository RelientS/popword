<template>
  <div class="container">
   <swiper :options="swiperOption">
     <swiper-slide v-for="(item,index) in intros[num]" :key="index" class="slide">
       <img :src="item.src"><img class="intro_img" :src="item.src" @click="alert">
       <div class="intro_wd">{{ item.introduction }}</div>
     </swiper-slide>
   </swiper>
</div>
</template>

<script>
import * as swiperAni from '@/assets/js/swiper.animate.min.js'
export default {
  props:{
    num:{
      type:Number,
      required:true
    }
  },
  methods:{
   alert:function(){
       console.log(this.num)
   }
 },
  data () {
    return {

      i:1,
      intros:[//做成后端可修改的JSON
          [{"src":require("../assets/img/test1.jpg"),introduction:"这是2016年度词汇的介绍1"},
           {"src":require("../assets/img/test2.jpg"),introduction:"这是2016年度词汇的介绍2"},
           {"src":require("../assets/img/test3.jpg"),introduction:"这是2016年度词汇的介绍3"},
           {"src":require("../assets/img/test4.jpg"),introduction:"这是2016年度词汇的介绍4"},
           {"src":require("../assets/img/test5.jpg"),introduction:"这是2016年度词汇的介绍5"},
           {"src":require("../assets/img/test6.jpg"),introduction:"这是2016年度词汇的介绍6"}
         ],
         [{"src":require("../assets/img/test6.jpg"),introduction:"这是2017年度词汇的介绍1"},
          {"src":require("../assets/img/test5.jpg"),introduction:"这是2017年度词汇的介绍2"},
          {"src":require("../assets/img/test4.jpg"),introduction:"这是2017年度词汇的介绍3"},
          {"src":require("../assets/img/test3.jpg"),introduction:"这是2017年度词汇的介绍4"},
          {"src":require("../assets/img/test2.jpg"),introduction:"这是2017年度词汇的介绍5"},
          {"src":require("../assets/img/test1.jpg"),introduction:"这是2017年度词汇的介绍6"}
        ],
        [
          {"src":require("../assets/img/test1.jpg"),introduction:"这是2018年度词汇的介绍1"},
          {"src":require("../assets/img/test2.jpg"),introduction:"这是2018年度词汇的介绍2"},
          {"src":require("../assets/img/test3.jpg"),introduction:"这是2018年度词汇的介绍3"},
          {"src":require("../assets/img/test4.jpg"),introduction:"这是2018年度词汇的介绍4"},
          {"src":require("../assets/img/test5.jpg"),introduction:"这是2018年度词汇的介绍5"},
          {"src":require("../assets/img/test6.jpg"),introduction:"这是2018年度词汇的介绍6"}
        ],
        [
          {"src":require("../assets/img/test1.jpg"),introduction:"这是2019年度词汇的介绍1"},
          {"src":require("../assets/img/test2.jpg"),introduction:"这是2019年度词汇的介绍2"},
          {"src":require("../assets/img/test3.jpg"),introduction:"这是2019年度词汇的介绍3"},
          {"src":require("../assets/img/test4.jpg"),introduction:"这是2019年度词汇的介绍4"},
          {"src":require("../assets/img/test5.jpg"),introduction:"这是2019年度词汇的介绍5"},
          {"src":require("../assets/img/test6.jpg"),introduction:"这是2019年度词汇的介绍6"}
        ]
      ],
      swiperOption: {
          initialSlide: 0,
          direction: 'vertical',
          slidesPerView: 1,
          mousewheel: true,
          height: window.innerHeight,  // 高度设置，占满设备高度
          on: {
            init: function () {
              swiperAni.swiperAnimateCache(this)
              swiperAni.swiperAnimate(this)
            },
            slideChange: function () {
              swiperAni.swiperAnimate(this)
            }
          }
      },

    }
  }
}
</script>

<style lang="scss" scoped>
.slide{
  position: relative;
}
img{
  width: 100%;
  height: 100%;
}
.intro_wd{
  width: 30%;
  height: 30%;
  position: absolute;
  bottom: 10%;
  left: 10%;
  background: red;
  @media screen and (max-width: 600px){
    width: 100%;
    height: 15%;
    left: 0;
    bottom: 0;
  }
}
.intro_img{
  width: 40%;
  height: 40%;
  position: absolute;
  bottom: 30%;
  left: 50%;
  background: green;
  @media screen and (max-width: 600px){
    width: 100%;
    height: 50%;
    left: 0;
    bottom:30%;
  }
}
</style>
