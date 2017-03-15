<template>
    <div class="page">
         <div class="banner">
            <img src="../assets/img/logo.png">
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
        }
    }

    // routes = 
    // module.exports = Home;
</script>

<style lang="scss" scoped>
    *{margin:0;padding:0;}
    .page{
        background:#F1F8FF;
    }
</style>