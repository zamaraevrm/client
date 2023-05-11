import AuthService from "@/services/AuthService";
import jwtDecode from "jwt-decode";


export const authModule = {
    state: () =>({
        isAuth: localStorage.getItem('token') !== null,
        currentUser: jwtDecode(localStorage.getItem('token'))
    }),
    getters:{

    },
    mutations:{
        setCurrentUser(state, value){
            state.currentUser = value
        },
        checkAuth(state) {
            state.isAuth = localStorage.getItem('token') !== null
        },
    },
    actions:{
        async loginUser({commit}, user){
            try {
                const response = await AuthService.login(user)

                const token = response.data
                const decode = jwtDecode(token)
                commit('setCurrentUser', decode)
                localStorage.setItem('token', token)
            }
            catch (e) {
                console.log(e)

            }
        },
        async logout({commit}){
            try {
                const response = await AuthService.logout()
                commit('setCurrentUser', {})
                localStorage.removeItem('token')
            }
            catch (e) {
                console.log(e)
            }
        },
        async refresh(){
            try{
                const response = AuthService.refresh();
                const token = response.data
                localStorage.setItem('token', token)
                const decode = jwtDecode(token)
                commit('setCurrentUser', decode)
            }catch (e){
                console.log(e)
            }
        }
    },
    namespaced:true
}