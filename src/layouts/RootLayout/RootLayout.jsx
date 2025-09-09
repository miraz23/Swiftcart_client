import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../../components/Shared/Header/Header';
import Loader from '../../components/Shared/Loader/Loader';
import Footer from '../../components/Shared/Footer/Footer';

const RootLayout = () => {

    const { state } = useNavigation();

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main>
                {
                    state === 'loading' ? <Loader></Loader> : <Outlet></Outlet>
                }
            </main>

            <footer>
                <Footer></Footer>
            </footer>   
        </div>
    );
};

export default RootLayout;