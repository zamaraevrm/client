import api from "@/api/api";

export default class DocService{
    static async Create(data){
        return await api.post("/doc/95b50f13-8ae2-47b8-9f9b-c4b2abcef89e", data,{responseType: 'blob'})
    }
}