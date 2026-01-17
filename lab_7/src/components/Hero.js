import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h2>Discover Great Films</h2>
                    <p>Curated selections, beautiful stills, and film details — enjoy the view.</p>
                    <div className="cta">
                        <button onClick={() => navigate('/catalog')}>
                            Explore Films
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
