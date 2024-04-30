import { Router } from "express";
import{
    userInfo, 
    viewProfile
} from "../controller/form.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/user-info").post(verifyJWT,userInfo);
router.route("/profile").get(verifyJWT,viewProfile)

export default router;