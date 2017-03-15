<template>
    <div class="bg">
        <div class="loginForm">
            <form>
                <p>userName : <input type="text" name="userName"></p>
                <p>passWord : <input type="text" name="passWord"></p>
                <router-link to="nav"><p><button>Login</button></p></router-link>
            </form>
        </div>
    </div>
</template>

<script>
    var Login = {
        name:"login",
        data(){
            return {

            }
        },
        methods:{
            
        }
    };

    module.exports = Login;
</script>

<style scoped lang="scss">
    #app{
        margin:0;
        padding:0;
    }
    .bg{
        background:url(../assets/img/loginBg.jpg) 100%  no-repeat;
        background-size:cover;
        margin:0;
        padding:0;
        width:100%;
        font-size:16px;
        .loginForm{
            width:94%;
            padding:50% 3%;
            p{text-align:center}
        }
    }
</style>