import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import './index.scss';

export default () => {
	// Queries the sites title which is defined in the gatsby-config.js siteMetadata object
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<header className='header'>
			<h1>
				<Link to='/'>{data.site.siteMetadata.title}</Link>
			</h1>
			<nav>
				<ul className='header__navigation'>
					<li>
						<Link to='/' className='header__link' activeClassName='header__link--active'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/about' className='header__link' activeClassName='header__link--active'>
							About
						</Link>
					</li>
					<li>
						<Link to='/contact' className='header__link' activeClassName='header__link--active'>
							Contact
						</Link>
					</li>
					<li>
						<Link to='/blog' className='header__link' activeClassName='header__link--active'>
							Blog
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
