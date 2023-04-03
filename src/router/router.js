import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import StudentPage from "@/pages/StudentPage.vue";
import TeacherPage from "@/pages/TeacherPage.vue";
import DekanatPage from "@/pages/DekanatPage.vue";
import store from "@/store/store";
import InfoAboutFaculty from "@/pages/InfoAboutFaculty.vue";
import ContactPage from "@/pages/ContactPage.vue";
import internationalActive from "@/pages/InternationalActive.vue";
import Ads from "@/pages/Ads.vue";
import Raspisanie from "@/pages/Raspisanie.vue";
import SostavFaculty from "@/pages/SostavFaculty.vue";
import Specnapr from "@/pages/Specnapr.vue";



const routes = [
    {
        path:"/",
        component: Main,

    },
    {
        path: "/login",
        component: LoginPage,

    },
    {
        path:"/info",
        component: InfoAboutFaculty,
    },
    {
        path: "/contact",
        component: ContactPage
    },
    {
        path: "/international-active",
        component: internationalActive
    },
    {
        path: "/ads",
        component: Ads,
    },
    {
        path: "/raspisanie",
        component: Raspisanie
    },
    {
        path: "/sostav-faculty",
        component: SostavFaculty
    },
    {
        path: "/specnapr",
        component: Specnapr
    },
    {
        path: "/student",
        component: StudentPage,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: "/teacher",
        component: TeacherPage,
        meta:{
            requiresAuth: true
        }
    },
    {
        path:"/dekanat",
        component: DekanatPage,
        meta:{
            requiresAuth: true
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {

    if(to.meta.requiresAuth) {
        if(store.state.auth.isAuth && (('/' + store.state.auth.currentUser.role) === to.path))
            next()
        else next({path:"/login"})
    }
    next()
})

export default router