import axios from "axios";
import AuthService from "@/services/AuthService";
import login from "@/pages/login.vue";

export const authModule = {
    state: () =>({
        isAuth: false,
        currentUser: {}
    }),
    getters:{

    },
    mutations:{

    },
    actions:{
        async loginUser({commit}, user){
            console.log(user.login)
            console.log(user.password)
            try {
                const response = await AuthService.login(user.login, user.password)
                console.log(response)
            }
            catch (e) {
                console.log(e)
            }
        },
    },
    namespaced:true
}