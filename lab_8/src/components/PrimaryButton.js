import React from 'react';

const PrimaryButton = ({ children, onClick, type = 'button' }) => {
    const styles = {
        padding: '12px 30px',
        fontSize: '1rem',
        backgroundColor: '#9b0f16ff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background 0.3s'
    };

    return (
        <button type={type} onClick={onClick} style={styles}>
            {children}
        </button>
    );
};

export default PrimaryButton;
