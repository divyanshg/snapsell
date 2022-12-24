const {Schema, model} = require('mongoose');

const customerSchema = new Schema({
    bussiness: {
        type: Schema.Types.ObjectId,
        ref: 'Bussiness'
    },
    name: String,
    phone: String,
    email: String,
    shippingAddress: {
        address: String,
        city: String,
        postalCode: String,
        country: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;