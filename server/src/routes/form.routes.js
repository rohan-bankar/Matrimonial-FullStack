import { Router } from "express";
import{
    userInfo
} from "../controller/form.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/user-info").post(verifyJWT,userInfo);

export default router;