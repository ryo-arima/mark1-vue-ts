import { createRouter, createWebHistory } from 'vue-router';
import PublicTopPage from '@/pages/public/static/top.vue';
import PublicSignin from '@/pages/public/create/signin.vue';
import PublicSignup from '@/pages/public/create/signup.vue';
import PublicNotFound from '@/pages/public/static/notFound.vue';
import PublicForbidden from '@/pages/public/static/forbidden.vue';
import PublicUnauthorized from '@/pages/public/static/unauthorized.vue';
import PublicEmailConfirmation from '@/pages/public/common/confirmedEmail.vue';
import PublicBadRequest from '@/pages/public/static/badRequest.vue';
import InternalShowHome from '@/pages/internal/show/home.vue';
import InternalShowProfile from '@/pages/internal/show/profile.vue';
import InternalUpdateProfile from '@/pages/internal/update/profile.vue';
import InternalShowSetting from '@/pages/internal/show/setting.vue';
import InternalUpdateSetting from '@/pages/internal/update/setting.vue';
import InternalCreateGroup from '@/pages/internal/create/group.vue';
import InternalListGroup from '@/pages/internal/list/group.vue';
import InternalShowGroup from '@/pages/internal/show/group.vue';
import InternalUpdateGroup from '@/pages/internal/update/group.vue';
import InternalCreateMember from '@/pages/internal/create/member.vue';
import InternalListMember from '@/pages/internal/list/member.vue';
import InternalShowMember from '@/pages/internal/show/member.vue';
import InternalUpdateMember from '@/pages/internal/update/member.vue';
import InternalListUser from '@/pages/internal/list/user.vue';
import InternalShowUser from '@/pages/internal/show/user.vue';
import InternalUpdateUser from '@/pages/internal/update/user.vue';
import PrivateCreateUser from '@/pages/private/create/user.vue';
import PrivateListUser from '@/pages/private/list/user.vue';
import PrivateShowUser from '@/pages/private/show/user.vue';
import PrivateUpdateUser from '@/pages/private/update/user.vue';
import PrivateCreateGroup from '@/pages/private/create/group.vue';
import PrivateListGroup from '@/pages/private/list/group.vue';
import PrivateShowGroup from '@/pages/private/show/group.vue';
import PrivateUpdateGroup from '@/pages/private/update/group.vue';
import PrivateCreateMember from '@/pages/private/create/member.vue';
import PrivateListMember from '@/pages/private/list/member.vue';
import PrivateShowMember from '@/pages/private/show/member.vue';
import PrivateUpdateMember from '@/pages/private/update/member.vue';
import PrivateShowHome from '@/pages/private/show/home.vue';
import PrivateShowProfile from '@/pages/private/show/profile.vue';
import PrivateUpdateProfile from '@/pages/private/update/profile.vue';
import PrivateShowSetting from '@/pages/private/show/setting.vue';
import PrivateUpdateSetting from '@/pages/private/update/setting.vue';
import SuperPage from '@/pages/private/show/super.vue';

const routes = [
    { path: '/', component: PublicTopPage },
    { path: '/signin', component: PublicSignin },
    { path: '/signup', component: PublicSignup },
    { path: '/email-confirmation', component: PublicEmailConfirmation },
    { path: '/forbidden', component: PublicForbidden },
    { path: '/unauthorized', component: PublicUnauthorized },
    { path: '/bad-request', component: PublicBadRequest },
    { path: '/:pathMatch(.*)*', component: PublicNotFound },
    { path: '/internal/show/home', component: InternalShowHome },
    { path: '/internal/show/profile', component: InternalShowProfile },
    { path: '/internal/update/profile', component: InternalUpdateProfile },
    { path: '/internal/show/setting', component: InternalShowSetting },
    { path: '/internal/update/setting', component: InternalUpdateSetting },
    { path: '/internal/create/group', component: InternalCreateGroup },
    { path: '/internal/list/group', component: InternalListGroup },
    { path: '/internal/show/group', component: InternalShowGroup },
    { path: '/internal/update/group', component: InternalUpdateGroup },
    { path: '/internal/create/member', component: InternalCreateMember },
    { path: '/internal/list/member', component: InternalListMember },
    { path: '/internal/show/member', component: InternalShowMember },
    { path: '/internal/update/member', component: InternalUpdateMember },
    { path: '/internal/list/user', component: InternalListUser },
    { path: '/internal/show/user', component: InternalShowUser },
    { path: '/internal/update/user', component: InternalUpdateUser },
    { path: '/private/show/home', component: PrivateShowHome },
    { path: '/private/show/profile', component: PrivateShowProfile },
    { path: '/private/update/profile', component: PrivateUpdateProfile },
    { path: '/private/show/setting', component: PrivateShowSetting },
    { path: '/private/update/setting', component: PrivateUpdateSetting },
    { path: '/private/create/group', component: PrivateCreateGroup },
    { path: '/private/list/group', component: PrivateListGroup },
    { path: '/private/show/group', component: PrivateShowGroup },
    { path: '/private/update/group', component: PrivateUpdateGroup },
    { path: '/private/create/member', component: PrivateCreateMember },
    { path: '/private/list/member', component: PrivateListMember },
    { path: '/private/show/member', component: PrivateShowMember },
    { path: '/private/update/member', component: PrivateUpdateMember },
    { path: '/private/create/user', component: PrivateCreateUser },
    { path: '/private/list/user', component: PrivateListUser },
    { path: '/private/show/user', component: PrivateShowUser },
    { path: '/private/update/user', component: PrivateUpdateUser },
    { path: '/private/super', component: SuperPage },
];

export {routes};

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;