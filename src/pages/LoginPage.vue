<template>

    <div class="container1" >
        <div class="razdel">
            <button @click="setRole(user,'dekanat')">деканат</button>
            <button @click="setRole(user,'student')">студент</button>
            <button @click="setRole(user,'teacher')">преподаватель</button>
        </div>



        <form @submit.prevent>
            <h2>Логин</h2>
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
                >
                    войти
                </button>
            </div>
        </form>

    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import store from "@/store/store";
import jwtDecode from "jwt-decode";


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
            const res = await this.login(user)
            if(store.state.auth.isAuth ) {

                this.$router.push('/' + user.role)
            }
        }
    },
    name: "login"
}
</script>

<style scoped>
.container1{
    padding: 0 60px;
    margin:  10px;
}

</style>