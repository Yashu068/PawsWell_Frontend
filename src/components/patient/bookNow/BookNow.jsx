import React, { useEffect, useState } from 'react';
import './BookNow.css';
import axios from 'axios';

const BookNow = ({ date, id, email }) => {
    const [availability, setAvailability] = useState({});
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [alreadyBookedSlots, setAlreadyBookedSlots] = useState([]);
    const [bookingData, setBookingData] = useState({
        doctor_id: id,
        patient_id: localStorage.getItem("userid"),
        bookingDate: date,
        bookingTime: ""
    });

    const getDoctorsDetails = async () => {
        try {
            const dataset = await axios.get(`https://pawswell-backend.onrender.com/getdoctoravailability`, { params: { id: id } });
            setAvailability(dataset.data);
        } catch (error) {
            alert("Error fetching doctor details");
        }
    };

    const getAlreadyBookedData = async () => {
        try {
            const dataset = await axios.get(`https://pawswell-backend.onrender.com/getalreadybookedslots`, { params: { id: id } });
            console.log(dataset);
            setAlreadyBookedSlots(dataset.data.data);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        setBookingData(prev => ({ ...prev, bookingDate: date }));
    }, [date]);

    useEffect(() => {
        getDoctorsDetails();
        getAlreadyBookedData();
    }, []);

    const generateTimeSlots = (from, to, slotTime) => {
        const slots = [];
        let currentTime = new Date(0, 0, 0, ...from.split(':').map(Number));
        const endTime = new Date(0, 0, 0, ...to.split(':').map(Number));

        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            console.error('Invalid date provided to generateTimeSlots:', date);
            return [];
        }
        const selectedDate = parsedDate.toISOString().split('T')[0];

        while (currentTime < endTime) {
            const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const isAlreadyBooked = alreadyBookedSlots.some(slot => {
                const bookedDate = new Date(slot.bookingDate).toISOString().split('T')[0];
                return bookedDate === selectedDate && slot.bookingTime === formattedTime;
            });

            slots.push({
                time: formattedTime,
                disabled: isAlreadyBooked || selectedSlot === formattedTime,
            });

            currentTime.setMinutes(currentTime.getMinutes() + slotTime);
        }

        return slots;
    };

    const handleBookAppointment = (timeSlot) => {
        setSelectedSlot(timeSlot);
    };

    const bookSlot = async () => {
        const updatedBookingData = {
            ...bookingData,
            bookingTime: selectedSlot
        };

        try {
            const token = localStorage.getItem('authToken');
            await axios.post(`https://pawswell-backend.onrender.com/submitbookings`, updatedBookingData, {headers: {
                Authorization: `Bearer ${token}`
              }
               });
            alert('slot booked');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            {availability && availability.morning && (
                <div>
                    <div className='doctor-availability-item'>
                        <h4>Morning</h4>
                        {generateTimeSlots(availability.morning.from, availability.morning.to, availability.time_slot).map((slot, index) => (
                            <button
                                className={`booknowbutton ${slot.disabled ? 'disabled' : ''}`}
                                key={index}
                                onClick={() => handleBookAppointment(slot.time)}
                                disabled={slot.disabled}
                            >
                                {slot.time}
                            </button>
                        ))}
                        {availability.afternoon && (
                            <>
                                <h4>Afternoon</h4>
                                {generateTimeSlots(availability.afternoon.from, availability.afternoon.to, availability.time_slot).map((slot, index) => (
                                    <button
                                        className={`booknowbutton ${slot.disabled ? 'disabled' : ''}`}
                                        key={index}
                                        onClick={() => handleBookAppointment(slot.time)}
                                        disabled={slot.disabled}
                                    >
                                        {slot.time}
                                    </button>
                                ))}
                            </>
                        )}
                        {availability.evening && (
                            <>
                                <h4>Evening</h4>
                                {generateTimeSlots(availability.evening.from, availability.evening.to, availability.time_slot).map((slot, index) => (
                                    <button
                                        className={`booknowbutton ${slot.disabled ? 'disabled' : ''}`}
                                        key={index}
                                        onClick={() => handleBookAppointment(slot.time)}
                                        disabled={slot.disabled}
                                    >
                                        {slot.time}
                                    </button>
                                ))}
                            </>
                        )}
                    </div>
                    <div>
                        <button className='bookbuttondashboardt' onClick={bookSlot}>Book Slot</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookNow;
