import React from 'react';
import { Icon } from 'antd';
import logo1 from '../assets/images/logo1.png';

export class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo1} className="App-logo" alt="logo" />
                <div className="App-title">Funcial</div>
                {this.props.isLoggedIn ?
                    <a className="logout" onClick={this.props.handleLogout} >
                        <Icon type="logout"/>{' '}Logout
                    </a>
                    :
                    null}
            </header>
        );
    }
}