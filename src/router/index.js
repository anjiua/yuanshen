import VueRouter from "vue-router"
import map from "@/pages/Map"
import manga from "@/pages/Manga"
export default new VueRouter({
    routes:[
        {
            path:"/",
            component:()=>import("@/pages/Home")
        },
        {
            path:"/news",
            component:()=>import("@/pages/News")
        },
        {
            path:"/rloe",
            component:()=>import("@/pages/Rloe"),
            children:[
                {
                    path:"mondstadt",
                    component:()=>import("@/pages/Mondstadt")
                },
                {
                    path:"liyue",
                    component:()=>import("@/pages/Liyue")
                },
                {
                    path:"daoqi",
                    component:()=>import("@/pages/Daoqi")
                },

            ]
        },
        {
            path:"/map",
            component:map
        },
        {
            path:"/manga",
            component:manga
        },
        {
            path:"https://bbs.mihoyo.com/ys/",
        },
    ]
})