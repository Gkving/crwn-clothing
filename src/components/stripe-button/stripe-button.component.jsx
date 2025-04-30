import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51NotYkKpHdzI61hbXYS4HdJ61kkhmEeFgCyVXKUdFgUNNS0SNuBMtdzqhsm9zTAuDFWY97HGo4NsPSdMaTgxmGA600S5XI6YDW';


   const onToken = token => {    
        console.log(token);
        alert('Payment Successful'); //just want to show the token in the console
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;