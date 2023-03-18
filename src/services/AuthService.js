import api from "@/api/api";

export default class AuthService{
    static async login(login, password){
        return api.post("/auth/login",{login,password})
    }
}