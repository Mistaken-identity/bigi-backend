import express from 'express'; 
import User from '../models/User.js'; 

const router = express.Router(); 

/** 
 * * REGISTER 
 * */ 
router.post('/register', async (req, res) => {
     try { 
        const { email, password } = req.body; 
        
        const existingUser = await User.findOne({ email });
         if (existingUser) {
             return res.status(400).json({ message: 'User already exists' });
             } 
             
             const user = new User({ email, password }); 
             await user.save(); 
             
             res.status(201).json({ message: 'User registered successfully' });
             } catch (error) {
                 res.status(500).json({ message: error.message }); 
                } 
            });
            
            /** 
             * * LOGIN 
             * */ 
            router.post('/login', async (req, res) => { 
                try { const { email, password } = req.body; 
                
                const user = await User.findOne({ email, password }); 
                if (!user) { 
                    return res.status(401).json({ message: 'Invalid credentials' }); 
                } 
                
                res.json({ message: 'Login successful', user });
             } catch (error) {
                 res.status(500).json({ message: error.message }); 
                } 
            }); 


export default router;