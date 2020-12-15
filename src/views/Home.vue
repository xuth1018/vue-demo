<template>
  <div class="swiper">
    <van-swipe :autoplay="5000" :loop="true" indicator-color="#fff">
      <van-swipe-item v-for="(image, index) in swiperImg" :key="index">
        <img :src="image">
      </van-swipe-item>
    </van-swipe>
  </div>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import service from '../utils/http'

  export default {
    name: 'Home',
    data () {
      return {
        active: 2,
        swiperImg: [
                 ]
      }
    },
    created () {
      console.log('123')
      let data = {
        empNo: '437635E90CA4A258DC4F91F3E35ABFE6',
        empName: '',
        branchNo: '00000000000023',
        appCode: 'index',
        channel: 'U13'
      }
      service.post('/display/api/carouselFigure/index',data)
        .then(res => {
          if (res.data && res.data.ret) {
            let that = this
            res.data.ret.forEach(ret => {
              that.swiperImg.push(ret.imgUrl)
            })
          }
          console.log(this.swiperImg)
        })
        .catch(err => {
          console.log(err)
        })
    }

  }
</script>

<style scoped>
  .swiper {
    width: 100%;
    height: 12.4rem;
  }

  .van-swipe {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: #fff;
  }
</style>
