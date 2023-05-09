<template>
    <h3> {{user.firstname + " " + user.surname + " " + user.patronymic}} <br>     Студент</h3>

    <div class="razdelstudent">

        <button>Электронная зачетка</button>
        <button>Выдача справок</button>
        <button>Вопрос-ответ</button>
        <button>Академический отпуск</button>
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