// Dependencies
import { defineComponent } from 'vue';

// Containers
import ProductList from '@/app/products/infrastructure/ui/containers/product-list/index.vue';

export default defineComponent({
  name: 'ProductListPage',
  components: {
    ProductList,
  },
});
