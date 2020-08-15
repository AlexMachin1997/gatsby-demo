import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default () => (
	<Layout>
		<h1>Hello</h1>
		<h2>I'm Alex Machin, a Software Engineer living In Rotherham</h2>
		<p>
			Need a developer? <Link to='/contact'>Contact Me.</Link>{' '}
		</p>
	</Layout>
);
