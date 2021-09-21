// Dependencies
import { defineComponent } from 'vue';

// Components
import Product from '@/app/products/infrastructure/ui/components/product/index.vue';

// Commons
import { STATUS_TYPES } from '@/commons/app';

// Mixins
import RequestStatusMixin from '@/mixins/request-status';

// Components
import Skeleton from '@/components/skeleton/index.vue';

// eslint-disable-next-line
import { ProductListCommand, productRepository, ProductEntity } from "shared-modules";
const productListCommand = new ProductListCommand(productRepository);

export default defineComponent({
  name: 'ProductList',
  mixins: [
    RequestStatusMixin,
  ],
  components: {
    Product,
    Skeleton,
  },
  data: (): { productList: ProductEntity[], numberOfSkeleton: number[]} => ({
    productList: [],
    numberOfSkeleton: Array.from(Array(2).keys()),
  }),
  created(): void {
    this.getProducts();
  },
  methods: {
    getProducts(): void {
      this.setAsPending();
      productListCommand.execute()
        .then(this.getProductsFulfilled.bind(this))
        .catch(this.setAsError.bind(this));
    },
    getProductsFulfilled(data: ProductEntity[]): void {
      this.setAsFulfilled();
      this.productList = data;
    },
  },
  computed: {
    showSkeleton(): boolean {
      return this.status === STATUS_TYPES.LOADING;
    },
  },
});
