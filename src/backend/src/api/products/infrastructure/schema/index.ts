// Dependencies
import mongoose, { Schema } from 'mongoose';

const schema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pictures: [
    {
      type: Object,
      required: true,
    },
  ],
});

export default mongoose.model('Product', schema);
