// import axios from 'axios';
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Booking = () => {
//     const { dressId } = useParams();
//     const [bookingDetails, setBookingDetails] = useState({
//     orderid: 0,
//     dressid: "",
//     username: "",
//     address: "",
//     location: "",
//     pincode: "",
//     mobilenumber: ""
//     });

//     const handleChange = (e) => {
//         setBookingDetails({
//             ...bookingDetails,
//             [e.target.name]: e.target.value
//         });
//     };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const bookingData = { dressId, ...bookingDetails };

//     try {
//         const response = await axios.post('https://localhost:7260/api/Values/user', bookingData);
//         console.log('Booking Confirmed:', response.data);
//         alert('Booking Confirmed!');
//     } catch (error) {
//         console.error('Error confirming booking:', error);
//         alert('Failed to confirm booking. Please try again.');
//     }
// };

//     return (
//         <div style={{ textAlign: 'center', padding: '20px' }}>
//             <h1>Booking for Dress ID: {dressId}</h1>
//             <p>Complete your booking by providing details below.</p>

//             <form 
//                 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
//                 onSubmit={handleSubmit}
//             >
//                 <input 
//                     type="text" name="username" placeholder="Your Name" 
//                     style={{ padding: '10px', margin: '10px', width: '250px' }} 
//                     value={bookingDetails.username} onChange={handleChange}
//                 />
//                 <input 
//                     type="text" name="address" placeholder="Your Address" 
//                     style={{ padding: '10px', margin: '10px', width: '250px' }} 
//                     value={bookingDetails.address} onChange={handleChange}
//                 />
//                 <input 
//                     type="text" name="location" placeholder="Your Location" 
//                     style={{ padding: '10px', margin: '10px', width: '250px' }} 
//                     value={bookingDetails.location} onChange={handleChange}
//                 />
//                 <input 
//                     type="text" name="pincode" placeholder="Your Pincode" 
//                     style={{ padding: '10px', margin: '10px', width: '250px' }} 
//                     value={bookingDetails.pincode} onChange={handleChange}
//                 />
//                 <input 
//                     type="text" name="mobilenumber" placeholder="Your Mobile Number" 
//                     style={{ padding: '10px', margin: '10px', width: '250px' }} 
//                     value={bookingDetails.mobilenumber} onChange={handleChange}
//                 />

//                  <input 
//                     type="text" name="Dressnumber" placeholder="Dress number" 
//                     style={{ padding: '10px', margin: '10px', width: '250px' }} 
//                     value={bookingDetails.dressid} onChange={handleChange}
//                 />
//                 <button 
//                     type="submit"
//                     style={{
//                         backgroundColor: '#e91e63',
//                         color: '#fff',
//                         padding: '10px 15px',
//                         fontSize: '14px',
//                         border: 'none',
//                         borderRadius: '5px',
//                         cursor: 'pointer',
//                         marginTop: '10px'
//                     }}
//                 >
//                     Confirm Booking
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Booking;
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { dressId } = useParams();
    const [bookingDetails, setBookingDetails] = useState({
        orderid: 0,
        dressid: dressId, // Initialize dressid with the value from URL
        username: '',
        address: '',
        location: '',
        pincode: '',
        mobilenumber: ''
    });

    const handleChange = (e) => {
        setBookingDetails({
            ...bookingDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = { ...bookingDetails };

        try {
            const response = await axios.post('https://localhost:7260/api/Values/user', bookingData);
            console.log('Booking Confirmed:', response.data);
            alert('Booking Confirmed!');
        } catch (error) {
            console.error('Error confirming booking:', error);
            alert('Failed to confirm booking. Please try again.');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1> Book Dress : {dressId}</h1>
            <p>Complete your booking by providing details below.</p>

            <form 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" name="username" placeholder="Your Name" 
                    style={{ padding: '10px', margin: '10px', width: '250px' }} 
                    value={bookingDetails.username} onChange={handleChange}
                />
                <input 
                    type="text" name="address" placeholder="Your Address" 
                    style={{ padding: '10px', margin: '10px', width: '250px' }} 
                    value={bookingDetails.address} onChange={handleChange}
                />
                <input 
                    type="text" name="location" placeholder="Your Location" 
                    style={{ padding: '10px', margin: '10px', width: '250px' }} 
                    value={bookingDetails.location} onChange={handleChange}
                />
                <input 
                    type="text" name="pincode" placeholder="Your Pincode" 
                    style={{ padding: '10px', margin: '10px', width: '250px' }} 
                    value={bookingDetails.pincode} onChange={handleChange}
                />
                <input 
                    type="text" name="mobilenumber" placeholder="Your Mobile Number" 
                    style={{ padding: '10px', margin: '10px', width: '250px' }} 
                    value={bookingDetails.mobilenumber} onChange={handleChange}
                />
                {/* Editable Dress ID input field */}
                <input 
                    type="text" name="dressid" placeholder="Dress ID" 
                    style={{ padding: '10px', margin: '10px', width: '250px' }} 
                    value={bookingDetails.dressid} onChange={handleChange}
                />
                <button 
                    type="submit"
                    style={{
                        backgroundColor: '#e91e63',
                        color: '#fff',
                        padding: '10px 15px',
                        fontSize: '14px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default Booking;
