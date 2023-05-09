import AuthService from "@/services/AuthService";

export const authModule = {
    state: () =>({
        isAuth: true,
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
                commit('setIsAuth', true)
                const data = response.data
                commit('setCurrentUser', data.user)
                localStorage.setItem('token', data.accessToken)
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
                commit('setIsAuth', false)
            }
            catch (e) {
                console.log(e)
            }
        },
        async refresh(){
            try{
                const response = AuthService.refresh();
                localStorage.setItem('token', response.data.accessToken)
                commit('setIsAuth', true)
            }catch (e){
                console.log(e)
            }
        }
    },
    namespaced:true
}