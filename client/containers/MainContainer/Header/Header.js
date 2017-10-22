import React, { Component } from 'react';

import Profile from 'client/components/Profile/Profile';

import 'client/css/components/header.scss'

class Header extends Component {
    constructor () {
        super();
        this.state = {
            name: "John Doe",
            studentId: "B33043"
        }
    }
    render () {
        return (
            <header className="header">
                <h1>Ainetele registreerumine</h1>
                <Profile name={this.state.name} studentId={this.state.studentId} />
                <input placeholder="Otsi..."/>
            </header>
        )
    }
}

export default Header;