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
        <ul class="type_box2">
            <li><img src="../assets/img/lamp01.png"></li>
            <li><img src="../assets/img/lamp01.png"></li>
            <li><img src="../assets/img/lamp01.png"></li>
            <li><img src="../assets/img/lamp01.png"></li>
            <li><img src="../assets/img/lamp01.png"></li>
            <li><img src="../assets/img/lamp01.png"></li>
            <li><img src="../assets/img/lamp01.png"></li>
            <li><img src="../assets/img/lamp01.png"></li>
            <div class="clear"></div>
        </ul>
        <div class="weekly_new">
            <h3><img src="../assets/img/new_title.jpg"></h3>
            <ul>
                <li><img src="../assets/img/new_img1.jpg" alt=""></li>
                <li><img src="../assets/img/new_img1.jpg" alt=""></li>
                <li><img src="../assets/img/new_img1.jpg" alt=""></li>
                <li><img src="../assets/img/new_img1.jpg" alt=""></li>
                <div class="clear"></div>
            </ul>
        </div>
        <div class="hot_style">
            <h3 class="box_title"><img src="../assets/img/hot_style.jpg"></h3>
            <ul>
                <li><img src="../assets/img/style01.png" alt=""></li>
                <li><img src="../assets/img/style02.png" alt=""></li>
                <li><img src="../assets/img/style03.png" alt=""></li>
            </ul>
        </div>
        <div class="reco_box">
            <h3 class="box_title"><img src="../assets/img/recommand.jpg"></h3>
            <ul class="pro_list">
                <li class="pro_item">
                    <span><img src="../assets/img/lamp01.png"></span>
                    <p class="pro_name">奥萨美式风格吊灯</p>
                    <p class="price_sale">零售价：199.00元</p>
                    <p class="price_discount">优惠价：188.00元</p>
                </li>
                <li class="pro_item">
                    <span><img src="../assets/img/lamp02.png"></span>
                    <p class="pro_name">奥萨美式风格吊灯</p>
                    <p class="price_sale">零售价：199.00元</p>
                    <p class="price_discount">优惠价：188.00元</p>
                </li>
                <li class="pro_item">
                    <span><img src="../assets/img/lamp03.png"></span>
                    <p class="pro_name">奥萨美式风格吊灯</p>
                    <p class="price_sale">零售价：199.00元</p>
                    <p class="price_discount">优惠价：188.00元</p>
                </li>
                <li class="pro_item">
                    <span><img src="../assets/img/lamp02.png"></span>
                    <p class="pro_name">奥萨美式风格吊灯</p>
                    <p class="price_sale">零售价：199.00元</p>
                    <p class="price_discount">优惠价：188.00元</p>
                </li>
                <li class="pro_item">
                    <span><img src="../assets/img/lamp02.png"></span>
                    <p class="pro_name">奥萨美式风格吊灯</p>
                    <p class="price_sale">零售价：199.00元</p>
                    <p class="price_discount">优惠价：188.00元</p>
                </li>
            </ul>
        </div>
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
@import '../styles/mixins';

    .page{overflow:hidden;background:#F1F2F6;}
    .banner{
      height:3.5rem;
      img{width:100%;height:100%;}
    }
    .type_box1{
        margin-top:0.2rem;
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
    .type_box2{
        li{
            float:left;
            width:25%;
            border:0.01rem solid #ccc;
            background:#fff;
            img{width:70%;margin:0.3rem 15%;}
        }
    }
    .weekly_new{
        background:url(../assets/img/new_bg.jpg);
        text-align:center;
        padding:0.15rem;
        li{
            float:left;
            width:50%;
            img{width:95%;}
        }
    }

    h3.box_title{
        margin:0.3rem 0 0.1rem 0;
        text-align:center;
        img{width:30%;}
    }
    .reco_box{
        text-align:center;
        font-size:0.2rem;
    }

</style>
