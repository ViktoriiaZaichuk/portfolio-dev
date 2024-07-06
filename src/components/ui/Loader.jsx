import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

const Loader = () => {
    const textRef = useRef();

    useEffect(() => {
        const text = "Web development";
        let tl = gsap.timeline();

        // Split the text into characters and create animation for each character
        [...text].forEach((char, index) => {
            tl.to(textRef.current, {
                textContent: text.substring(0, index + 1),
                duration: 0.03,
                ease: "power1.inOut",
                delay: index === 0 ? 0.5 : 0.1 
            });
        });

        // Animation to fade out the loader after typing animation completes
        tl.to(textRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                console.log("Typing animation complete");
            }
        });
    }, []);

    return (
        <div className="loader">
            <div className='animation-txt' ref={textRef}></div>
        </div>
    );
}

export default Loader;
