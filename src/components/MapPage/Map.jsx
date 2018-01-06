import { GoogleMap, withGoogleMap } from 'react-google-maps';
import { connect } from 'react-redux';
import MarkerWrapper from './MarkerWrapper';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    markers: PropTypes.array.isRequired
};

const Map = ({markers}) => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 53.5, lng: 9.99 }}>
            {markers.map(marker => <MarkerWrapper key={marker.message_id} marker={marker} />)}
        </GoogleMap>
    );
};

Map.propTypes = propTypes;

function mapStateToProps (state) {
    return {
        markers: state.markers
    };
}

export default connect(mapStateToProps)(withGoogleMap(Map));
