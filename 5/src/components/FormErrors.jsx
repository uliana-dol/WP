import React from 'react';

const FormErrors = ({ errors }) => {
  const entries = Object.entries(errors || {}).filter(([, v]) => v);
  if (!entries.length) return null;
  return (
    <div className="form-errors" style={{ color: 'red', margin: '8px 0' }}>
      <ul>
        {entries.map(([field, msg]) => (
          <li key={field}><strong>{field}:</strong> {msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormErrors;
