import React, { useEffect, useState } from 'react';
import './BookingNotifications.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookingNotifications = () => {
    const [bookings, setBookings] = useState([]);

    const getRequests = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.get(`http://localhost:3001/getCurrentBookings`, {
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
            console.log(response);
            setBookings(response.data);
        } catch (error) {
            alert("Error fetching details");
        }
    }

    useEffect(() => {
        getRequests();
    }, []);

    return (
        <div className='adminnotifications'>
            <div className='adminnotificationsouter'>
                {
                    bookings.map((item, index) => (
                        <div className='adminnotificationsrequest' key={index}>
                            {/* Check if patientdetails is defined and has at least one item */}
                            <p className='adminnotificationsrequestp'>
                                You received a booking from {item.patientdetails && item.patientdetails[0] ? item.patientdetails[0].name : 'Unknown Patient'}
                            </p>
                            <Link to={`/doctor/bookingnotifications/writeprescription/${item._id}`}>
                                <button className='adminnotificationsrequestbutton'>Write Prescription</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BookingNotifications;
