<template>
    <div class="razdel">
        <button @click="$router.push('/info')">Информация о факультете</button>
        <button @click="$router.push('/contact')">Контакты</button>
        <button @click="$router.push('/international-active')">Международная деятельность</button>
        <button @click="$router.push('/raspisanie')">Расписание занятий</button>
        <button>Наука</button>
        <button>список сотрудников</button>
    </div>

    <form @submit.prevent class="enter">
        <base-button @click="$router.push('/login')">войти</base-button>
    </form>
</template>

<script>
import BaseButton from "@/components/UI/base-button.vue";

export default {
    name: "Main",
    components: {BaseButton}
}
</script>

<style scoped>

</style>