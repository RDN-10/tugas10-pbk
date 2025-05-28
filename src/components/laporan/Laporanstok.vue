<template>
    <div class="laporan-stok">
      <div class="header">
        <h2>Laporan Stok Barang</h2>
        <p>Menampilkan laporan stok terkini.</p>
      </div>
  
      <table class="stok-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Kategori</th>
            <th>Jumlah</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in stokBarang" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.nama }}</td>
            <td>{{ item.kategori }}</td>
            <td>{{ item.jumlah }}</td>
            <td>
              <span :class="{'status-low': item.jumlah < 10, 'status-ok': item.jumlah >= 10}">
                {{ item.jumlah < 10 ? 'Hampir Habis' : 'Tersedia' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Laporanstok',
    data() {
      return {
        stokBarang: [
          { id: 1, nama: 'Konsol PS5', kategori: 'Konsol', jumlah: 25 },
          { id: 2, nama: 'Headset Gaming Razer', kategori: 'Aksesoris', jumlah: 8 },
          { id: 3, nama: 'Keyboard Mechanical', kategori: 'Peripheral', jumlah: 4 }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .laporan-stok {
    max-width: 900px;
    margin: 40px auto;
    background: #ffffff;
    border-radius: 12px;
    padding: 20px 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .header h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 5px;
  }
  
  .header p {
    font-size: 16px;
    color: #777;
  }
  
  .stok-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  .stok-table th,
  .stok-table td {
    padding: 12px 15px;
    text-align: left;
  }
  
  .stok-table thead {
    background-color: #2d89ef;
    color: #ffffff;
  }
  
  .stok-table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .stok-table tbody tr:hover {
    background-color: #f1f7ff;
  }
  
  .status-low {
    color: #d32f2f;
    font-weight: bold;
  }
  
  .status-ok {
    color: #388e3c;
    font-weight: bold;
  }
  </style>
  