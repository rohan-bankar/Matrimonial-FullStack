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

export{
    userInfo
}