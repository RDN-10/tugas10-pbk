<template>
    <div class="pengguna-list">
      <div class="header">
        <h2>Daftar Pengguna</h2>
        <p>Menampilkan semua pengguna sistem.</p>
      </div>
  
      <table class="tabel-pengguna">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Lengkap</th>
            <th>Email</th>
            <th>Peran</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pengguna, index) in penggunaList" :key="pengguna.id">
            <td>{{ index + 1 }}</td>
            <td>{{ pengguna.nama }}</td>
            <td>{{ pengguna.email }}</td>
            <td>{{ pengguna.peran }}</td>
            <td>
              <span :class="{'status-aktif': pengguna.status === 'Aktif', 'status-nonaktif': pengguna.status === 'Nonaktif'}">
                {{ pengguna.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PenggunaList',
    data() {
      return {
        penggunaList: [
          { id: 1, nama: 'Andi Setiawan', email: 'andi@example.com', peran: 'Admin', status: 'Aktif' },
          { id: 2, nama: 'Rina Marlina', email: 'rina@example.com', peran: 'User', status: 'Aktif' },
          { id: 3, nama: 'Budi Santoso', email: 'budi@example.com', peran: 'Moderator', status: 'Nonaktif' },
          { id: 4, nama: 'Siti Rahmawati', email: 'siti@example.com', peran: 'User', status: 'Aktif' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .pengguna-list {
    max-width: 900px;
    margin: 40px auto;
    background: #ffffff;
    border-radius: 12px;
    padding: 20px 30px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .header h2 {
    font-size: 28px;
    color: #2c3e50;
    margin-bottom: 8px;
  }
  
  .header p {
    font-size: 16px;
    color: #7f8c8d;
  }
  
  .tabel-pengguna {
    width: 100%;
    border-collapse: collapse;
  }
  
  .tabel-pengguna thead {
    background-color: #3498db;
    color: white;
  }
  
  .tabel-pengguna th,
  .tabel-pengguna td {
    padding: 14px 16px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .tabel-pengguna tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .tabel-pengguna tbody tr:hover {
    background-color: #eef7ff;
  }
  
  .status-aktif {
    color: #2ecc71;
    font-weight: bold;
  }
  
  .status-nonaktif {
    color: #e74c3c;
    font-weight: bold;
  }
  </style>
  