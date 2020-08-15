import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default () => (
	<Layout>
		<h1>About page</h1>
		<p>Hello</p>
		<Link to='/contact'>Want to work with me?</Link>
	</Layout>
);
