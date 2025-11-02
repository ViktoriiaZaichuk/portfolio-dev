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
                        <p className="loading-subtitle">Camarade, prépare ton estomac !</p>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="main-content">
                
                {/* Communist banner top */}
                <div className="communist-banner">
                    <div className="banner-symbol banner-symbol-left">☭</div>
                    <div className="banner-symbol banner-symbol-right">☭</div>
                    <p className="banner-text">★ DÎNER DU PEUPLE 2025 ★</p>
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
                            Bienvenue au <span className="highlight-bold">Restaurant Pereztroika</span>, 
                            établissement <span className="text-semibold">certifié par le Soviet Suprême de la Gastronomie</span> ! 
                            L'hospitalité ukrainienne rencontre la nostalgie soviétique dans une atmosphère 
                            aussi chaleureuse qu'un <span className="highlight">samovar collectiviste</span>.
                        </p>
                        
                        <div className="description-highlight-box">
                            <p className="description-highlight">
                                Notre <span className="text-semibold">chef prolétaire</span> vous promet une soirée où les portions sont 
                                aussi généreuses que les promesses du <span className="highlight-bold">Plan Quinquennal</span>, 
                                où la vodka coule comme les discours du <span className="highlight-bold">Politburo</span>, 
                                et où chaque bouchée célèbre la <span className="text-italic">gloire du collectivisme culinaire</span> !
                            </p>
                        </div>
                        
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
                <div className="warning-banner">
                    <p className="warning-text">
                        ⚠️ ATTENTION CAMARADES : Les retardataires seront envoyés au goulag ⚠️
                    </p>
                </div>

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
                </section>

                {/* Footer propaganda */}
                <footer className="restaurant-footer">
                    <div className="footer-symbol">☭</div>
                    <p className="footer-quote">
                        "Dans la mère patrie de la gastronomie,<br/>
                        tous les estomacs sont égaux<br/>
                        (mais certains mangent plus que d'autres)"
                    </p>
                    <div className="footer-badge">
                        <p className="footer-badge-text">À BIENTÔT, ТОВАРИЩ ! 🌻</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Restaurant;