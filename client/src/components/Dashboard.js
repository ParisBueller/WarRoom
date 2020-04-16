import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUser } from '../actions/index';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    renderDashboard() {
        if (this.props.auth === null || false) {
            return (
                <div className="lds-roller-container">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            );
        }
        return (
            <div>This is the dashboard</div>
        )
    }

    render() {
        return(
            <div>
                {this.renderDashboard()}
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { fetchUser})(Dashboard);