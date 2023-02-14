import { pool } from '../db.js';

export const pingController = async(req,res)=> {
    try {
        const [result] = await pool.query('select 1+1 as result')
    res.json(result)    
    } catch (error) {
        console.log(error);
    }   
}