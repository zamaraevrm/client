import {createStore} from "vuex";
import {authModule} from "@/store/authModule";

export default createStore({
    state:{

    },
    modules:{
        auth:authModule
    }
})