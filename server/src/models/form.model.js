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
                    enum:['Average','Athletic','Slim','Fit','Muscular','Curvy','Slightly Overweight','']},
            weight: { type: Number, 
                      required: true },
            height: { type: Number,
                          required: true },
            complexion:{type:String,
                        enum:['Very Dark','Dark','Whitish','Fair','Very Fair','']},
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
            professionType: { type: String,
                             required: true,
                             enum:['Service','Business'] }, // "Service" or "Business"
            organizationName: {type: String},
            organizationAddress:{type: String},
            Designation: String,
            Salary: {type: String},
          },
          educationDetails:{
            educationType:{type:String,
                          required:true,
                          enum:['10th','12th','Diploma','Graduation','Post-Graduation','PhD']},
            CollegeName:{type:String},
            CourseName:{type:String},
            Marks:{type:String},
          },
          fatherDetails: {
            fatherFirstName: { type: String, required: true },
            fatherMiddleName: {type: String},
            fatherLastName: { type: String, required: true },
            fatherStatus: { type: String, required: true ,enum: ['alive', 'expired']}, // "alive" or "expired"
            fatherContact: {type: Number}, 
            fatherProfession:{type:String,
                        enum:['Service','Business','Retired',''],},
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
                        enum:['Service','Business','Retired','House Wife',''],},
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
                            enum:['Pure Veg','Mostly Veg','Veg & Non-veg','Mostly Non-veg','Pure Non-veg','']},
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