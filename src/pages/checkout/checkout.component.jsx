import React from "react";
import './checkout.styles.scss';
import  {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";


const CheckoutPage =({CartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            CartItems.map(CartItem => (
                    <CheckoutItem key={CartItem.id} cartItem={CartItem} />
                )
            )
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 04/25 - CVV: 123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    CartItems: selectCartItems,
    total: selectCartTotal
});


export default connect(mapStateToProps)(CheckoutPage);