<template>

    <form @submit.prevent>
        <table class="vedomost">
            <tr>

                <td style="background-color: yellow;">ФИО Студента</td>
                <td style="background-color: lightyellow;">№ зачетной книжки</td>
                <td style="background-color: lightyellow;">Оценка</td>
                <td style="background-color: lightyellow;">Фамилия преподавателя</td>

            </tr>

            <tr v-for="student in response.students" :key="student.name">
                <td style="background-color: lightyellow;">
<!--                    {{student.fullname}}-->
                    <input v-model="student.fullname">
                </td>
                <td>
                <input class="№zchetki" type="text" name="№zachetki"  placeholder="№ зачетки" v-model="student.number">
<!--                    <label>{{student.number}}</label>-->
                </td>
                <td><input class="mark" type="text" name="mark"  placeholder="Отметка" v-model="student.assessment"></td>
                <td>
<!--                    <input class="fio_prep" type="text" name="fio_prep"  placeholder="ФИО преподавателя" v-model="response.teacher">-->
                    <label>{{response.teacher}}</label>
                </td>

            </tr>

            <tr>
                <base-button @click="addUser" >Добавить студента</base-button>
            </tr>

        </table>

        <div class="save_vedomost">
            <button @click="save">Сохранить данные</button>
        </div>
    </form>

</template>

<script>
import store from "@/store/store";
import DocService from "@/services/DocService";
import BaseButton from "@/components/UI/base-button.vue";

export default {
    name: "VedomostPage",
    components: {BaseButton},
    computed:{
        store(){
            return store
        },

    },
    data(){
        return{

            user: store.state.auth.currentUser,
            response:{
                teacher: '',
                group: "ajsdklf",
                date: this.formatDate(new Date(Date.now())),
                students: []
            }
        }
    },
    methods:{
        formatDate(date){
            let month = date.getMonth() + 1
            if (month < 10) month = '0' + month

            return date.getDate() + "." + month + "." + date.getFullYear()
        },

        forceFileDownload(response, title) {
            console.log(title)
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', title)
            document.body.appendChild(link)
            link.click()
        },

        async save(){
            const res = await DocService.Create(this.response)
            this.forceFileDownload(res,'t.docx')
        },

        addUser(){
            this.response.students.push({})
        }
    },

    mounted() {
        this.response.teacher = this.user.family_name  + " " + this.user.given_name + " " + this.user.middle_name
        // this.group.forEach((student) =>{
        //     this.response.students.push({
        //         fullname: student.name,
        //         number: student.number,
        //     })
        // })
    }
}
</script>

<style scoped>
table{
    display: table;
    width: 100%;
}
input{
    height: 100%;
    width: 100%;
}
td{
    background-color: white;
}
label{
    width: 100%;
}
</style>