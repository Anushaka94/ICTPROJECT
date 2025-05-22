import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomepageComponent = () => {
    const [dresses, setDresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7260/api/Values');
                setDresses(response.data);
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
    if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Dress Collection</h1>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '20px', 
                justifyContent: 'center' 
            }}>
                {dresses.map((dress) => (
                    <div 
                        key={dress.dressid} 
                        style={{ 
                            borderRadius: '10px', 
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', 
                            padding: '20px', 
                            background: '#fff', 
                            textAlign: 'center', 
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img src={dress.photo} alt={dress.dressname} style={{ 
                            width: '100%', 
                            height: '200px', 
                            objectFit: 'cover', 
                            borderRadius: '8px' 
                        }} />
                        <h3 style={{ marginTop: '10px', fontWeight: 'bold' }}>{dress.dressname}</h3>
                        <p style={{ margin: '5px 0', fontSize: '14px' }}>Size: {dress.size}</p>
                         <p style={{ margin: '5px 0', fontSize: '14px' }}>Dressid: {dress.dressid}</p>
                        <p style={{ margin: '5px 0', fontSize: '16px', fontWeight: 'bold', color: '#e91e63' }}>₹{dress.price}</p>
                        <button 
                            onClick={() => navigate(`/booking`)}
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
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomepageComponent;
