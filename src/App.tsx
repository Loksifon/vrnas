import React from 'react'

import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

interface Props {}

export const App = (props: Props ) => {
	return (
		<>
			<div className="wrapper">
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer/>
			</div>
		</>
	)
}


