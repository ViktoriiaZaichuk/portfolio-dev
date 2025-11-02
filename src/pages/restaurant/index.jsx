import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Restaurant = () => {
    useEffect(() => {
        document.title = 'Pereztroika';
    }, []);

    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []); 

    return (
        <div className="restaurant-container">
            {/* Loading Animation */}
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-content">
                        <div className="loading-symbol">☭</div>
                        <h1 className="loading-title">PEREZTROIKA</h1>
                        <div className="loading-bar-container">
                            <div className="loading-bar"></div>
                        </div>
                        {/* <div className='loading-spinning'>☆</div> */}
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="main-content">
                
                {/* Communist banner top */}
                <div className="communist-banner">
                    <div className="banner-symbol banner-symbol-left">☭</div>
                    <div className="banner-symbol banner-symbol-right">☭</div>
                    <p className="banner-text">☆ DÎNER DU PEUPLE 2025 ☆</p>
                </div>

                {/* Header - Restaurant Name */}
                <header className="restaurant-header">
                    <h1 className="restaurant-name">
                        PEREZTROIKA
                    </h1>
                    
                    <div className="restaurant-badge">
                        <p className="badge-text">RESTAURANT DU CAMARADE</p>
                    </div>

                    <p className="restaurant-subtitle">
                        Cuisine Ukrainienne • Ambiance Soviétique
                    </p>
                </header>

                {/* Propaganda poster style message */}
                <div className="propaganda-message">
                    <p className="propaganda-text"> CONVOCATION OFFICIELLE </p>
                </div>

                {/* Restaurant Description */}
                <section className="description-section">
                    <div className="description-content">
                        <p className="description-intro">
                            <span className="text-semibold"> Votre présence est requise au </span> <span className="highlight-bold">Restaurant Pereztroika</span>, 
                            <span className="text-semibold"> établissement d'état où 'hospitalité ukrainienne rencontre la nostalgie soviétique.</span> ! 
                        </p>
                        
                        <p className="description-footer">
                            Ici, nous servons la <em className="highlight-emphasis">vraie</em> cuisine du peuple : 
                            authentique, copieuse, et accompagnée de chants révolutionnaires en fond sonore.
                        </p>
                    </div>
                </section>

                {/* Event Details - Propaganda style */}
                <section className="event-section">
                    <div className="event-stars-top">★ ☭ ★</div>

                    <p className="event-order">ORDRE DU PARTI : PRÉSENCE REQUISE</p>
                    
                    <h2 className="event-date">SAMEDI<br/>8 NOVEMBRE</h2>
                    
                    <div className="event-divider">☆ ☆ ☆</div>
                    
                    <p className="event-time">19H00</p>

                    <div className="event-stars-bottom">★ ☭ ★</div>
                </section>

                {/* Warning banner */}
                {/* <div className="warning-banner">
                    <p className="warning-text">
                        ⚠  ATTENTION CAMARADES : Les retardataires seront envoyés au goulag  ⚠
                    </p>
                </div> */}

                {/* DRESS CODE SECTION */}
                <section className="dress-code-section">
                   {/*  <div className="dress-code-badge">DIRECTIVE VESTIMENTAIRE</div> */}
                    
                    <div className="dress-code-content">
                        <div className="dress-code-header">
                            <span className="dress-code-symbol">⚑</span>
                            <h3 className="dress-code-title">TENUE OBLIGATOIRE</h3>
                            <span className="dress-code-symbol">⚑</span>
                        </div>
                        
                        <p className="dress-code-text">
                            Correcte, prolétarienne et <span className="dress-code-highlight">sans frivolités bourgeoises</span>.
                        </p>
                    </div>
                </section>

                {/* Menu Notice */}
                <section className="menu-section">
                    <div className="menu-badge">CONFIDENTIEL</div>

                    <p className="menu-title">
                        Le menu sera révélé<br/>le jour du dîner
                    </p>
                    
                    
                    <p className="menu-quote">
                        "La surprise fait partie du plan !"<br/>
                        <span className="menu-quote-author">— Lénine (probablement)</span>
                    </p>

                    {/* NEW DRINKS DIRECTIVE SECTION */}
                    <div className="drinks-directive">
                        <div className="drinks-content">
                            <div className="drinks-header">
                                <span className="drinks-symbol">▓</span>
                                <h3 className="drinks-title">CONTRIBUTION OBLIGATOIRE</h3>
                                <span className="drinks-symbol">▓</span>
                            </div>
                            
                            <p className="drinks-text">
                                Chaque camarade est invité à contribuer à la <span className="drinks-highlight">gloire collective</span> en 
                                apportant une boisson de son choix — alcoolisée ou non.
                            </p>
                            
                            <div className="drinks-emphasis-box">
                                <p className="drinks-emphasis">
                                    Le Comité Central encourage le respect des traditions,<br/>
                                    la <strong>VODKA</strong> demeurant la boisson du peuple.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </section>
                {/* Footer propaganda */}
                <footer className="restaurant-footer">
                    <div className="footer-symbol">☭</div>
                    <div className="footer-badge">
                        <p className="footer-badge-text">☆ À BIENTÔT, ТОВАРИЩ ! ☆</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Restaurant;