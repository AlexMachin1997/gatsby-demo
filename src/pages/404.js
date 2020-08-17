import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const NoMatch = () => (
	<Layout>
		<h1>Not found</h1>
		<p>
			<Link to='/'>Head home</Link>
		</p>
	</Layout>
);

export default NoMatch;
