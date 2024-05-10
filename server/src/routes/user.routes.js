import { Router } from "express";
import {
    changePassword,
    forgetPasswordEmail,
    loginAdmin,
    loginUser,
    logoutAdmin,
    logoutUser,
    registerUser,
    resetPassword,
    verifyEmail,
} from "../controller/user.controller.js";
import{verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();
router.route("/register").post(registerUser);
router.route("/verify-email/:userId").get(verifyEmail);
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser);
router.route("/change-password").post(verifyJWT,changePassword);
router.route("/admin-login").post(loginAdmin);
router.route("/admin-logout").post(verifyJWT,logoutAdmin);
router.route("/forget-password").post(forgetPasswordEmail);
router.route("/reset-password/:token").post(resetPassword);
export default router;