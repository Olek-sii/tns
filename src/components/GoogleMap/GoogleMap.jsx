import './GoogleMap.scss';
import {GoogleMap, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Map extends Component {
    render () {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 53.5, lng: 9.99 }}
            >
                {this.props.markers.map(marker =>
                    <Marker key={marker.message_id} position={marker.latLng}>
                        <InfoWindow>
                            <span>{marker.address}</span>
                        </InfoWindow>
                    </Marker>
                )}
            </GoogleMap>
        );
    }
}

function mapStateToProps (state) {
    return {
        markers: state.markers
    };
}

export default connect(mapStateToProps)(withGoogleMap(Map));
