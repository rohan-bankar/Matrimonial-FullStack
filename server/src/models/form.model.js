import mongoose, { Schema } from "mongoose";

const formSchema = new Schema(
    {
        personalInformation: {
            firstName: { type: String,
                         required: true },
            middleName:{type:String,
                        required:true}, 
            lastName: { type: String, 
                        required: true },
            gender: { type: String, 
                        required: true,
                        enum:['Male','Female','Other'] },
            birthday: { type: Date, 
                        required: true },
            birthTime: {
                        type: String,
                        required: true},
            contact:{ 
                      type:Number,
                      required:true,
                      unique:true},
            birthPlace: { type: String, 
                        required: true },
            nativePlace: { type: String,
                        required: true },
            religion: { type: String,
                        required: true },
            cast: { type: String, 
                        required: true },
            figure:{type:String,
                    enum:['Average','Athletic','Slim','Fit','Muscular','Curvy','Slightly Overweight']},
            weight: { type: Number, 
                      required: true },
            height: { type: Number,
                          required: true },
            complexion:{type:String,
                        enum:['Very Dark','Dark','Whitish','Fair','Very Fair']},
            bloodGroup: { type: String, 
                          required: true,
                          enum:['A+','A','B+','B','O+','O','AB+','AB'] },
            maritalStatus: { type: String, 
                             required: true,
                             enum:['Single','Widow','Widower','Divorce'] },
          },
          languagesKnown: {
            language1: { 
                        type: String, 
                        required: true,
                        enum: [
                          'Assamese',
                          'Bengali',
                          'Bodo',
                          'Dogri',
                          'English',
                          'Gujarati',
                          'Hindi',
                          'Kannada',
                          'Kashmiri',
                          'Konkani',
                          'Maithili',
                          'Malayalam',
                          'Marathi',
                          'Meitei',
                          'Nepali',
                          'Odia',
                          'Punjabi',
                          'Sanskrit',
                          'Santali',
                          'Sandhi',
                          'Tamil',
                          'Telugu',
                          'Urdu'
                        ],
                     },
            language2: { 
                        type: String,
                        required: true,
                        enum: [
                          'Assamese',
                          'Bengali',
                          'Bodo',
                          'Dogri',
                          'English',
                          'Gujarati',
                          'Hindi',
                          'Kannada',
                          'Kashmiri',
                          'Konkani',
                          'Maithili',
                          'Malayalam',
                          'Marathi',
                          'Meitei',
                          'Nepali',
                          'Odia',
                          'Punjabi',
                          'Sanskrit',
                          'Santali',
                          'Sandhi',
                          'Tamil',
                          'Telugu',
                          'Urdu'
                        ], 
                    },
            language3: {
                        type:String,
                        enum:[
                        'Assamese',
                        'Bengali',
                        'Bodo',
                        'Dogri',
                        'English',
                        'Gujarati',
                        'Hindi',
                        'Kannada',
                        'Kashmiri',
                        'Konkani',
                        'Maithili',
                        'Malayalam',
                        'Marathi',
                        'Meitei',
                        'Nepali',
                        'Odia',
                        'Punjabi',
                        'Sanskrit',
                        'Santali',
                        'Sandhi',
                        'Tamil',
                        'Telugu',
                        'Urdu',
                        ''
              ],
            }
          },
          professionalDetails: {
            professionType: { type: String, required: true }, // "Service" or "Business"
            serviceName: {type: String},
            serviceAddress:{type: String},
            serviceDesignation: String,
            serviceSalary: {type: String},
            businessName: {type: String},
            businessAddress: {type: String},
            businessDesignation: {type: String},
            businessIncome: {type: String},
          },
          educationDetails:{
            educationType:{type:String,required:true},
            tenthSchoolName:{type:String},
            tenthMarks:{type:String},
            diplomaCollegeName:{type:String},
            diplomaCourseName:{type:String},
            diplomaMarks:{type:String},
            twelfthCollegeName:{type:String},
            twelfthCourseName:{type:String},
            twelfthMarks:{type:String},
            graduationCollegeName:{type:String},
            graduationCourseName:{type:String},
            graduationMarks:{type:String},
            postGraduationCollegeName:{type:String},
            postGraduationCourseName:{type:String},
            postGraduationSpecialization:{type:String},
            postGraduationMarks:{type:String},
            phdCollegeName:{type:String},
            phdCourseName:{type:String},
            phdSpecialization:{type:String},
            phdMarks:{type:String}
          },
          fatherDetails: {
            fatherFirstName: { type: String, required: true },
            fatherMiddleName: {type: String},
            fatherLastName: { type: String, required: true },
            fatherStatus: { type: String, required: true ,enum: ['alive', 'expired']}, // "alive" or "expired"
            fatherContact: {type: Number}, 
            fatherProfession:{type:String,
                        enum:['Service','Business','Retired'],},
            fatherAliveFields:{
                        contact: { type: String },
                        profession: { type: String, enum: ['Service', 'Business', 'Retired'] }
                      }
          },
          motherDetails: {
            motherFirstName: { type: String, required: true },
            motherLastName: { type: String, required: true },
            motherStatus: { type: String, required: true,enum: ['alive', 'expired'] },
                     // "alive" or "expired"
            motherContact: {type: Number},
            motherProfession: {type:String,
                        enum:['Service','Business','Retired','House Wife'],},
            motherAliveFields: {
                          contact: { type: String },
                          profession: { type: String, enum: ['Service', 'Business', 'Retired', 'House Wife'] }
                      }
          },
          maternalSurname: {
            surName: { type: String, required: true },
          },
          relativesSurname: 
            {
              surName1:{type:String},
              surName2:{type:String},
              surName3:{type:String}
            },
          // elderSiblings: {
          //  elderSiblingOne: {
          //   elderSiblingOneFirstName: { type: String},
          //   elderSiblingOneLastName: { type: String},
          //   elderSiblingOneMaritalStatus: { type: String,
          //                     enum:['Single','Widow','Widower','Divorce',''] },
          //   },
          //   elderSiblingTwo: {
          //     elderSiblingTwoFirstName: { type: String},
          //     elderSiblingTwoLastName: { type: String},
          //     elderSiblingTwoMaritalStatus: { type: String,
          //                     enum:['Single','Widow','Widower','Divorce',''] },
          //   },
          //   elderSiblingThree: {
          //     elderSiblingThreeFirstName: { type: String},
          //     elderSiblingThreeLastName: { type: String},
          //     elderSiblingThreeMaritalStatus: { type: String,
          //                     enum:['Single','Widow','Widower','Divorce',''] },
          //   },
          // },
          // youngerSiblings: {
          //   youngerSiblingOne:{
          //     youngerSiblingOneFirstName: { type: String},
          //     youngerSiblingOneLastName: { type: String},
          //     youngerSiblingOneMaritalStatus: { type: String,
          //                     enum:['Single','Widow','Widower','Divorce','']},
          //   },
          //   youngerSiblingTwo:{
          //     youngerSiblingTwoFirstName: { type: String},
          //     youngerSiblingTwoLastName: { type: String},
          //     youngerSiblingTwoMaritalStatus: { type: String,
          //                     enum:['Single','Widow','Widower','Divorce','']},
          //   },
          //   youngerSiblingThree:{
          //     youngerSiblingThreeFirstName: { type: String},
          //     youngerSiblingThreeLastName: { type: String},
          //     youngerSiblingThreeMaritalStatus: { type: String,
          //                     enum:['Single','Widow','Widower','Divorce','']},
          //   }
          // },
          spousePreference: {
            spouseComplexion: {type: String,
                        enum:['Very Dark','Dark','Whitish','Fair','Very Fair','']},
            spouseHeight:{type:Number},
            spousePhysique:{type: String,
                      enum:['Average','Athletic','Slim','Fit','Muscular','Curvy','Slightly Overweight','']},
          },
          otherDetails: {
            aboutSelf:{type: String},
            foodPreference:{type: String,
                            enum:['Pure Veg','Mostly Veg','Veg & Non-veg','Mostly Non-veg','Pure Non-veg']},
          },
          contactInformation: {
            country: { type: String, required: true },
            state: { type: String, required: true },
            city: { type: String, required: true },
            villageTown: {type:String},
            pin: { type: String, required: true },
          },
          createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
          }
    },
    {
        timestamps:true
    }
)

export const Form = mongoose.model("Form",formSchema);