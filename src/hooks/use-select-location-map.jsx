import { useLoadScript } from "@react-google-maps/api";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"


const UseSelectLocationMap = () => {

    const libraries = ['places'];

    const navigate = useNavigate()

    const mapRef = useRef();

    const [selected, setSelected] = useState(null);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('')

    //load script
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCE4n2FNNx1tUYVwsLwnqbCkwoygOetgQA', // Replace with your API key
        libraries,
    });

    //map click
    const onMapClick = useCallback(async (event) => {
        setSelected({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        });

        // Reverse geocode to get address
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode(
            { location: { lat: event.latLng.lat(), lng: event.latLng.lng() } },
            (results, status) => {
                if (status === 'OK') {
                    if (results[0]) {
                        setCity(
                            results[0]?.address_components?.find((component)=> component?.types?.includes('administrative_area_level_2'))?.long_name ||
                            results[0]?.address_components?.find((component)=> component?.types?.includes('locality'))?.long_name
                        )
                        setAddress(results[0].formatted_address);
                    } else {
                        setCity('')
                        setAddress('No address found');
                    }
                } else {
                    setCity('')
                    setAddress('Geocoder failed due to: ' + status);
                }
            }
        );
    }, []);

    //on map load
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
        
        // Try to get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                
                    mapRef.current.panTo(pos);
                    setSelected(pos);
                
                    // Get address for current location
                    const geocoder = new window.google.maps.Geocoder();
                    geocoder.geocode({ location: pos }, (results, status) => {
                        if (status === 'OK' && results[0]) {
                        setCity(
                            results[0]?.address_components?.find((component)=> component?.types?.includes('administrative_area_level_2'))?.long_name ||
                            results[0]?.address_components?.find((component)=> component?.types?.includes('locality'))?.long_name
                        )
                        setAddress(results[0].formatted_address);
                        }
                    });
                },
                () => {
                    // Default to a known location if geolocation fails
                    const defaultPos = { lat: 40.7128, lng: -74.0060 }; // New York
                    mapRef.current.panTo(defaultPos);
                }
            );
        } else {
            // Browser doesn't support Geolocation
            const defaultPos = { lat: 40.7128, lng: -74.0060 }; // New York
            mapRef.current.panTo(defaultPos);
        }
    }, []);

    //select location
    const handleSelectLocation = () =>{
        navigate('/personalDetails',{state:{address: address, city: city}})
    }

  return {
    handleSelectLocation,
    selected,
    address,
    city,
    isLoaded,
    loadError,
    onMapClick,
    onMapLoad
  }
}

export default UseSelectLocationMap
