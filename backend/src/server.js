import express from 'express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js'; 
import cors from "cors";
import {clerkMiddleware} from "@clerk/express"

import userRoutes from './routes/user.route.js';

const app = express();

const startServer = async () => {
    try {
        await connectDB();

        app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
    } catch (error) {
        console.error("Error starting the server:", error.message);
        process.exit(1);
    }
};

startServer();
