import { Router } from "express";
import{
    sendRequest,
    getRequest,
    updateRequest
} from "../controller/friendRequest.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/send").post(verifyJWT,sendRequest);
router.route("/requests").get(verifyJWT,getRequest);
router.route("/update").patch(verifyJWT,updateRequest);

export default router;