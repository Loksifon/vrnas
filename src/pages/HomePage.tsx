import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const HomePage = () => {

	const location = useLocation()

	useEffect(() => {
		console.log("current location is ", location);
	}, [location])

	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/one">Page One</Link>
					</li>
					<li>
						<Link to="/two">Page Two</Link>
					</li>
					<li>
						<Link to="/three">Page three</Link>
					</li>
				</ul>
			</nav>
			<hr />
			<Outlet />
		</>
	);
	
}
