import React, { useState } from 'react';
import Hero from './Hero';
import PrimaryButton from './PrimaryButton';

const Home = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            <Hero />
            
            <section className="container details-section">
                
                <div className="details-flex">
                    
                    <div className="details-left">
                        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to FilmFest</h2>
                        <p style={{ fontSize: '1.2rem', color: '#b3b3b3', lineHeight: '1.6' }}>
                            We bring you the best cinematic experiences from around the world.
                            Dive into the magic of storytelling with our curated selection.
                        </p>
                    </div>

                    <div className="details-right">
                        <PrimaryButton onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'Hide Details' : 'View More Info'}
                        </PrimaryButton>

                        {showMore && (
                            <div className="more-info-text">
                                <h3 style={{ marginTop: 0 }}>About Our Festival</h3>
                                <p>FilmFest was founded in 2025 to celebrate the art of storytelling.</p>
                                <p>We feature independent films, massive blockbusters, and exclusive concerts.</p>
                                <p style={{ color: '#e50914', fontWeight: 'bold' }}>Join us for the next season!</p>
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </>
    );
};

export default Home;
