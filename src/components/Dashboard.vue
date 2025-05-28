<template>
    <div class="dashboard-container">
      <h1>Gaming Store</h1>
      <p>Selamat datang di Gaming Store kami! Kami menyediakan berbagai perlengkapan gaming mulai dari konsol, aksesoris, hingga komponen PC berkualitas tinggi. Temukan pilihan terbaik untuk meningkatkan pengalaman bermainmu – hanya di sini tempat para gamer sejati berkumpul!</p>
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    padding: 40px;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(37, 117, 252, 0.4);
    text-align: center;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: transform 0.3s ease;
    cursor: default;
  }
  
  .dashboard-container:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(37, 117, 252, 0.7);
  }
  
  .dashboard-container h1 {
    font-weight: 900;
    font-size: 3.5rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
    letter-spacing: 2px;
  }
  
  .dashboard-container p {
    font-size: 1.2rem;
    font-weight: 500;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  