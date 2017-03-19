<template>
    <div class="bg">
        <div class="loginForm">
            <form>
                <p>userName : <input type="text" name="userName"></p>
                <p>passWord : <input type="text" name="passWord"></p>
                <router-link to="layouts"><p><button>Login</button></p></router-link>
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
.bg{
    position:absolute;
    height:100%;
    background:url(../assets/img/loginBg.jpg) 100%  no-repeat;
    background-size:cover;
    margin:0;
    padding:0;
    width:100%;
    color:#fff;
    .loginForm{
        width:94%;
        padding:50% 3%;
        p{text-align:center}
        input{
            width:4rem;
            height:0.7rem;
            padding:0.25rem;
            border:1px solid #1983B3;
            border-radius:0.2rem;
        }
        button{
            width:2rem;
            height:0.8rem;
            background:#fff;
            border-radius:0.2rem;
            border:0;
            color:#131639;
        }

    }
}

</style>
