import './Header.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../authentication/SignOutButton';

export default class Header extends Component {
    render () {
        return (
            <div className='header'>
                <div className="links-container">
                    <div className='link-wrapper'>
                        <Link to='/'><button>RoutePlanner</button></Link>
                    </div>
                    <div className='link-wrapper'>
                        <Link to='/messages'><button>Messages</button></Link>
                    </div>
                    <div className='link-wrapper'>
                        <Link to='/map'><button>Map</button></Link>
                    </div>
                </div>
                <div className='sign-out-button'>
                    <SignOutButton />
                </div>
            </div>
        );
    }
}
