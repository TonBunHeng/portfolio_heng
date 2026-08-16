import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ResumeView from '../views/ResumeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import WritingView from '../views/WritingView.vue';
import ArticleView from '../views/ArticleView.vue';
import StatsView from '../views/StatsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Ton Bunheng — Full-Stack Web Developer' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About | Ton Bunheng' }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: ResumeView,
    meta: { title: 'Resume | Ton Bunheng' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
    meta: { title: 'Projects | Ton Bunheng' }
  },
  {
    path: '/writing',
    name: 'Writing',
    component: WritingView,
    meta: { title: 'Writing | Ton Bunheng' }
  },
  {
    path: '/writing/:slug',
    name: 'Article',
    component: ArticleView,
    meta: { title: 'Article | Ton Bunheng' }
  },
  {
    path: '/stats',
    name: 'Stats',
    component: StatsView,
    meta: { title: 'Stats | Ton Bunheng' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact | Ton Bunheng' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  }
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
