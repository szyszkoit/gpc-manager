import SignUp from "@/views/SignUp.vue";
import EditUser from "@/views/EditUser.vue";
import Login from "@/views/Login.vue";
import Home from '@/views/Home.vue';

const routes = [
    {
        path: "/sign-up",
        name: "sign-up",
        component: SignUp
    },
    {
        path: "/edit-user",
        name: "edit-user",
        component: EditUser
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/on-the-road',
        name: 'OnTheRoad',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/OnTheRoad.vue'),
    },
    {
      path: '/history',
      name: 'History',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/History.vue'),
    },
  ];

  export default routes;