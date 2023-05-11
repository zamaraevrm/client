<template>
    <div class="wrapper">
        <div class="list">
            <ul>
                <li ></li>
            </ul>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: "VedomostPage",
    data(){
        return{
            listGroups:[]
        }
    }
}
</script>

<style scoped>
.wrapper{

    display: grid;
    grid-template-columns: 1fr 3fr;
}
.list{
    padding: 0.5rem;
    background-color: #7d7d7d;
    min-height: 100vh;
}
</style>