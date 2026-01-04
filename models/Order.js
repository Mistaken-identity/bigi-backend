import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema( 
    { 
        items: Array, 
        total: Number, 
        customer: Object, 
    }, 
    { timestamps: true } 
); 


export default mongoose.model('Order', orderSchema);