<template>
    <div class="barang-list-container">
      <h2>Daftar Barang</h2>
      <p>Menampilkan list semua barang inventaris.</p>
  
      <table class="barang-table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nama Barang</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in barang" :key="item.id">
            <td>
              <img :src="item.foto" :alt="item.nama" class="foto-barang" />
            </td>
            <td>{{ item.nama }}</td>
            <td>{{ item.kategori }}</td>
            <td>{{ item.stok }}</td>
            <td>{{ formatHarga(item.harga) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BarangList',
    data() {
      return {
        barang: [
          {
            id: 1,
            nama: "Konsol PS5",
            kategori: "Konsol",
            stok: 15,
            harga: 8500000,
            foto: "https://images.unsplash.com/photo-1618498082410-bd2cf5d1b19d?auto=format&fit=crop&w=100&q=80"
          },
          {
            id: 2,
            nama: "Headset Gaming Razer",
            kategori: "Aksesoris",
            stok: 30,
            harga: 1500000,
            foto: "https://images.unsplash.com/photo-1606813909022-2648e1cfb61e?auto=format&fit=crop&w=100&q=80"
          },
          {
            id: 3,
            nama: "Keyboard Mechanical",
            kategori: "Peripheral",
            stok: 20,
            harga: 1200000,
            foto: "https://images.unsplash.com/photo-1610465299993-9975a282a9b6?auto=format&fit=crop&w=100&q=80"
          },
        ]
      };
    },
    methods: {
      formatHarga(value) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
      }
    }
  };
  </script>
  
  <style scoped>
  .barang-list-container {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    background: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }
  
  h2 {
    text-align: center;
    color: #2575fc;
    margin-bottom: 5px;
  }
  
  p {
    text-align: center;
    margin-bottom: 25px;
    color: #555;
  }
  
  .barang-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }
  
  .barang-table thead {
    background: #2575fc;
    color: white;
  }
  
  .barang-table th, .barang-table td {
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
    vertical-align: middle;
  }
  
  .foto-barang {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(37, 117, 252, 0.2);
  }
  
  .barang-table tbody tr:hover {
    background-color: #e8f0fe;
    cursor: pointer;
  }
  
  @media (max-width: 600px) {
    .barang-list-container {
      padding: 10px;
    }
    .barang-table th, .barang-table td {
      padding: 8px 10px;
    }
    .foto-barang {
      width: 60px;
      height: 45px;
    }
  }
  </style>
  