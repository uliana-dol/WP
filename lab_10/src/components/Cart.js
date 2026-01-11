import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ padding: '50px', textAlign: 'center' }}>
                <h2>Your Cart is Empty</h2>
                <button 
                    onClick={() => navigate('/catalog')}
                    style={{ marginTop: '20px', padding: '10px 20px', background: '#e50914', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                    Go back to Catalog
                </button>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <h2 style={{ marginBottom: '30px' }}>Shopping Cart</h2>
            
            <div className="cart-list">
                {cartItems.map(item => (
                    <div key={item.id} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        background: '#2e2e2e', 
                        padding: '20px', 
                        borderRadius: '8px', 
                        marginBottom: '15px' 
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <img src={item.img} alt={item.title} style={{ width: '60px', height: '90px', objectFit: 'cover', borderRadius: '4px' }} />
                            <div>
                                <h4 style={{ margin: '0 0 5px 0' }}>{item.title}</h4>
                                <p style={{ margin: 0, color: '#b3b3b3' }}>{item.price} UAH</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#1a1a1a', padding: '5px 10px', borderRadius: '4px' }}>
                                <button onClick={() => dispatch(decreaseQuantity(item.id))} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(increaseQuantity(item.id))} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>+</button>
                            </div>

                            <button 
                                onClick={() => dispatch(removeFromCart(item.id))}
                                style={{ background: 'transparent', border: '1px solid #e50914', color: '#e50914', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '30px', textAlign: 'right', borderTop: '1px solid #333', paddingTop: '20px' }}>
                <h3>Total: <span style={{ color: '#e50914' }}>{totalPrice} UAH</span></h3>
                <button style={{ padding: '12px 30px', background: '#e50914', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
