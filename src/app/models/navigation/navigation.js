import mongoose from 'mongoose';

const { Schema } = mongoose;

const navigationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Navigation', // This allows nesting of Navigation objects
    },
  ],
});

const Navigation = mongoose.models.Navigation || mongoose.model('Navigation', navigationSchema);

export default Navigation;
