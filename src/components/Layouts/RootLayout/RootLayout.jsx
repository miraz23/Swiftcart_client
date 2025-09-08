import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Nav from '../../Shared/Header/index.jsx';
import Loader from '../../Shared/Loader/Loader';

const RootLayout = () => {

    const { state } = useNavigation();

    return (
        <div>
            <header>
                <Nav></Nav>
            </header>

            <main>
                {
                    state === 'loading' ? <Loader></Loader> : <Outlet></Outlet>
                }
            </main>
{/* 
            <footer>
                <Footer></Footer>
            </footer>    */}
        </div>
    );
};

export default RootLayout;