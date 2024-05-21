import { Form } from "../models/form.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";


const cleanEmptyValues = (obj) => {
    // Check if the input object is iterable
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return obj;
    }
    
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = cleanEmptyValues(obj[key]);
            if (Object.keys(obj[key]).length === 0) {
                delete obj[key];
            }
        } else if (obj[key] === '' || obj[key] === null) {
            delete obj[key];
        }
    }
    return obj;
};

const userInfo = asyncHandler(async(req,res)=>{
      const cleanedBody = cleanEmptyValues(req.body);
   const{ 
    personalInformation:{
        firstName,
        middleName,
        lastName,
        gender,
        birthday,
        birthTime,
        contact,
        birthPlace,
        nativePlace,
        religion,
        cast,
        figure,
        weight,
        height,
        complexion,
        bloodGroup,
        maritalStatus
    },
    languagesKnown:{
        language1,
        language2,
        language3
    },
    professionalDetails:{
        professionType,
        organizationName,
        organizationAddress,
        Designation,
        Salary,
    },
    educationDetails:{
        educationType,
        CollegeName,
        CourseName,
        Marks,
    },
    fatherDetails:{
        fatherFirstName,
        fatherMiddleName,
        fatherLastName,
        fatherStatus,
        fatherContact,
        fatherProfession,
    },
    motherDetails:{
        motherFirstName,
        motherLastName,
        motherStatus,
        motherContact,
        motherProfession
    },
    maternalSurname:{
        surName
    },
    relativesSurname:
        {
            surName1,
            surName2,
            surName3
        },
    spousePreference:{
        spouseComplexion,
        spousePhysique,
        spouseHeight
    },
    otherDetails:{
        aboutSelf,
        foodPreference
    },
    contactInformation:{
        country,
        state,
        city,
        villageTown,
        pin
    }
} = cleanedBody;
console.log(cleanedBody);
const userId = req.user._id;
const form = await Form.create({
    personalInformation:{
        firstName,
        middleName,
        lastName,
        gender,
        birthday,
        birthTime,
        contact,
        birthPlace,
        nativePlace,
        religion,
        cast,
        figure,
        weight,
        height,
        complexion,
        bloodGroup,
        maritalStatus
    },
    languagesKnown:{
        language1,
        language2,
        language3
    },
    professionalDetails:{
        professionType,
        organizationName,
        organizationAddress,
        Designation,
        Salary,
    },
    educationDetails:{
        educationType,
        CollegeName,
        CourseName,
        Marks,
    },
    fatherDetails:{
        fatherFirstName,
        fatherMiddleName,
        fatherLastName,
        fatherStatus,
        fatherContact,
        fatherProfession,
    },
    motherDetails:{
        motherFirstName,
        motherLastName,
        motherStatus,
        motherContact,
        motherProfession
    },
    maternalSurname:{
        surName
    },
    relativesSurname:
    {
        surName1,
        surName2,
        surName3
    },
    spousePreference:{
        spouseComplexion,
        spousePhysique,
        spouseHeight
    },
    otherDetails:{
        aboutSelf,
        foodPreference
    },
    contactInformation:{
        country,
        state,
        city,
        villageTown,
        pin
    },
    createdBy:userId
})
console.log(form);
if(!form){
    throw new ApiError(500,"something went wrong");
}

return res.status(201).json(
new ApiResponse(200,form,"User data save successfully")
)
})

const viewProfile = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const profile = await Form.find(
        {createdBy:userId}
    )
    
    return res
    .status(201)
    .json(
        new ApiResponse(200,profile,"User profile view successfully")
    )
})

const updateFormFieldsContactInformation = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const{
        country,
        state,
        city,
        villageTown,
        pin
    } = req.body;

    const updatedForm = await Form.findOneAndUpdate(
        {createdBy:userId},
        {
            $set:{
                "contactInformation.country":country,
                "contactInformation.state":state,
                "contactInformation.city":city,
                "contactInformation.villageTown":villageTown,
                "contactInformation.pin":pin
            }
        },
        {new:true}
    );
    
    if(!updatedForm){
        throw new ApiError(404,"Form not found");
    }

    return res
    .status(201)
    .json(
        new ApiResponse(200,updatedForm,"Form fields updated successfully")
    )
})

const filterUser = asyncHandler(async(req,res)=>{
    // const userId = req.user._id;
    const{cast,gender,maritalStatus} = req.body.personalInformation;

    const filter = {
        // createdBy: userId,
    };
    
    if(cast){
        filter["personalInformation.cast"] = cast
    }
    if(gender){
        filter["personalInformation.gender"] = gender
    }
    if(maritalStatus){
        filter["personalInformation.maritalStatus"] = maritalStatus
    }
    const profiles = await Form.find(filter);

    if(!profiles || profiles.length === 0){
        throw new ApiError(404,"No profile found matching the criteria");
    }

    return res
    .status(201)
    .json(
        new ApiResponse(200,profiles,"Filter profiles retrieved successfully")
    )
})

const searchBar = asyncHandler(async(req,res)=>{
    const {name} = req.body;
    const filter = {};

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if(name){
        filter.$or = [
            { "personalInformation.firstName": name },
            { "personalInformation.lastName": name }
        ];

    }

    const skip = (page - 1) * limit; 

    const profiles = await Form.find(filter)
                               .skip(skip)
                               .limit(limit);

    if(!profiles || profiles.length === 0){
        throw new ApiError(404,"No profile found")
    }

    return res
    .status(201)
    .json(
        new ApiResponse(200,profiles,"search profiles found")
    )
})

const viewUsersProfile = asyncHandler(async(req,res)=>{
    const userId = req.params.userId
    console.log(userId);
    const profile = await Form.findById(userId)
    if(!profile){
        throw new ApiError(404,'profile not found')
    }

    return res
    .status(201)
    .json(
        new ApiResponse(200,profile,'profile view successfully')
    )
})
export{
    userInfo,
    viewProfile,
    updateFormFieldsContactInformation,
    filterUser,
    searchBar,
    viewUsersProfile
}