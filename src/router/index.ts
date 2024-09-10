import { createRouter, createWebHistory } from 'vue-router';
import PublicTopPage from '@/pages/public/Top.vue';
import PublicSignin from '@/pages/public/Signin.vue';
import PublicSignup from '@/pages/public/Signup.vue';
import PublicNotFound from '@/pages/public/NotFound.vue';
import PublicForbidden from '@/pages/public/Forbidden.vue';
import PublicUnauthorized from '@/pages/public/Unauthorized.vue';
import PublicEmailConfirmation from '@/pages/public/ConfirmedEmail.vue';
import PublicBadRequest from '@/pages/public/BadRequest.vue';
import PublicConfirmedEmail from '@/pages/public/ConfirmedEmail.vue';
import PublicSentEmail from '@/pages/public/SentEmail.vue';
import InternalShowHome from '@/pages/internal/base/home/Show.vue';
import InternalUpdateHome from '@/pages/internal/base/home/Update.vue';
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
import PrivateUpdateHome from '@/pages/private/base/home/Update.vue';
import PrivateShowProfile from '@/pages/private/base/profile/Show.vue';
import PrivateUpdateProfile from '@/pages/private/base/profile/Update.vue';
import PrivateShowSetting from '@/pages/private/base/setting/Show.vue';
import PrivateUpdateSetting from '@/pages/private/base/setting/Update.vue';



const routes = [
    { path: '/', component: TopPage },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
    { path: '/email-confirmation', component: EmailConfirmation },
    { path: '/forbidden', component: Forbidden },
    { path: '/unauthorized', component: Unauthorized },
    { path: '/:pathMatch(.*)*', component: NotFound },
    { path: '/internal/base/home/show', component: ShowHome },
    { path: '/internal/base/home/update', component: UpdateHome },
    { path: '/internal/base/profile/show', component: ShowProfile },
    { path: '/internal/base/profile/update', component: UpdateProfile },
    { path: '/internal/base/setting/show', component: ShowSetting },
    { path: '/internal/base/setting/update', component: UpdateSetting },
    { path: '/internal/group/create', component: CreateGroup },
    { path: '/internal/group/list', component: ListGroup },
    { path: '/internal/group/show', component: ShowGroup },
    { path: '/internal/group/update', component: UpdateGroup },
    { path: '/internal/member/create', component: CreateMember },
    { path: '/internal/member/list', component: ListMember },
    { path: '/internal/member/show', component: ShowMember },
    { path: '/internal/member/update', component: UpdateMember },
    { path: '/internal/user/list', component: ListUser },
    { path: '/internal/user/show', component: ShowUser },
    { path: '/internal/user/update', component: UpdateUser },
    { path: '/private/base/home/show', component: ShowHome },
    { path: '/private/base/home/update', component: UpdateHome },
    { path: '/private/base/profile/show', component: ShowProfile },
    { path: '/private/base/profile/update', component: UpdateProfile },
    { path: '/private/base/setting/show', component: ShowSetting },
    { path: '/private/base/setting/update', component: UpdateSetting },
    { path: '/private/group/create', component: CreateGroup },
    { path: '/private/group/list', component: ListGroup },
    { path: '/private/group/show', component: ShowGroup },
    { path: '/private/group/update', component: UpdateGroup },
    { path: '/private/member/create', component: CreateMember },
    { path: '/private/member/list', component: ListMember },
    { path: '/private/member/show', component: ShowMember },
    { path: '/private/member/update', component: UpdateMember },
    { path: '/private/user/create', component: CreateUser },
    { path: '/private/user/list', component: ListUser },
    { path: '/private/user/show', component: ShowUser },
    { path: '/private/user/update', component: UpdateUser },
    { path: '/public/bad-request', component: BadRequest },
    { path: '/public/confirmed-email', component: ConfirmedEmail },
    { path: '/public/forbidden', component: Forbidden },
    { path: '/public/not-found', component: NotFound },
    { path: '/public/sent-email', component: SentEmail },
    { path: '/public/signin', component: Signin },
    { path: '/public/signup', component: Signup },
    { path: '/public/top', component: Top },
    { path: '/public/unauthorized', component: Unauthorized },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;