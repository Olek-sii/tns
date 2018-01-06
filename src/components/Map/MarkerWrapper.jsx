import './Map.scss';
import { Marker, InfoWindow } from 'react-google-maps';
import React, { Component } from 'react';

class MarkerWrapper extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen});
    };
    render () {
        return (
            <Marker
                position={this.props.marker.latLng}
                onClick={this.toggleOpen}
            >
                {
                    this.state.isOpen &&
                    <InfoWindow onCloseClick={this.toggleOpen}>
                        <span>{this.props.marker.address}</span>
                    </InfoWindow>
                }
            </Marker>
        );
    }
}

export default MarkerWrapper;
