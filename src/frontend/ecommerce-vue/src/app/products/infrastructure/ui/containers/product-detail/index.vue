<template>
    <div class="flex flex-wrap m-4">
        <template v-if="showSkeleton">
          <skeleton />
        </template>
      <template v-if="product?.id">
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <product :price="product.price" :picture="product.picture" :name="product.name" />
        </div>
      </template>
    </div>
</template>

<script src="./_index.ts" lang="ts"></script>
