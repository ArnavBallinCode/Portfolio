'use client';
import React, { useEffect, useState } from 'react';

const PreloaderTest = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        console.log('PreloaderTest mounted');
        // Hide after 3 seconds for testing
        const timer = setTimeout(() => {
            console.log('Hiding preloader test');
            setShow(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    console.log('PreloaderTest rendering');

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'red',
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '32px',
            }}
        >
            TEST PRELOADER
        </div>
    );
};

export default PreloaderTest;
