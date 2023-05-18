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
import SciencePage from "@/pages/SciencePage.vue";
import ReviewsPage from "@/pages/ReviewsPage.vue";
import ScienceProjectPage from "@/pages/ScienceProjectPage.vue";
import GeodaninftechPage from "@/pages/GeodaninftechPage.vue";
import VedomostPage from "@/pages/VedomostPage.vue";
import ZachetkaPage from "@/pages/ZachetkaPage.vue";
import SporPage from "@/pages/SporPage.vue";




const routes = [
    {
        path:"",
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
        path: "/teacher/vedomost",
        component: VedomostPage
    },
    {
        path:"/dekanat",
        component: DekanatPage,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: "/science",
        component: SciencePage,
    },
    {
        path:"/reviews",
        component: ReviewsPage,
    },
    {
        path:"/science-project",
        component: ScienceProjectPage,
    },
    {
        path: "/geodaninftech",
        component: GeodaninftechPage,
    },
    {
        path: "/zachetka",
        component: ZachetkaPage
    },
    {
        path: "/spor",
        component: SporPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {

    if(to.meta.requiresAuth) {

        if(store.getters["auth/checkAuth"]) {
            console.log("2")
            next()
        }
        else next({path:"/login"})
    }else    next()
})

export default router