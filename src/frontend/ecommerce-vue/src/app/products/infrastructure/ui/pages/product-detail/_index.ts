// Dependencies
import { defineComponent } from 'vue';

import ProductDetail from '@/app/products/infrastructure/ui/containers/product-detail/index.vue';

export default defineComponent({
  name: 'ProductDetailPage',
  components: {
    ProductDetail,
  },
  methods: {
    goBack(): void {
      this.$router.go(-1);
    },
  },
});
