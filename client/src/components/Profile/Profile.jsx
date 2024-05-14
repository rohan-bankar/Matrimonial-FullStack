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
        <div>
            {data && (
                <div className='w-10/12 mx-auto'>
                    <p className='mt-5'>Personal Information</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>First Name</p>
                            <p>{data.personalInformation.firstName}</p>
                        </div>
                        <div>
                            <p>Middle Name</p>
                            <p>{data.personalInformation.middleName}</p>
                        </div>
                        <div>
                            <p>Last Name</p>
                            <p>{data.personalInformation.lastName}</p>
                        </div>
                        <div>
                            <p>Gender</p>
                            <p>{data.personalInformation.gender}</p>
                        </div>
                        <div>
                            <p>Birthday</p>
                            <p>{formatDate(data.personalInformation.birthday)}</p>
                        </div>
                        <div>
                            <p>Birth Time</p>
                            <p>{data.personalInformation.birthTime}</p>
                        </div>
                        <div>
                            <p>Contact</p>
                            <p>{data.personalInformation.contact}</p>
                        </div>
                        <div>
                            <p>Birth Place</p>
                            <p>{data.personalInformation.birthPlace}</p>
                        </div>
                        <div>
                            <p>Native Place</p>
                            <p>{data.personalInformation.nativePlace}</p>
                        </div>
                        <div>
                            <p>Religion</p>
                            <p>{data.personalInformation.religion}</p>
                        </div>
                        <div>
                            <p>Cast</p>
                            <p>{data.personalInformation.cast}</p>
                        </div>
                        <div>
                            <p>Figure</p>
                            <p>{data.personalInformation.figure}</p>
                        </div>
                        <div>
                            <p>Weight</p>
                            <p>{data.personalInformation.weight}</p>
                        </div>
                        <div>
                            <p>Height</p>
                            <p>{data.personalInformation.height}</p>
                        </div>
                        <div>
                            <p>Complexion</p>
                            <p>{data.personalInformation.complexion}</p>
                        </div>
                        <div>
                            <p>Blood Group</p>
                            <p>{data.personalInformation.bloodGroup}</p>
                        </div>
                        <div>
                            <p>Marital Status</p>
                            <p>{data.personalInformation.maritalStatus}</p>
                        </div>
                    </div>
                    <hr />

                    <p className='mt-5'>Language Known</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>First Language</p>
                            <p>{data.languagesKnown.language1}</p>
                        </div>
                        <div>
                            <p>Second Language</p>
                            <p>{data.languagesKnown.language2}</p>
                        </div>
                        <div>
                            <p>Third Language</p>
                            <p>{data.languagesKnown.language3}</p>
                        </div>
                    </div>
                    <hr />

                    <p className='mt-5'>Professional Details</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>Profession Type</p>
                            <p>{data.professionalDetails.professionType}</p>
                        </div>
                        <div>
                            <p>Organization Name</p>
                            <p>{data.professionalDetails.serviceName}</p>
                        </div>
                        <div>
                            <p>Organization Address</p>
                            <p>{data.professionalDetails.serviceAddress}</p>
                        </div>
                        <div>
                            <p>Designation</p>
                            <p>{data.professionalDetails.serviceDesignation}</p>
                        </div>
                        <div>
                            <p>Salary</p>
                            <p>{data.professionalDetails.serviceSalary}</p>
                        </div>
                    </div>
                    <hr />

                    <p className='mt-5'>Education Details</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>Education Type</p>
                            <p>{data.educationDetails.educationType}</p>
                        </div>
                        <div>
                            <p>College Name</p>
                            <p>{data.educationDetails.graduationCollegeName}</p>
                        </div>
                        <div>
                            <p>Course Name</p>
                            <p>{data.educationDetails.graduationCourseName}</p>
                        </div>
                        <div>
                            <p>Marks</p>
                            <p>{data.educationDetails.graduationMarks}</p>
                        </div>
                    </div>
                    <hr />

                    <p className='mt-5'>Father Details</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>First Name</p>
                            <p>{data.fatherDetails.fatherFirstName}</p>
                        </div>
                        <div>
                            <p>Middle Name</p>
                            <p>{data.fatherDetails.fatherMiddleName}</p>
                        </div>
                        <div>
                            <p>Last Name</p>
                            <p>{data.fatherDetails.fatherLastName}</p>
                        </div>
                        <div>
                            <p>Status</p>
                            <p>{data.fatherDetails.fatherStatus}</p>
                        </div>
                        <div>
                            <p>Contact</p>
                            <p>{data.fatherDetails.fatherContact}</p>
                        </div>
                        <div>
                            <p>Profession</p>
                            <p>{data.fatherDetails.fatherProfession}</p>
                        </div>
                    </div>
                    <hr />

                    <p className='mt-5'>Mother Details</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>First Name</p>
                            <p>{data.motherDetails.motherFirstName}</p>
                        </div>
                        <div>
                            <p>Last Name</p>
                            <p>{data.motherDetails.motherLastName}</p>
                        </div>
                        <div>
                            <p>Status</p>
                            <p>{data.motherDetails.motherStatus}</p>
                        </div>
                        <div>
                            <p>Contact</p>
                            <p>{data.motherDetails.motherContact}</p>
                        </div>
                        <div>
                            <p>Profession</p>
                            <p>{data.motherDetails.motherProfession}</p>
                        </div>
                    </div>
                    <hr />

                    <p className='mt-5'>Maternal Surname</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>Surname</p>
                            <p>{data.maternalSurname.surName}</p>
                        </div>
                    </div>
                    <hr />

                    <p className='mt-5'>Relatives Surname</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>Surname</p>
                            <p>{data.relativesSurname.surName1}</p>
                        </div>
                        <div>
                            <p>Surname</p>
                            <p>{data.relativesSurname.surName2}</p>
                        </div>
                        <div>
                            <p>Surname</p>
                            <p>{data.relativesSurname.surName3}</p>
                        </div>
                    </div>
                    <hr />

                    <p className='mt-5'>Spouse Preference</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>Complexion</p>
                            <p>{data.spousePreference.spouseComplexion}</p>
                        </div>
                        <div>
                            <p>Height</p>
                            <p>{data.spousePreference.spouseHeight}</p>
                        </div>
                        <div>
                            <p>Physique</p>
                            <p>{data.spousePreference.spousePhysique}</p>
                        </div>
                    </div>
                    <hr />

                    <p className='mt-5'>Other Details</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>About Self</p>
                            <p>{data.otherDetails.aboutSelf}</p>
                        </div>
                        <div>
                            <p>Food Preference</p>
                            <p>{data.otherDetails.foodPreference}</p>
                        </div>
                    </div>
                    <hr />

                    <p className='mt-5'>Contact Information</p>
                    <div className='grid grid-cols-3 gap-5 my-5'>
                        <div>
                            <p>Country</p>
                            <p>{data.contactInformation.country}</p>
                        </div>
                        <div>
                            <p>State</p>
                            <p>{data.contactInformation.state}</p>
                        </div>
                        <div>
                            <p>City</p>
                            <p>{data.contactInformation.city}</p>
                        </div>
                        <div>
                            <p>Village Town</p>
                            <p>{data.contactInformation.villageTown}</p>
                        </div>
                        <div>
                            <p>Pin</p>
                            <p>{data.contactInformation.pin}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
