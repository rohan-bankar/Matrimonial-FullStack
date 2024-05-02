import { Router } from "express";
import { 
    deleteUserData,
    deleteUserProfile,
    viewProfile

} from "../controller/admin.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/view-profile").get(verifyJWT,viewProfile);
router.route("/delete-user/:userId").delete(verifyJWT,deleteUserProfile);
router.route("/delete-data/:userId").delete(verifyJWT,deleteUserData);

export default router;