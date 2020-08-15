import React from 'react';
import { Link } from 'gatsby';

import './index.scss';

export default () => (
	<header className='header'>
		<h1>
			<Link to='/'>Gatsby Demo</Link>
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
