import React from 'react';
import { Link } from 'gatsby';

export default () => (
	<header>
		<Link to='/'>Gatsby Demo</Link>
		<nav>
			<ul>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					<Link to='/'>Link</Link>
				</li>
			</ul>
		</nav>
	</header>
);
