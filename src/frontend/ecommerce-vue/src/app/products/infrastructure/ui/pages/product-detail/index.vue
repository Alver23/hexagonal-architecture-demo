<template>
  <div>
    <button
      @click="goBack"
      className="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2" type="button">
      Ir al home
    </button>
    <ProductDetail />
  </div>
</template>

<script src="./_index.ts" lang="ts"></script>
