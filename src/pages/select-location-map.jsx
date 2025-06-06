import { useState, useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import LoginPageTemplate from '../components/template/login-page-template';
import TransSpan from '../components/translation/trans-span';
import ICONS from '../icons/icons';
import IMAGES from '../images/images';
import Button from '../components/button/button'
import UseSelectLocationMap from '../hooks/use-select-location-map';

const SelectLocationMap = () => {

  const {
    address,
    city,
    handleSelectLocation,
    isLoaded,
    loadError,
    onMapClick,
    onMapLoad,
    selected
  } = UseSelectLocationMap()

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <LoginPageTemplate
    image={IMAGES.selectLocationImage}
    >
      <div className='h-full overflow-y-auto'>
        <div className='flex flex-col gap-[32px]'>
            <TransSpan className='lg:text-[32px] text-[24px] font-bold text-graniteGray'>
                Please Select Location
            </TransSpan>

            <GoogleMap
                mapContainerStyle={{
                    width: '100%',
                    height: '432px',
                    borderRadius: '16px'
                }}
                zoom={10}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {selected && (
                <Marker
                    position={{ lat: selected.lat, lng: selected.lng }}
                />
                )}
            </GoogleMap>

            <div className='flex flex-col gap-[24px]'>
              <div className='flex items-center gap-[16px]'>
                  <span className='text-jetGray text-[30px]'>{ICONS.location}</span>
                  <div className='flex flex-col gap-[4px]'>
                    <span className='text-[18px] font-semibold text-jetGray'>{city}</span>
                    <span className='text-[16px] text-stormGray'>{address}</span>
                  </div>
              </div>  

              <Button
              name={'Select Location'}
              onClick={handleSelectLocation}
              />
            </div>   
        </div>
      </div>
    </LoginPageTemplate>
  );
};

export default SelectLocationMap;