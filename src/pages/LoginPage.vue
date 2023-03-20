<template>

    <div class="container">
        <div class="roles">
            <button @click="setRole(user,'dekanat')">деканат</button>
            <button @click="setRole(user,'student')">студент</button>
            <button @click="setRole(user,'teacher')">преподаватель</button>
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
                <button
                    @click="loginUser(user)"
                >войти</button>
            </div>
        </form>

    </div>
    <div class="esc">
        <!--		<a href="index.html"><img src="images/Rectangle 21.png"></a>-->
    </div>
</template>

<script>
import {mapActions} from "vuex";
import store from "@/store/store";


export default {
    computed: {
        store() {
            return store
        }
    },
    data(){
        return{
            user:{
                login: "",
                password: "",
                role:""
            },
        }
    },
    methods:{
        ...mapActions({
           login: "auth/loginUser"
        }),
        setRole(user, role){
            user.role = role
        },
        async loginUser(user){
            await this.login(user)
            if(store.state.auth.isAuth)
                this.$router.push('/' + user.role)
        }
    },
    name: "login"
}
</script>

<style scoped>

</style>