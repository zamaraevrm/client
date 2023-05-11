<template>
    <div class="razdel">
        <button @click="$router.push('/info')">Информация о факультете</button>
        <button @click="$router.push('/contact')">Контакты</button>
        <button @click="$router.push('/international-active')">Международная деятельность</button>
        <button @click="$router.push('/raspisanie')">Расписание занятий</button>
        <button @click="$router.push('/science')">Наука</button>
        <button>список сотрудников</button>
    </div>

    <form @submit.prevent class="enter">
        <base-button @click="Enter">войти</base-button>
    </form>
</template>

<script>
import BaseButton from "@/components/UI/base-button.vue";
import store from "@/store/store";
import jwtDecode from "jwt-decode";

export default {
    name: "Main",
    components: {BaseButton},
    methods:{
        Enter(){
            // if(localStorage.getItem('token') !== null) {
            //     if (Object.keys(store.state.auth.currentUser).length === 0) {
            //         console.log("asdhjklf")
            //         const token = localStorage.getItem('token')
            //         store.state.auth.currentUser = jwtDecode(token)
            //     }
            //     this.$router.push('/' + store.state.auth.currentUser.role)
            // }else
            this.$router.push('/login')
        }
    },
}
</script>

<style scoped>

</style>