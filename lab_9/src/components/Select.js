import React from 'react';

const Select = ({ options, onChange, label }) => {
    const styles = {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #333',
        backgroundColor: '#2e2e2e',
        color: 'white',
        marginRight: '10px',
        fontSize: '1rem'
    };

    return (
        <div style={{ display: 'inline-block', margin: '10px 0' }}>
            {label && <label style={{ marginRight: '10px' }}>{label}</label>}
            <select style={styles} onChange={onChange}>
                {options.map((opt, index) => (
                    <option key={index} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
