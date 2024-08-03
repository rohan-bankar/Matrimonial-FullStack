import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"64kb"}));
app.use(express.urlencoded({extended:true,limit:"64kb"}));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from './routes/user.routes.js';
import formRouter from './routes/form.routes.js';
import adminRouter from './routes/admin.routes.js';
import requestRouter from './routes/friendRequest.routes.js'

app.use("/api/v1/users",userRouter);
app.use("/api/v1/form",formRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/request",requestRouter);

export{app};