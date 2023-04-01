<template>
    <h3>{{ user.firstname + " " + user.surname + " " + user.patronymic }}</h3>
    <h3>сотрудник деканата</h3>

    <div class="container">
        <button>список должников</button>
        <button>студенты,находящиеся в академическом отпуске</button>
        <button>преподаватели</button>
        <button>споры</button>
        <button>приемная комиссия </button>
        <button>заказанные справки</button>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "DekanatPage",
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