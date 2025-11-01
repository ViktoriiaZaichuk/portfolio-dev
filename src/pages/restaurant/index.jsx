import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


const Restaurant = () => {
    // Update the document title
    useEffect(() => {
        document.title = 'Chez Gosha';
    }, []);


    const { t } = useTranslation();

    // GSAP animation
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []); 



    return (
        <div>Restaurant</div>
    )
}

export default Restaurant;