import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import Loader from '../../components/shared/Loader/Loader'

const RootLayout = () => {

  const { state } = useNavigation()

  return (
    <div>
        <header>

        </header>

        <main>
            {
                state === 'loading' ? <Loader></Loader> : <Outlet></Outlet>
            }
        </main>

        <footer>

        </footer>
    </div>
  )
}

export default RootLayout