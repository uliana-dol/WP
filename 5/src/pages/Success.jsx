import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();
  const order = state?.order;

  return (
    <section className="container success-page">
      <h2>Thank you — your order is placed!</h2>
      {order ? (
        <div>
          <h3>Buyer</h3>
          <p>{order.buyer.firstName} {order.buyer.lastName}</p>
          <p>{order.buyer.email}</p>
          <h3>Items</h3>
          <ul>
            {order.items.map((it) => (
              <li key={it.id}>{it.name} × {it.qty || 1}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Your order details are not available.</p>
      )}
      <div style={{ marginTop: 12 }}>
        <Link to="/">Back to Home</Link>
      </div>
    </section>
  );
};

export default Success;
