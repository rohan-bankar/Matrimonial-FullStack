import React from 'react';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const getValue = (obj, key) => obj && obj[key] ? obj[key] : 'N/A';

const LimitedProfile = ({ data, status }) => {
    return (
        <div className='bg-orange-200'>
            <div className='w-10/12 mx-auto'>
                {status === "pending" || status === "declined" ? (
                    <p className='text-red-600 font-bold text-xl pt-5'>You need a connection to view the full profile</p>
                ) : null}
                <p className='font-bold text-xl pt-5'>Personal Information</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>First Name</p>
                        <p className='data'>{getValue(data.personalInformation, 'firstName')}</p>
                    </div>
                    <div>
                        <p className='title'>Middle Name</p>
                        <p className='data'>{getValue(data.personalInformation, 'middleName')}</p>
                    </div>
                    <div>
                        <p className='title'>Last Name</p>
                        <p className='data'>{getValue(data.personalInformation, 'lastName')}</p>
                    </div>
                    <div>
                        <p className='title'>Religion</p>
                        <p className='data'>{getValue(data.personalInformation, 'religion')}</p>
                    </div>
                    <div>
                        <p className='title'>Cast</p>
                        <p className='data'>{getValue(data.personalInformation, 'cast')}</p>
                    </div>
                    <div>
                        <p className='title'>Marital Status</p>
                        <p className='data'>{getValue(data.personalInformation, 'maritalStatus')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FullProfile = ({ data }) => {
    return (
        <div className='bg-orange-200'>
            <div className='w-10/12 mx-auto'>
                <p className='font-bold text-xl pt-5'>Personal Information</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>First Name</p>
                        <p className='data'>{getValue(data.personalInformation, 'firstName')}</p>
                    </div>
                    <div>
                        <p className='title'>Middle Name</p>
                        <p className='data'>{getValue(data.personalInformation, 'middleName')}</p>
                    </div>
                    <div>
                        <p className='title'>Last Name</p>
                        <p className='data'>{getValue(data.personalInformation, 'lastName')}</p>
                    </div>
                    <div>
                        <p className='title'>Gender</p>
                        <p className='data'>{getValue(data.personalInformation, 'gender')}</p>
                    </div>
                    <div>
                        <p className='title'>Birthday</p>
                        <p className='data'>{data.personalInformation && data.personalInformation.birthday ? formatDate(data.personalInformation.birthday) : 'N/A'}</p>
                    </div>
                    <div>
                        <p className='title'>Birth Time</p>
                        <p className='data'>{getValue(data.personalInformation, 'birthTime')}</p>
                    </div>
                    <div>
                        <p className='title'>Contact</p>
                        <p className='data'>{getValue(data.personalInformation, 'contact')}</p>
                    </div>
                    <div>
                        <p className='title'>Birth Place</p>
                        <p className='data'>{getValue(data.personalInformation, 'birthPlace')}</p>
                    </div>
                    <div>
                        <p className='title'>Native Place</p>
                        <p className='data'>{getValue(data.personalInformation, 'nativePlace')}</p>
                    </div>
                    <div>
                        <p className='title'>Religion</p>
                        <p className='data'>{getValue(data.personalInformation, 'religion')}</p>
                    </div>
                    <div>
                        <p className='title'>Cast</p>
                        <p className='data'>{getValue(data.personalInformation, 'cast')}</p>
                    </div>
                    <div>
                        <p className='title'>Figure</p>
                        <p className='data'>{getValue(data.personalInformation, 'figure')}</p>
                    </div>
                    <div>
                        <p className='title'>Weight</p>
                        <p className='data'>{getValue(data.personalInformation, 'weight')}</p>
                    </div>
                    <div>
                        <p className='title'>Height</p>
                        <p className='data'>{getValue(data.personalInformation, 'height')}</p>
                    </div>
                    <div>
                        <p className='title'>Complexion</p>
                        <p className='data'>{getValue(data.personalInformation, 'complexion')}</p>
                    </div>
                    <div>
                        <p className='title'>Blood Group</p>
                        <p className='data'>{getValue(data.personalInformation, 'bloodGroup')}</p>
                    </div>
                    <div>
                        <p className='title'>Marital Status</p>
                        <p className='data'>{getValue(data.personalInformation, 'maritalStatus')}</p>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Language Known</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>First Language</p>
                        <p className='data'>{getValue(data.languagesKnown, 'language1')}</p>
                    </div>
                    <div>
                        <p className='title'>Second Language</p>
                        <p className='data'>{getValue(data.languagesKnown, 'language2')}</p>
                    </div>
                    <div>
                        <p className='title'>Third Language</p>
                        <p className='data'>{getValue(data.languagesKnown, 'language3')}</p>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Professional Details</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>Profession Type</p>
                        <p className='data'>{getValue(data.professionalDetails, 'professionType')}</p>
                    </div>
                    <div>
                        <p className='title'>Organization Name</p>
                        <p className='data'>{getValue(data.professionalDetails, 'organizationName')}</p>
                    </div>
                    <div>
                        <p className='title'>Organization Address</p>
                        <p className='data'>{getValue(data.professionalDetails, 'organizationAddress')}</p>
                    </div>
                    <div>
                        <p className='title'>Designation</p>
                        <p className='data'>{getValue(data.professionalDetails, 'Designation')}</p>
                    </div>
                    <div>
                        <p className='title'>Salary</p>
                        <p className='data'>{getValue(data.professionalDetails, 'Salary')}</p>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Education Details</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>Education Type</p>
                        <p className='data'>{getValue(data.educationDetails, 'educationType')}</p>
                    </div>
                    <div>
                        <p className='title'>College Name</p>
                        <p className='data'>{getValue(data.educationDetails, 'CollegeName')}</p>
                    </div>
                    <div>
                        <p className='title'>Course Name</p>
                        <p className='data'>{getValue(data.educationDetails, 'CourseName')}</p>
                    </div>
                    <div>
                        <p className='title'>Marks</p>
                        <p className='data'>{getValue(data.educationDetails, 'Marks')}</p>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Father Details</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>First Name</p>
                        <p className='data'>{getValue(data.fatherDetails, 'fatherFirstName')}</p>
                    </div>
                    <div>
                        <p className='title'>Middle Name</p>
                        <p className='data'>{getValue(data.fatherDetails, 'fatherMiddleName')}</p>
                    </div>
                    <div>
                        <p className='title'>Last Name</p>
                        <p className='data'>{getValue(data.fatherDetails, 'fatherLastName')}</p>
                    </div>
                    <div>
                        <p className='title'>Status</p>
                        <p className='data'>{getValue(data.fatherDetails, 'fatherStatus')}</p>
                    </div>
                    <div>
                        <p className='title'>Contact</p>
                        <p className='data'>{getValue(data.fatherDetails, 'fatherContact')}</p>
                    </div>
                    <div>
                        <p className='title'>Profession</p>
                        <p className='data'>{getValue(data.fatherDetails, 'fatherProfession')}</p>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Mother Details</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>First Name</p>
                        <p className='data'>{getValue(data.motherDetails, 'motherFirstName')}</p>
                    </div>
                    <div>
                        <p className='title'>Last Name</p>
                        <p className='data'>{getValue(data.motherDetails, 'motherLastName')}</p>
                    </div>
                    <div>
                        <p className='title'>Status</p>
                        <p className='data'>{getValue(data.motherDetails, 'motherStatus')}</p>
                    </div>
                    <div>
                        <p className='title'>Contact</p>
                        <p className='data'>{getValue(data.motherDetails, 'motherContact')}</p>
                    </div>
                    <div>
                        <p className='title'>Profession</p>
                        <p className='data'>{getValue(data.motherDetails, 'motherProfession')}</p>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Maternal Surname</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>Surname</p>
                        <p className='data'>{getValue(data.maternalSurname, 'surName')}</p>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Relatives Surname</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>Surname</p>
                        <p className='data'>{getValue(data.relativesSurname, 'surName1')}</p>
                    </div>
                    <div>
                        <p className='title'>Surname</p>
                        <p className='data'>{getValue(data.relativesSurname, 'surName2')}</p>
                    </div>
                    <div>
                        <p className='title'>Surname</p>
                        <p className='data'>{getValue(data.relativesSurname, 'surName3')}</p>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Spouse Preference</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>Complexion</p>
                        <p className='data'>{getValue(data.spousePreference, 'spouseComplexion')}</p>
                    </div>
                    <div>
                        <p className='title'>Height</p>
                        <p className='data'>{getValue(data.spousePreference, 'spouseHeight')}</p>
                    </div>
                    <div>
                        <p className='title'>Physique</p>
                        <p className='data'>{getValue(data.spousePreference, 'spousePhysique')}</p>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Other Details</p>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div>
                        <p className='title'>About Self</p>
                        <p className='data'>{getValue(data.otherDetails, 'aboutSelf')}</p>
                    </div>
                    <div>
                        <p className='title'>Food Preference</p>
                        <p className='data'>{getValue(data.otherDetails, 'foodPreference')}</p>
                    </div>
                </div>
                <hr />

                <p className='mt-5 font-bold text-xl'>Contact Information</p>
                <div className='grid grid-cols-3 gap-5 py-5'>
                    <div>
                        <p className='title'>Country</p>
                        <p className='data'>{getValue(data.contactInformation, 'country')}</p>
                    </div>
                    <div>
                        <p className='title'>State</p>
                        <p className='data'>{getValue(data.contactInformation, 'state')}</p>
                    </div>
                    <div>
                        <p className='title'>City</p>
                        <p className='data'>{getValue(data.contactInformation, 'city')}</p>
                    </div>
                    <div>
                        <p className='title'>Village Town</p>
                        <p className='data'>{getValue(data.contactInformation, 'villageTown')}</p>
                    </div>
                    <div>
                        <p className='title'>Pin</p>
                        <p className='data'>{getValue(data.contactInformation, 'pin')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Profile = ({ data, status }) => {
    if (status === "pending" || status === "declined") {
        return <LimitedProfile data={data} status={status} />;
    } else {
        return <FullProfile data={data} />;
    }
};

export default Profile;
