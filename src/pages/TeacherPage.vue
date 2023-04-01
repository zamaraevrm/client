<template>
    <h3>{{ user.firstname + " " + user.surname + " " + user.patronymic }}   <br>     Преподаватель</h3>
    <div class="container">

        <button>ведомости</button>
        <button>вопросы студентов</button>
        <button>справки</button>
        <button>документы</button>
        <button>заказать справку </button>
        <button>статус справки</button>

    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "TeacherPage",
    computed:{
        ...mapState({
            user: state => state.auth.currentUser
        }),

    },
}
</script>

<style scoped>

</style>