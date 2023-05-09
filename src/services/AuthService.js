import api from "@/api/api";

export default class AuthService{
    static async login(loginData){
        return await api.post("/auth/login",loginData)
    }

    static async logout(){
        return await api.delete("/auth/sign-out")
    }

    static async refresh(){
        return await api.put("/auth/refresh")
    }
}