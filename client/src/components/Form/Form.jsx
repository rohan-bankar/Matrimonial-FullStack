import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Form() {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        personalInformation: {
            firstName: '',
            middleName: '',
            lastName: '',
            gender: '',
            birthday: '',
            birthTime: '',
            contact: '',
            birthPlace: '',
            nativePlace: '',
            religion: '',
            cast: '',
            figure: '',
            weight: '',
            height: '',
            complexion: '',
            bloodGroup: '',
            maritalStatus: ''
          },
          languagesKnown:{
            language1:'',
            language2:'',
            language3:''
           },
           professionalDetails:{
            professionType:'',
            organizationName:'',
            organizationAddress:'',
            Designation:'',
            Salary:'',
            },
            educationDetails:{
                educationType:'',
                CollegeName:'',
                CourseName:'',
                Marks:'',
            },
            fatherDetails:{
                fatherFirstName:'',
                fatherMiddleName:'',
                fatherLastName:'',
                fatherStatus:'',
                fatherContact:'',
                fatherProfession:'',
            },
            motherDetails:{
                motherFirstName:'',
                motherLastName:'',
                motherStatus:'',
                motherContact:'',
                motherProfession:''
            },
            maternalSurname:{
                surName:''
            },
            relativesSurname:{
            surName1:'',
            surName2:'',
            surName3:''
            },
            spousePreference:{
                spouseComplexion:'',
                spousePhysique:'',
                spouseHeight:''
            },
            otherDetails:{
                aboutSelf:'',
                foodPreference:''
            },
            contactInformation:{
                country:'',
                state:'',
                city:'',
                villageTown:'',
                pin:''
            }
    })

    const handleChange = (e)=>{
        const{name,value} = e.target;
        setFormData((formData)=>({
            ...formData,
            personalInformation:{
                ...formData.personalInformation,
                [name]:value,
            },
            languagesKnown:{
                ...formData.languagesKnown,
                [name]:value
            },
            professionalDetails:{
                ...formData.professionalDetails,
                [name]:value
            },
            educationDetails:{
                ...formData.educationDetails,
                [name]:value
            },
            fatherDetails:{
                ...formData.fatherDetails,
                [name]:value
            },
            motherDetails:{
                ...formData.motherDetails,
                [name]:value
            },
            maternalSurname:{
                ...formData.maternalSurname,
                [name]:value
            },
            relativesSurname:{
                ...formData.relativesSurname,
                [name]:value
            },
            spousePreference:{
                ...formData.spousePreference,
                [name]:value
            },
            otherDetails:{
                ...formData.otherDetails,
                [name]:value
            },
            contactInformation:{
                ...formData.contactInformation,
                [name]:value
            }
        }))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.post('/api/v1/form/user-info',formData,{
                headers:{
                    Authorization:`Bearer ${accessToken}`
                }
            });
            console.log(response.data);
            navigate('/home')
        } catch (error) {
            console.error('Error saving user info:',error)
        }
    }

  return (
    <div className='bg-orange-200'>
        <div className='w-10/12 mx-auto'>
            <h1 className='text-center text-3xl text-white font-bold'>User Information Form</h1>
            <form onSubmit={handleSubmit}>
                    <p className='mt-5 font-bold text-xl'>Personal Information</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                    <label htmlFor="firstName">First Name <span className='text-red-600'>*</span></label><br />
                    <input
                    type='text'
                    name='firstName'
                    value={formData.personalInformation.firstName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="middleName">Middle Name <span className='text-red-600'>*</span></label><br />
                    <input
                    type='text'
                    name='middleName'
                    value={formData.personalInformation.middleName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="lastName">Last Name <span className='text-red-600'>*</span></label><br />
                    <input
                    type='text'
                    name='lastName'
                    value={formData.personalInformation.lastName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>
                    
                    <div>
                    <label htmlFor="gender">Gender <span className='text-red-600'>*</span></label><br />
                    <select
                        name="gender"
                        value={formData.personalInformation.gender}
                        onChange={handleChange}
                        className="border rounded w-full h-10"
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="birthday">Birthday <span className='text-red-600'>*</span></label><br />
                    <input
                    type='date'
                    name='birthday'
                    value={formData.personalInformation.birthday}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="birthTime">Birth Time <span className='text-red-600'>*</span></label><br />
                    <input
                    type='text'
                    name='birthTime'
                    value={formData.personalInformation.birthTime}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="contact">Contact <span className='text-red-600'>*</span></label><br />
                    <input
                    type='number'
                    name='contact'
                    value={formData.personalInformation.contact}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="birthPlace">Birth Place <span className='text-red-600'>*</span></label><br />
                    <input
                    type='text'
                    name='birthPlace'
                    value={formData.personalInformation.birthPlace}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="nativePlace">Native Place <span className='text-red-600'>*</span></label><br />
                    <input
                    type='text'
                    name='nativePlace'
                    value={formData.personalInformation.nativePlace}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="religion">Religion <span className='text-red-600'>*</span></label><br />
                    <input
                    type='text'
                    name='religion'
                    value={formData.personalInformation.religion}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="cast">Cast <span className='text-red-600'>*</span></label><br />
                    <input
                    type='text'
                    name='cast'
                    value={formData.personalInformation.cast}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="figure">Figure <span className='text-red-600'>*</span></label><br />
                    <select
                    name='figure'
                    value={formData.personalInformation.figure}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                    <option value="">Select</option>
                    <option value="Average">Average</option>
                    <option value="Athletic">Athletic</option>
                    <option value="Slim">Slim</option>
                    <option value="Fit">Fit</option>
                    <option value="Muscular">Muscular</option>
                    <option value="Curvy">Curvy</option>
                    <option value="Slightly Overweight">Slightly Overweight</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="weight">Weight <span className='text-red-600'>*</span></label><br />
                    <input
                    type='number'
                    name='weight'
                    value={formData.personalInformation.weight}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="height">Height <span className='text-red-600'>*</span></label><br />
                    <input
                    type='number'
                    name='height'
                    value={formData.personalInformation.height}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="complexion">Complexion <span className='text-red-600'>*</span></label><br />
                    <select
                    name='complexion'
                    value={formData.personalInformation.complexion}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                        <option value="">Select</option>
                        <option value="Very Dark">Very Dark</option>
                        <option value="Dark">Dark</option>
                        <option value="Whitish">Whitish</option>
                        <option value="Fair">Fair</option>
                        <option value="Very Fair">Very Fair</option>
                    </select>            
                    </div>    

                    <div>
                    <label htmlFor="bloodGroup">Blood Group <span className='text-red-600'>*</span></label><br />
                    <select
                    name='bloodGroup'
                    value={formData.personalInformation.bloodGroup}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                        <option value="">Select</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="O+">O+</option>
                        <option value="O">O</option>
                        <option value="AB+">AB+</option>
                        <option value="AB">AB</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="maritalStatus">Marital Status <span className='text-red-600'>*</span><span className='text-red-600'>*</span></label><br />
                    <select
                    name='maritalStatus'
                    value={formData.personalInformation.maritalStatus}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                        <option value="">Select</option>
                        <option value="Single">Single</option>
                        <option value="Widow">Widow</option>
                        <option value="Widower">Widower</option>
                        <option value="Divorce">Divorce</option>
                    </select>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Language Known</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                    <label htmlFor="language1">Language <span className='text-red-600'>*</span></label><br />
                    <select
                    name='language1'
                    value={formData.languagesKnown.language1}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    > 
                     <option value="">Select</option>
                    {[
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
                    ].map((language) => (
                    <option key={language} value={language}>
                        {language}
                    </option>
                    ))}
                    </select>
                    
                    </div>

                    <div>
                    <label htmlFor="language2">Language <span className='text-red-600'>*</span></label><br />
                    <select
                    name='language2'
                    value={formData.languagesKnown.language2}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                      <option value="">Select</option>
                    {[
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
                    ].map((language) => (
                    <option key={language} value={language}>
                        {language}
                    </option>
                    ))}
                    </select>               
                    </div>

                    <div>
                    <label htmlFor="language3">Language</label><br />
                    <select
                    name='language3'
                    value={formData.languagesKnown.language3}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                        <option value="">Select</option>
                    {[
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
                    ].map((language) => (
                    <option key={language} value={language}>
                        {language}
                    </option>
                    ))}
                    </select>  
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Professional Details</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                    <label htmlFor="professionType">Profession Type <span className='text-red-600'>*</span></label>
                    <select
                    name='professionType'
                    value={formData.professionalDetails.professionType}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                    <option value="">Select</option>
                    <option value="Service">Service</option>
                    <option value="Business">Business</option>
                    </select>
                    </div>
                    <div>
                    <label htmlFor="organizationName">Organization Name</label>
                    <input
                    type='text'
                    name='organizationName'
                    value={formData.professionalDetails.organizationName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>
                    <div>
                    <label htmlFor="organizationAddress">Organization Address</label>
                    <input
                    type='text'
                    name='organizationAddress'
                    value={formData.professionalDetails.organizationAddress}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>
                    <div>
                    <label htmlFor="Designation">Designation</label>
                    <input
                    type='text'
                    name='Designation'
                    value={formData.professionalDetails.Designation}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>
                    <div>
                    <label htmlFor="Salary">Salary</label>
                    <input
                    type='text'
                    name='Salary'
                    value={formData.professionalDetails.Salary}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Education Details</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                    <label htmlFor="educationType">Education Type <span className='text-red-600'>*</span></label>
                    <select
                    name='educationType'
                    value={formData.educationDetails.educationType}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                    <option value="">Select</option>
                    {[
                    '10th',
                    '12th',
                    'Diploma',
                    'Graduation',
                    'Post-Graduation',
                    'PhD'
                    ].map((education) => (
                    <option key={education} value={education}>
                        {education}
                    </option>
                    ))}
                    </select>  
                    </div>

                    <div>
                    <label htmlFor="CollegeName">Institute Name</label>
                    <input
                    type='text'
                    name='CollegeName'
                    value={formData.educationDetails.CollegeName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="CourseName">Course Name</label>
                    <input
                    type='text'
                    name='CourseName'
                    value={formData.educationDetails.CourseName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="Marks">Marks</label>
                    <input
                    type='text'
                    name='Marks'
                    value={formData.educationDetails.Marks}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Father Details</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                <div>
                    <label htmlFor="fatherFirstName">First Name <span className='text-red-600'>*</span></label>
                    <input
                    type='text'
                    name='fatherFirstName'
                    value={formData.fatherDetails.fatherFirstName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="fatherMiddleName">Middle Name</label>
                    <input
                    type='text'
                    name='fatherMiddleName'
                    value={formData.fatherDetails.fatherMiddleName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="fatherLastName">Last Name <span className='text-red-600'>*</span></label>
                    <input
                    type='text'
                    name='fatherLastName'
                    value={formData.fatherDetails.fatherLastName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="fatherStatus">Status <span className='text-red-600'>*</span></label>
                    <select
                    name='fatherStatus'
                    value={formData.fatherDetails.fatherStatus}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                        <option value="">Select</option>
                        <option value="alive">alive</option>
                        <option value="expired">expired</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="fatherContact">Contact</label>
                    <input
                    type='number'
                    name='fatherContact'
                    value={formData.fatherDetails.fatherContact}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="fatherProfession">Profession</label>
                    <select
                    name='fatherProfession'
                    value={formData.fatherDetails.fatherProfession}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                        <option value="">Select</option>
                        <option value="Service">Service</option>
                        <option value="Business">Business</option>
                        <option value="Retired">Retired</option>
                    </select>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Mother Details</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                <div>
                    <label htmlFor="motherFirstName">First Name <span className='text-red-600'>*</span></label>
                    <input
                    type='text'
                    name='motherFirstName'
                    value={formData.motherDetails.motherFirstName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="motherLastName">Last Name <span className='text-red-600'>*</span></label>
                    <input
                    type='text'
                    name='motherLastName'
                    value={formData.motherDetails.motherLastName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="motherStatus">Status <span className='text-red-600'>*</span></label>
                    <select
                    name='motherStatus'
                    value={formData.motherDetails.motherStatus}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                        <option value="">Select</option>
                        <option value="alive">alive</option>
                        <option value="expired">expired</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="motherContact">Contact</label>
                    <input
                    type='number'
                    name='motherContact'
                    value={formData.motherDetails.motherContact}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="motherProfession">Profession</label>
                    <select
                    name='motherProfession'
                    value={formData.motherDetails.motherProfession}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                        <option value="">Select</option>
                        <option value="Service">Service</option>
                        <option value="Business">Business</option>
                        <option value="Retired">Retired</option>
                        <option value="House Wife">House Wife</option>
                    </select>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Maternal Surname</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                <div>
                    <label htmlFor="surName">Surname <span className='text-red-600'>*</span></label>
                    <input
                    type='text'
                    name='surName'
                    value={formData.maternalSurname.surName}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div> 
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Relatives Surname</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                <div>
                    <label htmlFor="surName1">Surname</label>
                    <input
                    type='text'
                    name='surName1'
                    value={formData.relativesSurname.surName1}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="surName2">Surname</label>
                    <input
                    type='text'
                    name='surName2'
                    value={formData.relativesSurname.surName2}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="surName3">Surname</label>
                    <input
                    type='text'
                    name='surName3'
                    value={formData.relativesSurname.surName3}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Spouse Preference</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                    <label htmlFor="spouseComplexion">Complexion</label>
                    <select
                    name='spouseComplexion'
                    value={formData.spousePreference.spouseComplexion}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                    <option value="">Select</option>
                    {[
                    'Very Dark',
                    'Dark',
                    'Whitish',
                    'Fair',
                    'Very Fair',
                    ''
                    ].map((complexion) => (
                    <option key={complexion} value={complexion}>
                        {complexion}
                    </option>
                    ))}
                    </select>  

                    </div>

                    <div>
                    <label htmlFor="spouseHeight">Height</label>
                    <input
                    type='number'
                    name='spouseHeight'
                    value={formData.spousePreference.spouseHeight}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="spousePhysique">Physique</label>
                    <select
                    name='spousePhysique'
                    value={formData.spousePreference.spousePhysique}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                    <option value="">Select</option>
                    {[
                        'Average',
                        'Athletic',
                        'Slim',
                        'Fit',
                        'Muscular',
                        'Curvy',
                        'Slightly Overweight',
                        ''
                    ].map((Physique) => (
                    <option key={Physique} value={Physique}>
                        {Physique}
                    </option>
                    ))}
                    </select>
                    </div>
                </div>
                <hr />
                
                <p className='mt-5 font-bold text-xl'>Other Details</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                    <label htmlFor="aboutSelf">About Self</label>
                    <input
                    type='text'
                    name='aboutSelf'
                    value={formData.otherDetails.aboutSelf}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="foodPreference">Food Preference</label>
                    <select
                    name='foodPreference'
                    value={formData.otherDetails.foodPreference}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    >
                    <option value="">Select</option>
                    {[
                       'Pure Veg',
                       'Mostly Veg',
                       'Veg & Non-veg',
                       'Mostly Non-veg',
                       'Pure Non-veg',
                       '' 
                    ].map((food) => (
                    <option key={food} value={food}>
                        {food}
                    </option>
                    ))}
                    </select>
                    </div>
                </div>
                <hr />
                
                <p className='mt-5 font-bold text-xl'>Contact Information</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                    <label htmlFor="country">Country <span className='text-red-600'>*</span></label>
                    <input
                    type='text'
                    name='country'
                    value={formData.contactInformation.country}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="state">State <span className='text-red-600'>*</span></label>
                    <input
                    type='text'
                    name='state'
                    value={formData.contactInformation.state}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="city">City <span className='text-red-600'>*</span></label>
                    <input
                    type='text'
                    name='city'
                    value={formData.contactInformation.city}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="villageTown">Village Town</label>
                    <input
                    type='text'
                    name='villageTown'
                    value={formData.contactInformation.villageTown}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>

                    <div>
                    <label htmlFor="pin">Pin <span className='text-red-600'>*</span></label>
                    <input
                    type='text'
                    name='pin'
                    value={formData.contactInformation.pin}
                    onChange={handleChange}
                    className='border rounded w-full h-10'
                    />
                    </div>
                </div>

            <button type='submit' className='p-2 border-none rounded bg-orange-400 text-white font-bold my-2'>Submit</button>
        </form>

        </div>
    </div>
  )
}

export default Form