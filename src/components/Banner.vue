<template>
    <div class="banner">{{msg}}
        <mt-swipe>
            <mt-swipe-item>
                
            </mt-swipe-item>
        </mt-swipe>
        <router-link to="/home">home</router-link>
    </div>
</template>

<script>
    var Banner = {
        name:"banner",
        data(){
            return {
                msg: 'fdgdgdgd'
            }
        }
    }

    module.exports = Banner;
</script>