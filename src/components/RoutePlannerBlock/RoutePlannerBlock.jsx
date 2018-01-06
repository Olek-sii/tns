import './RoutePlannerBlock.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class RoutePlannerBlock extends Component {
    render () {
        return (
            <div>
                <span>RouterPlannerBlock</span>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        searchPoints: state.markers
    };
}

export default connect(mapStateToProps)(RoutePlannerBlock);
