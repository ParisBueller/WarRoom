import React from 'react';
import { connect } from 'react-redux';

class SideDrawer extends React.Component {
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
        let drawerClasses = ['side-drawer'];
        if (this.props.show) {
            drawerClasses = ['side-drawer open']
        }
        return(
            <nav className={drawerClasses}>
                {this.renderContent()}
            </nav>
        )
    }
};

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(SideDrawer);
