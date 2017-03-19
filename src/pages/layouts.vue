<template>
  <div class="layouts">
   <router-view></router-view>
   <ps-nav/>
  </div>

</template>

<script>
  import psNav from '@/components/Nav';
  export default {
    name: "home",
    components: {
      psNav
    },
    data() {
      return {
        msg: "这是首页"
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import '../styles/mixins';
  .page {
    overflow: hidden;
    background: #F1F2F6;
  }

  .banner {
    height: 3.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .type_box1 {
    margin-top: 0.2rem;
    background: #fff;
    @include flexbox();
    li {
      width: 25%;
      padding: 5px 0;
      text-align: center;
    }
    .type_active {
      color: #ff6600;
      border-bottom: 3px solid #ff6600;
    }
  }

  .type_box2 {
    @include flexbox();
    @include flex-wrap(wrap);
    li {
      width: 25%;
      border: 0.01rem solid #ccc;
      background: #fff;
      img {
        width: 70%;
        margin: 0.3rem 15%;
      }
    }
  }

  .weekly_new {
    background: url(../assets/img/new_bg.jpg);
    text-align: center;
    padding: 0.15rem;
    ul {
    @include flex-wrap(wrap);
    @include flexbox();
      li {
        width: 50%;
        img {
          width: 95%;
        }
      }
    }
  }

  h3.box_title {
    margin: 0.3rem 0 0.1rem 0;
    text-align: center;
    img {
      width: 30%;
    }
  }

  .reco_box {
    text-align: center;
    font-size: 0.2rem;
  }

</style>
