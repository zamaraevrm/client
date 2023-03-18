<template>
    <header class="header">
        <h1>Факультет геоинформатики и информационной безопасности</h1>
    </header>
    <div class="container">
        <div class="roles">
            <button>деканат</button>
            <button>студент</button>
            <button>преподаватель</button>
        </div>

        <h2>Логин</h2>

        <form @submit.prevent>
            <div class="login">
                <input
                    v-model="user.login"
                    type="text"
                    name="login"
                    size="40"
                    maxlength="70"
                />
            </div>

            <h2>Пароль</h2>

            <div class="pass">
                <input
                    v-model="user.password"
                    type="password"
                    name="password"
                    size="40"
                >
            </div><br>

            <div class="vhod">
                <button @click="loginUser(user)">войти</button>
            </div>
        </form>

    </div>
    <div class="esc">
        <!--		<a href="index.html"><img src="images/Rectangle 21.png"></a>-->
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            user:{
                login: "",
                password: ""
            },
        }
    },
    methods:{
        async loginUser(user){
            try {
                const response = await axios.post('/auth/login', user)
                console.log(response)
            }
            catch (e) {
                console.log(e)
            } 
        },
    },
    name: "login"
}
</script>

<style scoped>

</style>