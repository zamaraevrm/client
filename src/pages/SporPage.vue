<template>
    <label class="text-field__label" for="spor">Причина спора</label>
    <form class="text-field">
        <textarea class="text-field__input"
                  type="text"
                  name="spor"
                  id="prichina spora"
                  placeholder="Укажите причину спора"
        >
        </textarea>
        <br><br>
        <div class="sporstud">
            <button>Отправить заявку</button>
        </div>
    </form>
</template>

<script>
export default {
    name: "SporPage"
}
</script>

<style scoped>

</style>