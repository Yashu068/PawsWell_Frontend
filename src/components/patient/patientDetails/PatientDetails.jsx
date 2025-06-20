import React, { useEffect, useState } from 'react'
import './PatientDetails.css';
import axios from "axios";
import { Link } from 'react-router-dom';

const PatientDetails = () => {
    const [patientDetails, setPatientDetails] = useState([]);
    const id = localStorage.getItem("userid");
    const getUserData = async (e) => {
        try {
            const token = localStorage.getItem('authToken');
            const details = await axios.get(`https://pawswell-backend.onrender.com/getuserdetails`, { headers: {
                Authorization: `Bearer ${token}`
              }
               });
            // console.log(details.data.userData);
            // console.log(id);
            setPatientDetails(details.data.userData);
        } catch (error) {
            alert('error');
        }
    };
    useEffect(() => {
        getUserData();
    }, [])
    return (
        <div className='patientdetails'>
            <div className='patientimage'><img className='patientprofileimage' src={`https://pawswell-backend.onrender.com/` + patientDetails.profile_image} alt='patient'></img></div>
            <div className='patientdata'>
                <div className='patientdataleft'>
                    <div className='patientlabel'><p className='patientlabelp'><strong>Pet Name: </strong>{patientDetails.name}</p> </div>
                    <div className='patientlabel'><p className='patientlabelp'><strong>Owner Email: </strong>{patientDetails.email}</p></div>
                    <div className='patientlabel'><p className='patientlabelp'><strong>Role: </strong>{patientDetails.role}</p></div>
                    <div className='patientlabel'><p className='patientlabelp'><strong>Gender: </strong>{patientDetails.gender}</p></div>
                    <div className='patientlabel'><p className='patientlabelp'><strong>DOB: </strong>{patientDetails.dob}</p></div>
                    <button className='patientprofileupdate'><Link className='patientprofileupdatelink' to='/patient/patientdetails/editpatientdetails'>Update Profile</Link></button>
                </div>
                <div className='patientdataright'>
                    <div className='patientlabel'><p className='patientlabelp'><strong>Owner Phone: </strong>{patientDetails.phone}</p></div>
                    <div className='patientlabel'><p className='patientlabelp'><strong>Pet ID: </strong>{patientDetails.adhar_no}</p></div>
                    <div className='patientlabel'><p className='patientlabelp'><strong>Owner Name: </strong>{patientDetails.father_name}</p></div>
                    <div className='patientlabel'><p className='patientlabelp'><strong>Species: </strong>{patientDetails.mother_name}</p></div>
                    <div className='patientlabel'><p className='patientlabelp'><strong>Breed: </strong>{patientDetails.marital_status}</p></div>
                </div>
            </div>
        </div>
    )
}

export default PatientDetails