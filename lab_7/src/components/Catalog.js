import React from 'react';
import FilmsGallery from './FilmsGallery';
import PrimaryButton from './PrimaryButton';
import Select from './Select';

const Catalog = () => {
    const sortOptions = [
        { value: 'newest', label: 'Newest First' },
        { value: 'oldest', label: 'Oldest First' },
        { value: 'rating', label: 'By Rating' }
    ];

    return (
        <div className="container" style={{ padding: '40px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Catalog</h2>
                
                <div className="controls">
                    <Select 
                        options={sortOptions} 
                        onChange={(e) => console.log(e.target.value)} 
                    />
                    <PrimaryButton onClick={() => console.log("Apply Filter")}>
                        Apply
                    </PrimaryButton>
                </div>
            </div>

            <FilmsGallery />
        </div>
    );
};

export default Catalog;
