import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return(
                    <ul key="unauthorized"className="navbar-nav">                       
                    </ul>,
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link"href="/login">Login</a></li>
                    </ul>
                )
            default:
                return [
                    <ul key="authorized"className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                    </ul>,
                    <ul key="logout"className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/api/logout">Logout</a>
                        </li>
                    </ul>
                ]
        }
    }
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to={this.props.auth ? '/dashboard' : '/'} className="navbar-brand">WarRoom</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbar" 
                    aria-controls="navbar" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>                       
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    {this.renderContent()}
                </div>
            </nav>
        );
    }
}

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Navbar);