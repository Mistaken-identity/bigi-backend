import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/', async (req, res) => {
     try { 
        const order = new Order(req.body); 
        await order.save(); 
        res.status(201).json(order); 
    }   catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
}); 

export default router;