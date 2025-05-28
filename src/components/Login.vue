<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label>Username:</label>
          <input v-model="username" type="text" required />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input v-model="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
    login() {
      // Contoh validasi sederhana: kalau username dan password tidak kosong
      if (this.username && this.password) {
        // Simpan status login ke localStorage
        localStorage.setItem('userLoggedIn', 'true');
  
        // Optional: alert sukses login
        alert(`Login berhasil dengan username: ${this.username}`);
  
        // Redirect ke dashboard
        this.$router.push('/dashboard');
      } else {
        alert('Username dan password harus diisi!');
      }
    },
  },
  
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 60px auto;
    padding: 30px;
    background: linear-gradient(to right, #00b4db, #0083b0);
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  button {
    margin-top: 10px;
    padding: 12px;
    background-color: #00c853;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #00a643;
  }
  </style>
  