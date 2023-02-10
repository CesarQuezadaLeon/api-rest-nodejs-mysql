import express from "express";
import {pool} from "./db.js"
import employeeRoutes from './routes/employee.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.listen(3000);
app.use(express.json())
app.use(indexRoutes);
app.use('/api/',employeeRoutes);

console.log("Server is running in port 3000")