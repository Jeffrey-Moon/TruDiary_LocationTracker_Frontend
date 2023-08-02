// MapView.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const MapView = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/locations`);
                if (Array.isArray(response.data)) {
                    setLocations(response.data);
                } else {
                    console.error('Response data is not an array:', response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchLocations();
    }, []);

    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                id="map"
                mapContainerStyle={{ height: "100vh", width: "100%" }}
                zoom={10}
                center={{ lat: 37.7749, lng: -122.4194 }}  // Set this to the user's location
            >
                {locations.map((location, index) => (
                    <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapView;
