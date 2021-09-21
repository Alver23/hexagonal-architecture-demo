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
import { ProductDetailCommand, productRepository, ProductEntity } from "shared-modules";
const productDetailCommand = new ProductDetailCommand(productRepository);

export default defineComponent({
  name: 'ProductDetail',
  mixins: [
    RequestStatusMixin,
  ],
  components: {
    Product,
    Skeleton,
  },
  data: (): { product: ProductEntity | undefined } => ({
    product: undefined,
  }),
  created(): void {
    this.getProductById(this.$route.params.id as string);
  },
  methods: {
    getProductById(id: string): void {
      this.setAsPending();
      productDetailCommand.execute(id)
        .then(this.getProductsFulfilled.bind(this))
        .catch(this.setAsError.bind(this));
    },
    getProductsFulfilled(data: ProductEntity): void {
      this.setAsFulfilled();
      this.product = data;
    },
  },
  computed: {
    showSkeleton(): boolean {
      return this.status === STATUS_TYPES.LOADING;
    },
  },
});
