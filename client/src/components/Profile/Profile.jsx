import React from 'react';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const Profile = ({ data }) => {
    return (
        <div className='bg-orange-200'>
            {data && (
                <div className='w-10/12 mx-auto'>
                    <p className='font-bold text-xl pt-5'>Personal Information</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p className='title'>First Name</p>
                            <p className='data'>{data.personalInformation.firstName}</p>
                        </div>
                        <div>
                            <p className='title'>Middle Name</p>
                            <p className='data'>{data.personalInformation.middleName}</p>
                        </div>
                        <div>
                            <p className='title'>Last Name</p>
                            <p className='data'>{data.personalInformation.lastName}</p>
                        </div>
                        <div>
                            <p className='title'>Gender</p>
                            <p className='data'>{data.personalInformation.gender}</p>
                        </div>
                        <div>
                            <p className='title'>Birthday</p>
                            <p className='data'>{formatDate(data.personalInformation.birthday)}</p>
                        </div>
                        <div>
                            <p className='title'>Birth Time</p>
                            <p className='data'>{data.personalInformation.birthTime}</p>
                        </div>
                        <div>
                            <p className='title'>Contact</p>
                            <p className='data'>{data.personalInformation.contact}</p>
                        </div>
                        <div>
                            <p className='title'>Birth Place</p>
                            <p className='data'>{data.personalInformation.birthPlace}</p>
                        </div>
                        <div>
                            <p className='title'>Native Place</p>
                            <p className='data'>{data.personalInformation.nativePlace}</p>
                        </div>
                        <div>
                            <p className='title'>Religion</p>
                            <p className='data'>{data.personalInformation.religion}</p>
                        </div>
                        <div>
                            <p className='title'>Cast</p>
                            <p className='data'>{data.personalInformation.cast}</p>
                        </div>
                        <div>
                            <p className='title'>Figure</p>
                            <p className='data'>{data.personalInformation.figure}</p>
                        </div>
                        <div>
                            <p className='title'>Weight</p>
                            <p className='data'>{data.personalInformation.weight}</p>
                        </div>
                        <div>
                            <p className='title'>Height</p>
                            <p className='data'>{data.personalInformation.height}</p>
                        </div>
                        <div>
                            <p className='title'>Complexion</p>
                            <p className='data'>{data.personalInformation.complexion}</p>
                        </div>
                        <div>
                            <p className='title'>Blood Group</p>
                            <p className='data'>{data.personalInformation.bloodGroup}</p>
                        </div>
                        <div>
                            <p className='title'>Marital Status</p>
                            <p className='data'>{data.personalInformation.maritalStatus}</p>
                        </div>
                    </div>
                    <hr/>

                    <p className='mt-5 font-bold text-xl'>Language Known</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p className='title'>First Language</p>
                            <p className='data'>{data.languagesKnown.language1}</p>
                        </div>
                        <div>
                            <p className='title'>Second Language</p>
                            <p className='data'>{data.languagesKnown.language2}</p>
                        </div>
                        <div>
                            <p className='title'>Third Language</p>
                            <p className='data'>{data.languagesKnown.language3}</p>
                        </div>
                    </div>
                    <h />

                    <p className='mt-5 font-bold text-xl'>Professional Details</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p className='title'>Profession Type</p>
                            <p className='data'>{data.professionalDetails.professionType}</p>
                        </div>
                        <div>
                            <p className='title'>Organization Name</p>
                            <p className='data'>{data.professionalDetails.serviceName}</p>
                        </div>
                        <div>
                            <p className='title'>Organization Address</p>
                            <p className='data'>{data.professionalDetails.serviceAddress}</p>
                        </div>
                        <div>
                            <p className='title'>Designation</p>
                            <p className='data'>{data.professionalDetails.serviceDesignation}</p>
                        </div>
                        <div>
                            <p className='title'>Salary</p>
                            <p className='data'>{data.professionalDetails.serviceSalary}</p>
                        </div>
                    </div>
                    <hr/>

                    <p className='mt-5 font-bold text-xl'>Education Details</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p className='title'>Education Type</p>
                            <p className='data'>{data.educationDetails.educationType}</p>
                        </div>
                        <div>
                            <p className='title'>College Name</p>
                            <p className='data'>{data.educationDetails.graduationCollegeName}</p>
                        </div>
                        <div>
                            <p className='title'>Course Name</p>
                            <p className='data'>{data.educationDetails.graduationCourseName}</p>
                        </div>
                        <div>
                            <p className='title'>Marks</p>
                            <p className='data'>{data.educationDetails.graduationMarks}</p>
                        </div>
                    </div>
                    <h/>

                    <p className='mt-5 font-bold text-xl'>Father Details</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p className='title'>First Name</p>
                            <p className='data'>{data.fatherDetails.fatherFirstName}</p>
                        </div>
                        <div>
                            <p className='title'>Middle Name</p>
                            <p className='data'>{data.fatherDetails.fatherMiddleName}</p>
                        </div>
                        <div>
                            <p className='title'>Last Name</p>
                            <p className='data'>{data.fatherDetails.fatherLastName}</p>
                        </div>
                        <div>
                            <p className='title'>Status</p>
                            <p className='data'>{data.fatherDetails.fatherStatus}</p>
                        </div>
                        <div>
                            <p className='title'>Contact</p>
                            <p className='data'>{data.fatherDetails.fatherContact}</p>
                        </div>
                        <div>
                            <p className='title'>Profession</p>
                            <p className='data'>{data.fatherDetails.fatherProfession}</p>
                        </div>
                    </div>
                    <hr/>

                    <p className='mt-5 font-bold text-xl'>Mother Details</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p className='title'>First Name</p>
                            <p className='data'>{data.motherDetails.motherFirstName}</p>
                        </div>
                        <div>
                            <p className='title'>Last Name</p>
                            <p className='data'>{data.motherDetails.motherLastName}</p>
                        </div>
                        <div>
                            <p className='title'>Status</p>
                            <p className='data'>{data.motherDetails.motherStatus}</p>
                        </div>
                        <div>
                            <p className='title'>Contact</p>
                            <p className='data'>{data.motherDetails.motherContact}</p>
                        </div>
                        <div>
                            <p className='title'>Profession</p>
                            <p className='data'>{data.motherDetails.motherProfession}</p>
                        </div>
                    </div>
                    <hr/>

                    <p className='mt-5 font-bold text-xl'>Maternal Surname</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p className='title'>Surname</p>
                            <p className='data'>{data.maternalSurname.surName}</p>
                        </div>
                    </div>
                    <hr/>

                    <p className='mt-5 font-bold text-xl'>Relatives Surname</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p className='title'>Surname</p>
                            <p className='data'>{data.relativesSurname.surName1}</p>
                        </div>
                        <div>
                            <p className='title'>Surname</p>
                            <p className='data'>{data.relativesSurname.surName2}</p>
                        </div>
                        <div>
                            <p className='title'>Surname</p>
                            <p className='data'>{data.relativesSurname.surName3}</p>
                        </div>
                    </div>
                    <hr/>

                    <p className='mt-5 font-bold text-xl'>Spouse Preference</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p className='title'>Complexion</p>
                            <p className='data'>{data.spousePreference.spouseComplexion}</p>
                        </div>
                        <div>
                            <p className='title'>Height</p>
                            <p className='data'>{data.spousePreference.spouseHeight}</p>
                        </div>
                        <div>
                            <p className='title'>Physique</p>
                            <p className='data'>{data.spousePreference.spousePhysique}</p>
                        </div>
                    </div>
                    <hr/>

                    <p className='mt-5 font-bold text-xl'>Other Details</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p className='title'>About Self</p>
                            <p className='data'>{data.otherDetails.aboutSelf}</p>
                        </div>
                        <div>
                            <p className='title'>Food Preference</p>
                            <p className='data'>{data.otherDetails.foodPreference}</p>
                        </div>
                    </div>
                    <hr/>

                    <p className='mt-5 font-bold text-xl'>Contact Information</p>
                    <div className='grid grid-cols-3 gap-5 py-5'>
                        <div>
                            <p className='title'>Country</p>
                            <p className='data'>{data.contactInformation.country}</p>
                        </div>
                        <div>
                            <p className='title'>State</p>
                            <p className='data'>{data.contactInformation.state}</p>
                        </div>
                        <div>
                            <p className='title'>City</p>
                            <p className='data'>{data.contactInformation.city}</p>
                        </div>
                        <div>
                            <p className='title'>Village Town</p>
                            <p className='data'>{data.contactInformation.villageTown}</p>
                        </div>
                        <div>
                            <p className='title'>Pin</p>
                            <p className='data'>{data.contactInformation.pin}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
