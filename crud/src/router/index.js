import Home from "@/pages/index"
import AboutId from "@/pages/about-product"

const router = [
    {
        path: "/",
        name: "index",
        component: Home
    },
    {
        path: "/:id",
        name: "aboutProduct",
        component: AboutId
    }
]

export default router