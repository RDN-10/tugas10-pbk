<template>
    <div class="logout-container">
      <div class="logout-box">
        <p>Logging out...</p>
        <div class="loader"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Logout',
    mounted() {
      // Hapus status login
      localStorage.removeItem('userLoggedIn');
  
      // Redirect ke halaman login setelah delay singkat supaya loader terlihat
      setTimeout(() => {
        this.$router.push({ name: 'Login' });
      }, 1000);
    }
  };
  </script>
  
  <style scoped>
  .logout-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #00b4db, #0083b0);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .logout-box {
    background: white;
    padding: 30px 40px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 131, 176, 0.4);
    text-align: center;
    color: #0083b0;
    font-weight: 600;
    font-size: 1.3rem;
    width: 250px;
    user-select: none;
  }
  
  /* Loader animasi sederhana */
  .loader {
    margin: 20px auto 0;
    width: 40px;
    height: 40px;
    border: 5px solid #00b4db;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  </style>
  