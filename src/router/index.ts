import { createRouter, createWebHistory } from 'vue-router';
import PublicTopPage from '@/pages/public/Top.vue';
import PublicSignin from '@/pages/public/Signin.vue';
import PublicSignup from '@/pages/public/Signup.vue';
import PublicNotFound from '@/pages/public/NotFound.vue';
import PublicForbidden from '@/pages/public/Forbidden.vue';
import PublicUnauthorized from '@/pages/public/Unauthorized.vue';
import PublicEmailConfirmation from '@/pages/public/ConfirmedEmail.vue';
import PublicBadRequest from '@/pages/public/BadRequest.vue';
import InternalShowHome from '@/pages/internal/base/home/Show.vue';
import InternalShowProfile from '@/pages/internal/base/profile/Show.vue';
import InternalUpdateProfile from '@/pages/internal/base/profile/Update.vue';
import InternalShowSetting from '@/pages/internal/base/setting/Show.vue';
import InternalUpdateSetting from '@/pages/internal/base/setting/Update.vue';
import InternalCreateGroup from '@/pages/internal/group/Create.vue';
import InternalListGroup from '@/pages/internal/group/List.vue';
import InternalShowGroup from '@/pages/internal/group/Show.vue';
import InternalUpdateGroup from '@/pages/internal/group/Update.vue';
import InternalCreateMember from '@/pages/internal/member/Create.vue';
import InternalListMember from '@/pages/internal/member/List.vue';
import InternalShowMember from '@/pages/internal/member/Show.vue';
import InternalUpdateMember from '@/pages/internal/member/Update.vue';
import InternalListUser from '@/pages/internal/user/List.vue';
import InternalShowUser from '@/pages/internal/user/Show.vue';
import InternalUpdateUser from '@/pages/internal/user/Update.vue';
import PrivateCreateUser from '@/pages/private/user/Create.vue';
import PrivateListUser from '@/pages/private/user/List.vue';
import PrivateShowUser from '@/pages/private/user/Show.vue';
import PrivateUpdateUser from '@/pages/private/user/Update.vue';
import PrivateCreateGroup from '@/pages/private/group/Create.vue';
import PrivateListGroup from '@/pages/private/group/List.vue';
import PrivateShowGroup from '@/pages/private/group/Show.vue';
import PrivateUpdateGroup from '@/pages/private/group/Update.vue';
import PrivateCreateMember from '@/pages/private/member/Create.vue';
import PrivateListMember from '@/pages/private/member/List.vue';
import PrivateShowMember from '@/pages/private/member/Show.vue';
import PrivateUpdateMember from '@/pages/private/member/Update.vue';
import PrivateShowHome from '@/pages/private/base/home/Show.vue';
import PrivateShowProfile from '@/pages/private/base/profile/Show.vue';
import PrivateUpdateProfile from '@/pages/private/base/profile/Update.vue';
import PrivateShowSetting from '@/pages/private/base/setting/Show.vue';
import PrivateUpdateSetting from '@/pages/private/base/setting/Update.vue';
import SuperPage from '@/pages/private/base/home/Super.vue';

const routes = [
    { path: '/', component: PublicTopPage },
    { path: '/signin', component: PublicSignin },
    { path: '/signup', component: PublicSignup },
    { path: '/email-confirmation', component: PublicEmailConfirmation },
    { path: '/forbidden', component: PublicForbidden },
    { path: '/unauthorized', component: PublicUnauthorized },
    { path: '/bad-request', component: PublicBadRequest },
    { path: '/:pathMatch(.*)*', component: PublicNotFound },
    { path: '/internal/base/show/home', component: InternalShowHome },
    { path: '/internal/base/show/profile', component: InternalShowProfile },
    { path: '/internal/base/update/profile', component: InternalUpdateProfile },
    { path: '/internal/base/show/setting', component: InternalShowSetting },
    { path: '/internal/base/update/setting', component: InternalUpdateSetting },
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
    { path: '/private/base/show/home', component: PrivateShowHome },
    { path: '/private/base/show/profile', component: PrivateShowProfile },
    { path: '/private/base/update/profile', component: PrivateUpdateProfile },
    { path: '/private/base/show/setting', component: PrivateShowSetting },
    { path: '/private/base/update/setting', component: PrivateUpdateSetting },
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