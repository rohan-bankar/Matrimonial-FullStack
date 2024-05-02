import { Router } from "express";
import {
    changePassword,
    loginAdmin,
    loginUser,
    logoutAdmin,
    logoutUser,
    registerUser,
    verifyEmail,
} from "../controller/user.controller.js";
import{verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();
router.route("/register").post(registerUser);
router.route("/verify-email").get(verifyEmail);
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser);
router.route("/change-password").post(changePassword);
router.route("/admin-login").post(loginAdmin);
router.route("/admin-logout").post(verifyJWT,logoutAdmin);

export default router;