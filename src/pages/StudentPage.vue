<template>
    <h3> {{user.family_name  + " " + user.given_name + " " + user.middle_name}} <br>Студент</h3>

    <div class="razdelstudent">

        <button @click="$router.push('/zachetka')">Электронная зачетка</button>
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