<template>
    <h3>{{user.family_name  + " " + user.given_name + " " + user.middle_name}}</h3>
    <h3>сотрудник деканата</h3>

    <div class="razdeldekanat">
        <base-button>Электронные ведомости</base-button>
        <base-button>Выдача справок</base-button>
        <base-button>Вопрос-ответ</base-button>
        <base-button>Создать оповещение</base-button>
    </div>
</template>

<script>
import {mapState} from "vuex";
import BaseButton from "@/components/UI/base-button.vue";

export default {
    name: "DekanatPage",
    components: {BaseButton},
    computed:{
        ...mapState({
            user: state => state.auth.currentUser
        }),
        // title(){
        //     return user.firstname + " " + user.surname + " " + user.patronymic
        // }
    },
}
</script>

<style scoped>

</style>