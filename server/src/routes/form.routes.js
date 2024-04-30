import { Router } from "express";
import{
    filterUser,
    updateFormFields,
    userInfo, 
    viewProfile
} from "../controller/form.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/user-info").post(verifyJWT,userInfo);
router.route("/profile").get(verifyJWT,viewProfile);
router.route("/update-profile").patch(verifyJWT,updateFormFields);
router.route("/filter-profiles").post(verifyJWT,filterUser);

export default router;