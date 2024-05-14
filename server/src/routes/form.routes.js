import { Router } from "express";
import{
    filterUser,
    searchBar,
    updateFormFieldsContactInformation,
    // updateFormFieldsEducationDetails,
    userInfo, 
    viewProfile,
    viewUsersProfile
} from "../controller/form.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/user-info").post(verifyJWT,userInfo);
router.route("/profile").get(verifyJWT,viewProfile);
router.route("/users-profile/:userId").get(verifyJWT,viewUsersProfile)
router.route("/update-contactInfo").patch(verifyJWT,updateFormFieldsContactInformation);
// router.route("/update-educationDetails").patch(verifyJWT,updateFormFieldsEducationDetails);
router.route("/filter-profiles").post(verifyJWT,filterUser);
router.route("/searchBar").post(verifyJWT,searchBar);
export default router;