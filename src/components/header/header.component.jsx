import React from "react";

import './header.styles.scss';

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
            {/* <a Link="/" className="logo">CROWN CLOTHING</a> */}
        </Link>
        <div className="options">
            <a Link="/shop" className="option">SHOP</a>
            <a Link="/contact" className="option">CONTACT</a>
            {
                currentUser?
                <a onClick={() => auth.signOut()} className="option">SIGN OUT</a>
                :
                <Link to="/signin" className="option">SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps) (Header);
