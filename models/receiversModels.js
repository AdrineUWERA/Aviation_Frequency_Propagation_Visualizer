import mongoose from "mongoose";

const receiverSchema = new mongoose.Schema({
  // location: {
    lng: {
        type: [Number],
        required: true
    },
    lat: {
        type: [Number],
        required: true
    },
  // },

  coverage: {
    type: [Number],
    // unit: 'm',
    required: true
  }
});

const Receiver = new mongoose.model("receiver", receiverSchema);
export default Receiver;