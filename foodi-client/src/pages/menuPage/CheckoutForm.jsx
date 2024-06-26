import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { FaPaypal } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        if (typeof price !== 'number' || price < 1) {
            console.log('Invalid price value. Must be a number greater than or equal to 1.');
            return;
        }

        // Convert price to the smallest currency unit
        const amount = Math.round(price * 100);

        axiosSecure.post('/create-payment-intent', { price: amount })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
            .catch(error => {
                console.error('Error creating payment intent:', error);
            });
    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('success!');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        } else if (paymentIntent?.status === "succeeded") {
            console.log(paymentIntent.id);
            setCardError(`Your transactionId is ${paymentIntent.id}`);

            const paymentInfo = {
                email: user.email,
                transitionId: paymentIntent.id,
                price,
                quantity: cart.length,
                status: "order pending",
                itemName: cart.map(item => item.name),
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId)
            };

            axiosSecure.post('/payments', paymentInfo)
                .then(res => {
                    console.log(res.data);
                    navigate('/order');
                });
        }
    };

    return (
        <div className='flex flex-col sm:flex-row justify-start items-start gap-8'>
            {/* left side */}
            <div className='md:w-1/2 w-full space-y-3'>
                <h4 className='text-lg font-semibold'>Order Summary</h4>
                <p>Total Price : ${price}</p>
                <p>Number of Items: {cart.length}</p>
            </div>
            {/* right side */}
            <div className='md:w-1/2 w-full space-y-5 card shrink-0 max-w-sm shadow-2xl bg-base-100 px-4 py-8'>
                <h4 className='text-lg font-semibold'>Process your Payment!</h4>
                <h5 className='font-medium'>Credit/Debit Card</h5>

                {/* stripe form */}
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button type="submit" disabled={!stripe} className='btn btn-sm mt-5 btn-primary w-full text-white'>
                        Pay
                    </button>
                </form>
                {cardError && <p className='text-red italic text-x'>{cardError}</p>}

                {/* paypal */}
                <div className='mt-5 text-center'>
                    <hr />
                    <button type="submit" className='btn btn-sm mt-5 bg-orange-500 text-white'>
                        <FaPaypal /> Pay with Paypal
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;
