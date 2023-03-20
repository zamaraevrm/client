import axios from "axios";
import AuthService from "@/services/AuthService";
import login from "@/pages/LoginPage.vue";

export const authModule = {
    state: () =>({
        isAuth: false,
        currentUser: {}
    }),
    getters:{

    },
    mutations:{
        setIsAuth(state, value){
            state.isAuth = value
        },
        setCurrentUser(state, value){
            state.currentUser = value
        }
    },
    actions:{
        async loginUser({commit}, user){
            try {
                const response = await AuthService.login(user)
                commit('setIsAuth',true)
                const data = response.data
                commit('setCurrentUser',data.user)
                localStorage.setItem('token',data.accessToken)
                return true
            }
            catch (e) {
                console.log(e)
                return false
            }
        },
        async logout({commit}){
            try {
                const response = await AuthService.logout()
                commit('setCurrentUser', {})
                commit('setIsAuth',false)
            }
            catch (e) {
                console.log(e)
            }
        }
    },
    namespaced:true
}