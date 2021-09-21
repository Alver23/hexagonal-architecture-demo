// Dependencies
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Product',
  props: {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
});
