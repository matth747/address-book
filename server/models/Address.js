const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const addressSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 20
    },
    streetAddress: {
        type: String,
        required: false,
    },
    cityState: {
        type: String,
        required: false,
    },
    zipCode: {
        type: String,
        required: false,
    },
    notes: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 100
    },
    phone: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Address = model('Address', addressSchema);

module.exports = Address;
