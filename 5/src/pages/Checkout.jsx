import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormErrors from '../components/FormErrors';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/actions';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart || []);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    age: '',
    cardNumber: '',
  };

  // One example RegEx (card number 16 digits). Email also validated.
  const cardRegex = /^[0-9]{16}$/;

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required')
      .max(30, 'First name must be at most 30 characters')
      .matches(/^[A-Za-z\s-]+$/, 'First name must contain only letters, spaces or hyphens'),
    lastName: Yup.string()
      .required('Last name is required')
      .max(30, 'Last name must be at most 30 characters')
      .matches(/^[A-Za-z\s-]+$/, 'Last name must contain only letters, spaces or hyphens'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is incorrect (must be a valid email address)'),
    // phone as numeric (non-string requirement)
    phone: Yup.number()
      .typeError('Phone must contain only numbers')
      .integer('Phone must be an integer')
      .positive('Phone must be positive')
      .test('len', 'Phone must be at least 7 digits', (v) => !v || String(v).length >= 7)
      .required('Phone is required'),
    address: Yup.string()
      .required('Address is required')
      .min(10, 'Address must be at least 10 characters'),
    age: Yup.number()
      .typeError('Age must be a number')
      .integer('Age must be an integer')
      .min(12, 'Age must be 12 or older')
      .max(120, 'Age is not valid')
      .required('Age is required'),
    cardNumber: Yup.string()
      .required('Card number is required')
      .matches(cardRegex, 'Card number must be 16 digits (numbers only)'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // simulate API call then redirect
    setTimeout(() => {
      dispatch(clearCart());
      setSubmitting(false);
      navigate('/success', { state: { order: { items: cart, buyer: values } } });
    }, 600);
  };

  return (
    <div>
      <h3>Checkout</h3>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        {({ errors, touched, isSubmitting }) => {
          // Build an errors object with messages only for touched fields (for FormErrors)
          const visibleErrors = Object.keys(errors).reduce((acc, k) => {
            if (touched[k]) acc[k] = errors[k];
            return acc;
          }, {});
          return (
            <Form>
              <FormErrors errors={visibleErrors} />

              <div>
                <label>First name</label>
                <Field name="firstName" />
                {touched.firstName && errors.firstName && (
                  <div className="field-error">{errors.firstName}</div>
                )}
              </div>

              <div>
                <label>Last name</label>
                <Field name="lastName" />
                {touched.lastName && errors.lastName && (
                  <div className="field-error">{errors.lastName}</div>
                )}
              </div>

              <div>
                <label>Email</label>
                <Field name="email" type="email" />
                {touched.email && errors.email && (
                  <div className="field-error">{errors.email}</div>
                )}
              </div>

              <div>
                <label>Phone</label>
                <Field name="phone" type="tel" />
                {touched.phone && errors.phone && (
                  <div className="field-error">{errors.phone}</div>
                )}
              </div>

              <div>
                <label>Address</label>
                <Field name="address" />
                {touched.address && errors.address && (
                  <div className="field-error">{errors.address}</div>
                )}
              </div>

              <div>
                <label>Age</label>
                <Field name="age" type="number" />
                {touched.age && errors.age && (
                  <div className="field-error">{errors.age}</div>
                )}
              </div>

              <div>
                <label>Card number</label>
                <Field name="cardNumber" placeholder="1234123412341234" />
                {touched.cardNumber && errors.cardNumber && (
                  <div className="field-error">{errors.cardNumber}</div>
                )}
              </div>

              <div style={{ marginTop: 12 }}>
                <button type="submit" disabled={isSubmitting}>Place order</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
