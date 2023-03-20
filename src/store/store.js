import {createStore} from "vuex";
import {authModule} from "@/store/authModule";

const store = createStore({
    state:() =>({
    }),
    modules:{
        auth:authModule
    }
})

export default store