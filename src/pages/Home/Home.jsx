import React from 'react'
import { useEffect } from 'react';
import Hero from '../../components/Hero';

export default function Home() {
    useEffect(() => {
        document.title = 'Cartify | Home';
    }, []);
    
    return (
        <main>
            <Hero />
        </main>
    );
}
