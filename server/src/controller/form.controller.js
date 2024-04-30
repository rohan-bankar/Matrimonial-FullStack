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
        serviceName,
        serviceAddress,
        serviceDesignation,
        serviceSalary,
        businessName,
        businessAddress,
        businessDesignation,
        businessIncome
    },
    educationDetails:{
        educationType,
        tenthSchoolName,
        tenthMarks,
        diplomaCollegeName,
        diplomaCourseName,
        diplomaMarks,
        twelfthCollegeName,
        twelfthCourseName,
        twelfthMarks,
        graduationCollegeName,
        graduationCourseName,
        graduationMarks,
        postGraduationCollegeName,
        postGraduationCourseName,
        postGraduationSpecialization,
        postGraduationMarks,
        phdCollegeName,
        phdCourseName,
        phdSpecialization,
        phdMarks
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
    elderSiblings:{
        elderSiblingOne:{
            elderSiblingOneFirstName,
            elderSiblingOneLastName,
            elderSiblingOneMaritalStatus,
        },
        // elderSiblingTwo:{
        //     elderSiblingTwoFirstName,
        //     elderSiblingTwoLastName,
        //     elderSiblingTwoMaritalStatus,
        // },
        // elderSiblingThree:{
        //     elderSiblingThreeFirstName,
        //     elderSiblingThreeLastName,
        //     elderSiblingThreeMaritalStatus,
        // }
    },
    youngerSiblings:{
        youngerSiblingOne:{
            youngerSiblingOneFirstName,
            youngerSiblingOneLastName,
            youngerSiblingOneMaritalStatus,
        },
        // youngerSiblingTwo:{
        //     youngerSiblingTwoFirstName,
        //     youngerSiblingTwoLastName,
        //     youngerSiblingTwoMaritalStatus,
        // },
        // youngerSiblingThree:{
        //     youngerSiblingThreeFirstName,
        //     youngerSiblingThreeLastName,
        //     youngerSiblingThreeMaritalStatus,
        // }
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
        serviceName,
        serviceAddress,
        serviceDesignation,
        serviceSalary,
        businessName,
        businessAddress,
        businessDesignation,
        businessIncome
    },
    educationDetails:{
        educationType,
        tenthSchoolName,
        tenthMarks,
        diplomaCollegeName,
        diplomaCourseName,
        diplomaMarks,
        twelfthCollegeName,
        twelfthCourseName,
        twelfthMarks,
        graduationCollegeName,
        graduationCourseName,
        graduationMarks,
        postGraduationCollegeName,
        postGraduationCourseName,
        postGraduationSpecialization,
        postGraduationMarks,
        phdCollegeName,
        phdCourseName,
        phdSpecialization,
        phdMarks
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
    elderSiblings:{
        elderSiblingOne:{
            elderSiblingOneFirstName,
            elderSiblingOneLastName,
            elderSiblingOneMaritalStatus,
        },
        // elderSiblingTwo:{
        //     elderSiblingTwoFirstName,
        //     elderSiblingTwoLastName,
        //     elderSiblingTwoMaritalStatus,
        // },
        // elderSiblingThree:{
        //     elderSiblingThreeFirstName,
        //     elderSiblingThreeLastName,
        //     elderSiblingThreeMaritalStatus,
        // }
    },
    youngerSiblings:{
        youngerSiblingOne:{
            youngerSiblingOneFirstName,
            youngerSiblingOneLastName,
            youngerSiblingOneMaritalStatus,
        },
        // youngerSiblingTwo:{
        //     youngerSiblingTwoFirstName,
        //     youngerSiblingTwoLastName,
        //     youngerSiblingTwoMaritalStatus,
        // },
        // youngerSiblingThree:{
        //     youngerSiblingThreeFirstName,
        //     youngerSiblingThreeLastName,
        //     youngerSiblingThreeMaritalStatus,
        // }
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
    
    // const existedUser = await Form.findOne({
    //     personalInformation:{firstName}
    // }
    // )
    // if(existedUser){
    //     throw new ApiError(409,"No profile found");
    // }

    return res
    .status(201)
    .json(
        new ApiResponse(200,profile,"User profile view successfully")
    )
})

const updateFormFields = asyncHandler(async(req,res)=>{
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
    const{cast,gender} = req.body.personalInformation;

    const filter = {
        // createdBy: userId,
    };
    
    if(cast){
        filter["personalInformation.cast"] = cast
    }
    if(gender){
        filter["personalInformation.gender"] = gender
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


export{
    userInfo,
    viewProfile,
    updateFormFields,
    filterUser
}