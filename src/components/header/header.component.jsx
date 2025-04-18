import React from "react";

import './header.styles.scss';

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
            {/* <a Link="/" className="logo">CROWN CLOTHING</a> */}
        </Link>
        <div className="options">
            < Link to="/shop" className="option">SHOP</Link>
            < Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser?
                <a onClick={() => auth.signOut()} className="option">SIGN OUT</a>
                :
                <Link to="/signin" className="option">SIGN IN</Link>
            }
            <CartIcon />
        </div>

        {hidden ? null : <CartDropdown />}
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps) (Header);
