import { pool } from '../db.js';

export const pingController = async(req,res)=> {
    const [result] = await pool.query('select 1+1 as result')
    res.json(result)
}