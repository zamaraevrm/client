<template>
    <h3> {{user.firstname + " " + user.surname + " " + user.patronymic}} <br>     Студент</h3>

    <div class="container">

        <button>моя успеваемость</button>
        <button>справки</button>
        <button>статус справки</button>
        <button>заказать справку</button>

        <button>мои вопросы</button>
        <button>задолженности</button>
        <button>пересдачи </button>
        <button>споры</button>
        <button>расписание занятий </button>
        <button>расписание зачетов/экзаменов</button>
    </div>
</template>

<script>

import {mapState} from "vuex";

export default {
    data(){
        return{

        }
    },
    computed:{
      ...mapState({
          user: state => state.auth.currentUser
      }),

    },
    name: "StudentPage"
}
</script>

<style >

</style>