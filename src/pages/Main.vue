<template>
    <div class="container">
        <button>информация о факультете</button>
        <button>контакты</button>
        <button>международная деятельность</button>
        <button>расписание занятий</button>
        <button>список сотрудников</button>
    </div>

    <form @submit.prevent class="enter">
        <base-button @click="$router.push('/login')">войти</base-button>
    </form>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
    name: "Main",
    components: {BaseButton}
}
</script>

<style scoped>

</style>