import './Map.scss';
import {GoogleMap, withGoogleMap } from 'react-google-maps';
import { connect } from 'react-redux';
import MarkerWrapper from './MarkerWrapper';
import React from 'react';

const Map = ({markers}) => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 53.5, lng: 9.99 }}>
            {markers.map(marker => <MarkerWrapper key={marker.message_id} marker={marker} />)}
        </GoogleMap>
    );
};

function mapStateToProps (state) {
    return {
        markers: state.markers
    };
}

export default connect(mapStateToProps)(withGoogleMap(Map));
