import Home from '~/components/frontend/Home.js'
import About from '~/components/frontend/About.js'
import Tour from '~/components/frontend/Tour.js'
import Hotel from '~/components/frontend/Hotels'

const routes = [
    {path: '/', exact : true, name: "Home", component: Home},
    {path: '/about', exact : true, name: "About", component: About},
    {path: '/tour', exact : true, name: "About", component: Tour},
    {path: '/hotels/*', exact : true, name: "Cities", component: Hotel},
]
export default routes