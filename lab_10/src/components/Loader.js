import React from 'react';

const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px', width: '100%' }}>
            <div className="spinner"></div>
            <style>{`
                .spinner {
                    border: 4px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    border-top: 4px solid #e50914;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loader;
