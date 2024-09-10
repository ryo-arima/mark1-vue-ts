import { createRouter, createWebHistory } from 'vue-router';
import TopPage from '@/pages/public/Top.vue';
import Signin from '@/pages/public/Signin.vue';
import Signup from '@/pages/public/Signup.vue';
import NotFound from '@/pages/public/NotFound.vue';
import Forbidden from '@/pages/public/Forbidden.vue';
import Unauthorized from '@/pages/public/Unauthorized.vue';
import EmailConfirmation from '@/pages/public/ConfirmedEmail.vue';

const routes = [
    { path: '/', component: TopPage },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
    { path: '/email-confirmation', component: EmailConfirmation },
    { path: '/forbidden', component: Forbidden },
    { path: '/unauthorized', component: Unauthorized },
    { path: '/:pathMatch(.*)*', component: NotFound } 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;