<template>
    <div class="profil-container">
      <h2>Profil Pengguna</h2>
      <img src="https://i.pravatar.cc/100" alt="Foto Profil" class="avatar" />
  
      <div class="info">
        <p><strong>Nama:</strong> Budi Santoso</p>
        <p><strong>Email:</strong> budi@example.com</p>
        <p><strong>Username:</strong> budi123</p>
        <p><strong>No. Telepon:</strong> 081234567890</p>
        <p><strong>Alamat:</strong> Jl. Merdeka No. 123, Jakarta</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Profil',
  };
  </script>
  
  <style scoped>
  .profil-container {
    max-width: 600px;
    margin: 40px auto;
    padding: 30px;
    background: linear-gradient(to right, #43cea2, #185a9d);
    border-radius: 15px;
    color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 3px solid #fff;
    margin-bottom: 15px;
  }
  
  .info {
    text-align: left;
    margin-top: 20px;
  }
  
  .info p {
    margin: 8px 0;
    font-size: 1.1rem;
  }
  </style>
  