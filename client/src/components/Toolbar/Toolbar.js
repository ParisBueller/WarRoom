import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

class Toolbar extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return(
                    <ul key="unauthorized">                       
                    </ul>,
                    <ul>
                        <li><a href="/login">Login</a></li>
                    </ul>
                )
            default:
                return [
                    <ul key="authorized">
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>,
                    <ul key="logout">
                        <li>
                            <a href="/api/logout">Logout</a>
                        </li>
                    </ul>
                ]
        }
    }

    render() {
        return(
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div className="toolbar_toggle_button">
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                    <Link to={this.props.auth ? '/dashboard' : '/'} className="toolbar_logo">WarRoom </Link>
                    <div className="spacer" />
                    <div className="toolbar_navigation_items">
                        {this.renderContent()}
                    </div>
                </nav>
            </header>
        );
    }
};

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Toolbar);