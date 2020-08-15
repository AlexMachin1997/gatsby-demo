import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
	<div>
		<Header />
		{children}
		<Footer />
	</div>
);

Layout.propTypes = {
	children: PropTypes.object.isRequired
};

export default Layout;