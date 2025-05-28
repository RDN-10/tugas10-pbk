import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import BarangList from '@/components/barang/BarangList.vue';
import LaporanStok from '@/components/laporan/Laporanstok.vue';
import PenggunaList from '@/components/pengguna/PenggunaList.vue';
import Profil from '@/components/Profil.vue';
import Logout from '@/components/Logout.vue';


const routes = [
  { path: '/', redirect: '/login' },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false },
  },

  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },

  {
    path: '/barang',
    name: 'Barang',
    component: BarangList,
    meta: { requiresAuth: true },
  },

  {
    path: '/laporan',
    name: 'Laporan',
    component: LaporanStok,
    meta: { requiresAuth: true },
  },

  {
    path: '/pengguna',
    name: 'PenggunaList',
    component: PenggunaList,
    meta: { requiresAuth: true },
  },

  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard global
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

  if (to.meta.requiresAuth && !isLoggedIn) {
    // Jika route butuh autentikasi tapi belum login, redirect ke login
    next({ name: 'Login' });
  } else if ((to.name === 'Login' || to.name === 'Logout') && isLoggedIn) {
    // Jika sudah login tapi ke halaman login/logout, redirect ke dashboard
    next({ name: 'Dashboard' });
  } else {
    next();
  }
});

export default router;
