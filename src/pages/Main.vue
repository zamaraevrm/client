<template>
    <div class="container">
        <button @click="$router.push('/info')">информация о факультете</button>
        <button @click="$router.push('/contact')">контакты</button>
        <button @click="$router.push('/international-active')">международная деятельность</button>
        <button @click="$router.push('/raspisanie')">расписание занятий</button>
        <button >список сотрудников</button>
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