<template>
    <div class="nav_bottom">
        <ul>
            <li><router-link to="home"><img src="../assets/img/icon/home.png"></router-link></li>
            <li><img src="../assets/img/icon/camp.png"></li>
            <li><img src="../assets/img/icon/pic.png"></li>
            <li><img src="../assets/img/icon/account.png"></li>
        </ul>
    </div>
</template>

<script>
    var Nav = {
        name:"nav",
        data:function(){
            return {
                
            }
        },
    };

    module.exports = Nav;
</script>

<style lang="scss" scoped>
    *{margin:0;padding:0;box-sizing:border-box;}
    li{
        list-style-type: none;
    }
    .nav_bottom{
        position:fixed;
        bottom:0;
        width:100%;

        height:50px;
        background:#fff;
        ul{margin-left:-10px;}
        li{
            float:left;
            width:25%;
            padding:5px 0;
            text-align:center;
            border-right:1px solid #fff;
            background:#eee;
            img{
                width:45%; 
            }
        }
        li:last-child{border:0;}
    }
</style>