<template>
    <div class="flex flex-wrap m-4">
        <template v-if="showSkeleton">
          <div class="mx-4" v-for="index in numberOfSkeleton" :key="index">
            <skeleton />
          </div>
        </template>
        <div class="xl:w-1/3 md:w-1/2 p-4" v-for="product in productList" :key="product.id">
          <product :price="product.price" :picture="product.picture" :name="product.name">
            <router-link
              :to="{ path: `/product/${product.id}`}"
              class="px-10 bg-purple-600 text-center font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300">
              Ver
            </router-link>
          </product>
        </div>
    </div>
</template>

<script src="./_index.ts" lang="ts"></script>
