<template>
  <div>
    <nav v-if="showNavbar" class="navbar">
      <router-link to="/dashboard">Home</router-link>
      <router-link to="/barang">Barang</router-link>
      <router-link to="/laporan">Laporan Stok</router-link>
      <router-link to="/pengguna">Pengguna</router-link>
      <router-link to="/profil">Profil</router-link>
      <button @click="logout" class="logout-button">Logout</button>
    </nav>

    <hr />
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'AppLayout',
  setup() {
    const route = useRoute();
    const router = useRouter();

    const showNavbar = computed(() => {
      return route.name !== 'Login';
    });

    function logout() {
      localStorage.removeItem('userLoggedIn');
      router.push({ name: 'Login' });
    }

    return { showNavbar, logout };
  },
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(to right, #00b4db, #0083b0);
  padding: 15px 20px;
  display: flex;
  gap: 20px;
  border-radius: 10px;
  margin: 20px;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 131, 176, 0.4);
}

.navbar a {
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 5px;
}

.navbar a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.navbar a.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
}

/* Style untuk tombol Logout */
.logout-button {
  background: transparent;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.logout-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}
</style>
