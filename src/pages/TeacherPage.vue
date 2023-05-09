<template>
    <h3>{{ user.firstname + " " + user.surname + " " + user.patronymic }}   <br>     Преподаватель</h3>
    <div class="container">

        <div class="razdelteacher">
            <base-button>Электронные ведомости</base-button>
            <base-button>Выдача справок</base-button>
            <base-button>Вопрос-ответ</base-button>
            <base-button>Создать оповещение</base-button>
        </div>

    </div>
</template>

<script>
import {mapState} from "vuex";
import BaseButton from "@/components/UI/base-button.vue";

export default {
    name: "TeacherPage",
    components: {BaseButton},
    computed:{
        ...mapState({
            user: state => state.auth.currentUser
        }),

    },
}
</script>

<style scoped>

</style>