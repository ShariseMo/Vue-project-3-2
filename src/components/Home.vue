<template>
    <div class="page">
        <div class="banner">
            <img src="../assets/img/banner/banner01.png">    
        </div>
        <ul class="type_box1">
            <li class="type_active">最热</li>
            <li>类型</li>
            <li>空间</li>
            <li>风格</li>
            <div class="clear"></div>
        </ul>
        <ul class="type_box2"></ul>
    
    </div>
    <!-- <router-view></router-view> -->
</template>

<script>
   export default {
        name:"home",
        data(){
            return {
                msg:"这是首页"
            }
        },
        methods:{

        }
    }

</script>

<style lang="scss" scoped>
    .page{background:#F1F2F6;}
    .banner{
      height:3.5rem;
      img{width:100%;height:100%;}
    }
    .type_box1{
        margin-top:0.2rem;
        border-bottom:1px solid #eee;
        background:#fff;
        li{
            width:25%;
            padding:5px 0;
            float:left;
            text-align:center;
        }
        .type_active{
            color:#ff6600;
            border-bottom:3px solid #ff6600;
        }
    }
</style>