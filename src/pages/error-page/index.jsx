import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from "../../components/layout/Layout";

const ErrorPage = () => {
    // Update the document title
    useEffect(() => {
        document.title = '404 - Page not found';
    }, []);

    return (
        <Layout>
            <main className="error-page">
                <div>
                    <h1>404 Page not found</h1>
                
                    <Link to='/portfolio-dev'>
                        <svg width="71" height="26" viewBox="0 0 71 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_203_5" fill="white">
                                <path d="M0 6C0 2.68629 2.68629 0 6 0H56V17H6C2.68629 17 0 14.3137 0 11V6Z"/>
                            </mask>
                            <path d="M-2 6C-2 1.58172 1.58172 -2 6 -2H56V2H6C3.79086 2 2 3.79086 2 6H-2ZM56 19H6C1.58172 19 -2 15.4183 -2 11H2C2 13.2091 3.79086 15 6 15H56V19ZM6 19C1.58172 19 -2 15.4183 -2 11V6C-2 1.58172 1.58172 -2 6 -2V2C3.79086 2 2 3.79086 2 6V11C2 13.2091 3.79086 15 6 15V19ZM56 0V17V0Z" fill="#1D1D1D" mask="url(#path-1-inside-1_203_5)"/>
                            <path d="M70.25 15.567C70.5833 15.7594 70.5833 16.2406 70.25 16.433L56.75 24.2272C56.4167 24.4197 56 24.1791 56 23.7942V8.20577C56 7.82087 56.4167 7.58031 56.75 7.77276L70.25 15.567Z" fill="#1D1D1D"/>
                        </svg>
                        <span>Homepage</span>
                    </Link> 
                </div>
            </main>
        </Layout>
    )
}

export default ErrorPage;