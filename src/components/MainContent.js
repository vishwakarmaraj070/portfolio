import React, { Component } from 'react'
import Skills from './Skills';
import Client from './Client';

export default class MainContent extends Component {
    render() {
        return (
            <React.Fragment>
                {/* skills here */}
                <Skills />

                {/* client */}
                <Client />
            </React.Fragment>
        )
    }
}
