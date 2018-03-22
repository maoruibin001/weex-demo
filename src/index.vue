<template>
  <div class="wrapper">
    <!--<image :src="logo" class="logo" />-->
    <!--<text class="greeting">hello world222 , <text class="love">i love you</text> hello</text>-->
    <!--<Tmp></Tmp>-->
    <!--<Ind></Ind>-->
    <!--<List2></List2>-->
    <!--<Loading></Loading>-->
    <!--<router-view/>-->
    <!--<Slider></Slider>-->
    <!--<Switch></Switch>-->
    <!--<Water></Water>-->
    <Anim></Anim>
    <!--<Clip></Clip>-->
    <!--<Dom></Dom>-->
    <!--<Glob></Glob>-->
    <!--<Pick></Pick>-->
    <!--<Storage></Storage>-->
    <!--<Stream></Stream>-->
    <!--<Socket></Socket>-->
  </div>
</template>

<script>
//  import Tmp from './Tmp.vue';
//  import Ind from './components/indictors.vue'
import List2 from './components/List.vue';
import Loading from './components/Loading.vue';
import Slider from './components/Slider.vue';
import Switch from './components/Switch.vue';
import Water from './components/WaterFall.vue';
import Anim from './components/Animations.vue';
import Clip from './components/clip.vue';
import Dom from './components/Dom.vue';
import Glob from './components/GlobalEvent.vue';
import Pick from './components/Picker.vue';
import Storage from './components/Storage.vue';
import Stream from './components/Stream.vue';
import Socket from './components/Socket.vue';
export default {
  name: 'App',
  components: {
//      Tmp,
//      Ind,
//      List2,
//      Loading,
//      Slider,
//      Switch
//      Water
      Anim
//      Clip
//      Dom
//      Glob
//      Pick
//      Storage
//      Stream
//      Socket
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    font-size: .8em;
  }
</style>
